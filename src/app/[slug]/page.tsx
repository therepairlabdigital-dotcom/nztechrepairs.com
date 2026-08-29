import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import DevicePageContent, { deviceIntro } from '@/components/DevicePageContent';
import LocationPageContent from '@/components/LocationPageContent';
import MatrixPageContent from '@/components/MatrixPageContent';
import { deviceModels, getDeviceByParam } from '@/lib/devices';
import { deviceImage, serviceImage, LOCATION_IMAGE } from '@/lib/imagery';
import { getLocationBySlug, locations } from '@/lib/locations';
import { getMatrixBySlug, matrixPages } from '@/lib/matrix';
import { site } from '@/lib/site';

type Params = { params: Promise<{ slug: string }> };

/**
 * One dynamic segment serves three page families, all statically generated:
 *   suburb   phone-repair-{suburb}
 *   matrix   {service}-in-{suburb}
 *   device   {model}-repair-warkworth
 *
 * Static routes (/about, /services, /contact, ...) take precedence over this
 * dynamic segment, and dynamicParams=false makes anything unknown a 404.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...locations.map((location) => ({ slug: location.slug })),
    ...matrixPages.map((page) => ({ slug: page.slug })),
    ...deviceModels.map((model) => ({ slug: `${model.slug}-repair-warkworth` })),
  ];
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const canonical = `/${slug}`;

  const location = getLocationBySlug(slug);
  if (location) {
    return {
      title: location.metaTitle,
      description: location.metaDescription,
      alternates: { canonical },
      openGraph: {
        title: location.metaTitle,
        description: location.metaDescription,
        url: `${site.url}${canonical}`,
        siteName: site.name,
        images: [LOCATION_IMAGE],
        locale: 'en_NZ',
        type: 'website',
      },
    };
  }

  const matrix = getMatrixBySlug(slug);
  if (matrix) {
    return {
      title: matrix.metaTitle,
      description: matrix.metaDescription,
      keywords: [
        `${matrix.service.shortName.toLowerCase()} ${matrix.suburb.toLowerCase()}`,
        `phone repair ${matrix.suburb.toLowerCase()}`,
        ...matrix.service.keywords.slice(0, 2),
      ],
      alternates: { canonical },
      openGraph: {
        title: matrix.metaTitle,
        description: matrix.metaDescription,
        url: `${site.url}${canonical}`,
        siteName: site.name,
        images: [serviceImage(matrix.service.slug)],
        locale: 'en_NZ',
        type: 'website',
      },
    };
  }

  const model = getDeviceByParam(slug);
  if (model) {
    const title = `${model.name} Repair Warkworth | Screen & Battery | NZ Tech Repairs`;
    const description = deviceIntro(model);
    return {
      title,
      description,
      keywords: [
        `${model.name.toLowerCase()} repair warkworth`,
        `${model.name.toLowerCase()} screen replacement`,
        `${model.name.toLowerCase()} battery replacement`,
      ],
      alternates: { canonical },
      openGraph: {
        title,
        description,
        url: `${site.url}${canonical}`,
        siteName: site.name,
        images: [deviceImage(model.slug, model.photo)],
        locale: 'en_NZ',
        type: 'website',
      },
    };
  }

  return {};
}

export default async function DynamicPage({ params }: Params) {
  const { slug } = await params;

  const location = getLocationBySlug(slug);
  if (location) return <LocationPageContent location={location} />;

  const matrix = getMatrixBySlug(slug);
  if (matrix) return <MatrixPageContent page={matrix} />;

  const model = getDeviceByParam(slug);
  if (model) return <DevicePageContent model={model} />;

  notFound();
}

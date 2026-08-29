import React from 'react';

type Props = { size?: number; className?: string };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.9,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
});

export const CheckIcon = ({ size = 14, className }: Props) => (
  <svg {...base(size)} strokeWidth={3.2} className={className}><path d="M20 6 9 17l-5-5" /></svg>
);

export const CarIcon = ({ size = 20, className }: Props) => (
  <svg {...base(size)} className={className}>
    <path d="M5 17H3v-5l2-5h14l2 5v5h-2" />
    <circle cx="7.5" cy="17" r="2" />
    <circle cx="16.5" cy="17" r="2" />
    <path d="M9.5 17h5" />
  </svg>
);

export const ParkingIcon = ({ size = 20, className }: Props) => (
  <svg {...base(size)} className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M10 17V7h3a3 3 0 0 1 0 6h-3" />
  </svg>
);

export const PinIcon = ({ size = 20, className }: Props) => (
  <svg {...base(size)} className={className}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const PhoneIcon = ({ size = 18, className }: Props) => (
  <svg {...base(size)} className={className}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
  </svg>
);

export const ClockIcon = ({ size = 22, className }: Props) => (
  <svg {...base(size)} className={className}><circle cx="12" cy="12" r="10" /><polyline points="12 7 12 12 15 14" /></svg>
);

export const ShieldIcon = ({ size = 22, className }: Props) => (
  <svg {...base(size)} className={className}><path d="M12 2l8 3v6c0 5-3.4 8.5-8 11-4.6-2.5-8-6-8-11V5l8-3z" /><path d="M9 12l2 2 4-4" /></svg>
);

export const ToolIcon = ({ size = 22, className }: Props) => (
  <svg {...base(size)} className={className}>
    <path d="M14.7 6.3a4 4 0 0 0 5 5L21 21H3l1.3-9.7a4 4 0 0 0 5-5L12 4Z" />
  </svg>
);

export const TruckIcon = ({ size = 22, className }: Props) => (
  <svg {...base(size)} className={className}>
    <path d="M3 16V6h11v10" /><path d="M14 9h4l3 3v4h-3" />
    <circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" /><path d="M9 17h6" />
  </svg>
);

export const StarIcon = ({ size = 22, className }: Props) => (
  <svg {...base(size)} className={className}><path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2-6.3-4.6L5.7 21l2.3-7.2-6-4.4h7.6z" /></svg>
);

export const WalletIcon = ({ size = 22, className }: Props) => (
  <svg {...base(size)} className={className}>
    <rect x="2" y="6" width="20" height="14" rx="3" /><path d="M2 10h20" /><circle cx="17.5" cy="15" r="1.2" />
  </svg>
);

export const MailIcon = ({ size = 22, className }: Props) => (
  <svg {...base(size)} className={className}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 6 10-6" /></svg>
);

export const BuildingIcon = ({ size = 22, className }: Props) => (
  <svg {...base(size)} className={className}>
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2" />
  </svg>
);

export const BookIcon = ({ size = 22, className }: Props) => (
  <svg {...base(size)} className={className}>
    <path d="M4 5a2 2 0 0 1 2-2h13v18H6a2 2 0 0 1-2-2Z" /><path d="M4 17h15" />
  </svg>
);

export const GamepadIcon = ({ size = 22, className }: Props) => (
  <svg {...base(size)} className={className}>
    <path d="M6 11h4M8 9v4M15 11h.01M17.5 13h.01" />
    <rect x="2" y="6" width="20" height="12" rx="5" />
  </svg>
);

export const CableIcon = ({ size = 22, className }: Props) => (
  <svg {...base(size)} className={className}>
    <path d="M5 4v5a3 3 0 0 0 3 3h8a3 3 0 0 1 3 3v5" /><path d="M3 4h4M17 17h4" />
  </svg>
);

export const DroneIcon = ({ size = 22, className }: Props) => (
  <svg {...base(size)} className={className}>
    <rect x="9" y="9" width="6" height="6" rx="1.5" />
    <path d="M9 9 5 5M15 9l4-4M9 15l-4 4M15 15l4 4" />
    <circle cx="5" cy="5" r="2" /><circle cx="19" cy="5" r="2" /><circle cx="5" cy="19" r="2" /><circle cx="19" cy="19" r="2" />
  </svg>
);

export const TagIcon = ({ size = 22, className }: Props) => (
  <svg {...base(size)} className={className}>
    <path d="M20.6 13.4 12 22l-9-9V3h10l7.6 7.6a2 2 0 0 1 0 2.8Z" /><circle cx="7.5" cy="7.5" r="1.3" />
  </svg>
);

export const GraduationIcon = ({ size = 22, className }: Props) => (
  <svg {...base(size)} className={className}>
    <path d="m12 3 10 5-10 5L2 8l10-5Z" /><path d="M6 10.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-5.5" />
  </svg>
);

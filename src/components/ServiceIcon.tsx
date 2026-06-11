import React from 'react';

const paths: Record<string, React.ReactNode> = {
  phone: (<><rect x="7" y="2" width="10" height="20" rx="2" /><line x1="11" y1="18" x2="13" y2="18" /></>),
  samsung: (<><rect x="6" y="2" width="12" height="20" rx="3" /><line x1="10" y1="19" x2="14" y2="19" /></>),
  tablet: (<><rect x="4" y="2" width="16" height="20" rx="2" /><line x1="10" y1="18" x2="14" y2="18" /></>),
  screen: (<><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M8 7l3 3-3 3" /><path d="M16 6l-3 5 3 3" /></>),
  battery: (<><rect x="2" y="7" width="16" height="10" rx="2" /><line x1="22" y1="11" x2="22" y2="13" /><path d="M11 9l-2 3h3l-2 3" /></>),
  charging: (<><path d="M7 7V4a1 1 0 0 1 1-1h0a1 1 0 0 1 1 1v3" /><path d="M15 7V4a1 1 0 0 1 1-1h0a1 1 0 0 1 1 1v3" /><rect x="5" y="7" width="14" height="7" rx="2" /><path d="M12 14v4" /><path d="M10 18h4" /></>),
  water: (<path d="M12 2.7s6 6.5 6 10.3a6 6 0 0 1-12 0c0-3.8 6-10.3 6-10.3z" />),
  macbook: (<><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M2 20h20l-2-2H4l-2 2z" /></>),
  laptop: (<><rect x="4" y="5" width="16" height="11" rx="1" /><path d="M2 20h20" /><path d="M9 20l1-2h4l1 2" /></>),
  tv: (<><rect x="3" y="5" width="18" height="13" rx="2" /><path d="M8 21h8" /><path d="M12 18v3" /></>),
  watch: (<><rect x="7" y="7" width="10" height="10" rx="3" /><path d="M9 7l1-4h4l1 4" /><path d="M9 17l1 4h4l1-4" /></>),
  data: (<><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" /><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" /></>),
  unlock: (<><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 7.5-2" /><circle cx="12" cy="16" r="1.4" /></>),
  shield: (<><path d="M12 2l8 3v6c0 5-3.4 8.5-8 11-4.6-2.5-8-6-8-11V5l8-3z" /><path d="M9 12l2 2 4-4" /></>),
  accessories: (<><path d="M4 13a4 4 0 0 1 0-8" /><path d="M20 13a4 4 0 0 0 0-8" /><rect x="7" y="5" width="10" height="14" rx="3" /></>),
};

export default function ServiceIcon({ name, size = 24, className }: { name: string; size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] ?? paths.phone}
    </svg>
  );
}

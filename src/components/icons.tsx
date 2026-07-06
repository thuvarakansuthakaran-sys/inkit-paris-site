type IconProps = { className?: string };

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function NeedleIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <circle cx="17" cy="7" r="2.2" />
      <path d="M15.5 8.5 5 19M12 12 9 9M10 14l-3 3M7 17l-2 2" />
    </svg>
  );
}

export function DropletIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M12 3c3.5 4 6 7.2 6 10.5a6 6 0 1 1-12 0C6 10.2 8.5 7 12 3Z" />
    </svg>
  );
}

export function LayersIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="m12 3 8 4.5-8 4.5-8-4.5L12 3Z" />
      <path d="m4 12 8 4.5 8-4.5" />
      <path d="m4 16.5 8 4.5 8-4.5" />
    </svg>
  );
}

export function CompassIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="m14.5 9.5-1.8 5.2a.8.8 0 0 1-1 .5l-.2-.1-1.8 1a.6.6 0 0 1-.8-.8l1-1.8-.1-.2a.8.8 0 0 1 .5-1L14.5 9.5Z" />
    </svg>
  );
}

export function BriefcaseIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <rect x="3" y="7.5" width="18" height="12" rx="1.5" />
      <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5M3 13h18" />
    </svg>
  );
}

export function MessageIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M4 5.5h16v11H9l-4 3.5v-3.5H4v-11Z" />
    </svg>
  );
}

export function CheckCircleIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.2 12.3 2.5 2.5 5-5.3" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.3l3.5 2" />
    </svg>
  );
}

export function RouteIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <circle cx="5.5" cy="18" r="2" />
      <circle cx="18.5" cy="6" r="2" />
      <path d="M7.3 17 15 8.8M15 17c2 0 3.5-1 3.5-3s-1.5-3-3.5-3H9c-2 0-3.5-1-3.5-3" />
    </svg>
  );
}

export function ShirtIcon({ className }: IconProps) {
  return (
    <svg className={className} {...base}>
      <path d="M8 3 4 6.5 6 9l1.5-1v11.5h9V8l1.5 1 2-2.5L16 3l-2 1.5h-4L8 3Z" />
    </svg>
  );
}

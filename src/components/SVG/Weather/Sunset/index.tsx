import React, { ReactElement } from 'react';
import useUniqueId from 'hooks/useUniqueId';

type SunsetProps = {
  className?: string;
};

const Sunset = ({ className }: SunsetProps): ReactElement => {
  const { id: gradientId, url: gradientUrl } = useUniqueId();
  const { id: clipPathId, url: clipPathUrl } = useUniqueId();
  const { id: cId } = useUniqueId();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      className={className}
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="149.99"
          y1="119.24"
          x2="234.01"
          y2="264.76"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fbbf24" />
          <stop offset="0.45" stopColor="#fbbf24" />
          <stop offset="1" stopColor="#f59e0b" />
        </linearGradient>
        <clipPath id={clipPathId}>
          <path
            d="M512,306H296.08a21.5,21.5,0,0,0-14.16,5.32L256,334l-25.92-22.68A21.5,21.5,0,0,0,215.92,306H0V0H512Z"
            fill="none"
          />
        </clipPath>
        <symbol id={cId} viewBox="0 0 384 384">
          <circle
            cx="192"
            cy="192"
            r="84"
            stroke="#f8af18"
            strokeMiterlimit="10"
            strokeWidth="6"
            fill={gradientUrl}
          />

          <path
            d="M192,61.66V12m0,360V322.34M284.17,99.83l35.11-35.11M64.72,319.28l35.11-35.11m0-184.34L64.72,64.72M319.28,319.28l-35.11-35.11M61.66,192H12m360,0H322.34"
            fill="none"
            stroke="#fbbf24"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="24"
          >
            <animateTransform
              attributeName="transform"
              additive="sum"
              type="rotate"
              values="0 192 192; 45 192 192"
              dur="6s"
              repeatCount="indefinite"
            />
          </path>
        </symbol>
      </defs>
      <g clipPath={clipPathUrl}>
        <use width="384" height="384" transform="translate(64 100)" xlinkHref={`#${cId}`} />
      </g>
      <polyline
        points="128 332 216 332 256 368 296 332 384 332"
        fill="none"
        stroke="#374151"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="18"
      />
    </svg>
  );
};

export default Sunset;

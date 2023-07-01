import React, { ReactElement } from 'react';
import useUniqueId from 'hooks/useUniqueId';

const PartlyCloudyDay = (): ReactElement => {
  const { id: gradientId, url: gradientUrl } = useUniqueId();
  const { id: bId, url: bUrl } = useUniqueId();
  const { id: cId } = useUniqueId();
  const { id: dId } = useUniqueId();
  const { id: eId } = useUniqueId();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="99.45"
          y1="30.68"
          x2="232.64"
          y2="261.37"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#f3f7fe" />
          <stop offset="0.45" stop-color="#f3f7fe" />
          <stop offset="1" stop-color="#deeafb" />
        </linearGradient>
        <linearGradient
          id={bId}
          x1="78"
          y1="63.35"
          x2="118"
          y2="132.65"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#fbbf24" />
          <stop offset="0.45" stop-color="#fbbf24" />
          <stop offset="1" stop-color="#f59e0b" />
        </linearGradient>
        <symbol id={dId} viewBox="0 0 196 196">
          <circle
            cx="98"
            cy="98"
            r="40"
            stroke="#f8af18"
            strokeMiterlimit="10"
            strokeWidth="4"
            fill={bUrl}
          />

          <path
            d="M98,31.38V6m0,184V164.62M145.11,50.89,163.05,33M33,163.05l17.94-17.94m0-94.22L33,33m130.1,130.1-17.94-17.94M6,98H31.38M190,98H164.62"
            fill="none"
            stroke="#fbbf24"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="12"
          >
            <animateTransform
              attributeName="transform"
              additive="sum"
              type="rotate"
              values="0 98 98; 45 98 98"
              dur="6s"
              repeatCount="indefinite"
            />
          </path>
        </symbol>
        <symbol id={eId} viewBox="0 0 350 222">
          <path
            d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
            stroke="#e6effc"
            strokeMiterlimit="10"
            strokeWidth="6"
            fill={gradientUrl}
          />
        </symbol>
        <symbol id={cId} viewBox="0 0 363 258">
          <use width="196" height="196" xlinkHref={`#${dId}`} />
          <use width="350" height="222" transform="translate(13 36)" xlinkHref={`#${eId}`} />
        </symbol>
      </defs>
      <use width="363" height="258" transform="translate(68 109)" xlinkHref={`#${cId}`} />
    </svg>
  );
};

export default PartlyCloudyDay;

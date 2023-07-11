import React, { ReactElement } from 'react';
import useUniqueId from 'hooks/useUniqueId';

const LightRainDay = (): ReactElement => {
  const { id: gradientId, url: gradientUrl } = useUniqueId();
  const { id: bId, url: bUrl } = useUniqueId();
  const { id: cId, url: cUrl } = useUniqueId();
  const { id: dId, url: dUrl } = useUniqueId();
  const { id: eId, url: eUrl } = useUniqueId();
  const { id: fId } = useUniqueId();
  const { id: gId } = useUniqueId();
  const { id: hId } = useUniqueId();

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
          <stop offset="0" stopColor="#f3f7fe" />
          <stop offset="0.45" stopColor="#f3f7fe" />
          <stop offset="1" stopColor="#deeafb" />
        </linearGradient>
        <linearGradient
          id={bId}
          x1="78"
          y1="63.35"
          x2="118"
          y2="132.65"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fbbf24" />
          <stop offset="0.45" stopColor="#fbbf24" />
          <stop offset="1" stopColor="#f59e0b" />
        </linearGradient>
        <linearGradient
          id={cId}
          x1="1308.33"
          y1="-657.94"
          x2="1317.79"
          y2="-633.3"
          gradientTransform="translate(-995.89 1205.08) rotate(-9)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#0b65ed" />
          <stop offset="0.45" stopColor="#0a5ad4" />
          <stop offset="1" stopColor="#0950bc" />
        </linearGradient>
        <linearGradient
          id={dId}
          x1="1363.64"
          y1="-649.18"
          x2="1373.1"
          y2="-624.54"
          xlinkHref={`#${cId}`}
        />
        <linearGradient
          id={eId}
          x1="1418.95"
          y1="-640.42"
          x2="1428.41"
          y2="-615.78"
          xlinkHref={`#${cId}`}
        />
        <symbol id={gId} viewBox="0 0 196 196">
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
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="12"
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
        <symbol id={hId} viewBox="0 0 350 222">
          <path
            d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
            stroke="#e6effc"
            strokeMiterlimit="10"
            strokeWidth="6"
            fill={gradientUrl}
          />
        </symbol>
        <symbol id={fId} viewBox="0 0 363 258">
          <use width="196" height="196" xlinkHref={`#${gId}`} />
          <use width="350" height="222" transform="translate(13 36)" xlinkHref={`#${hId}`} />
        </symbol>
      </defs>
      <use width="363" height="258" transform="translate(68 109)" xlinkHref={`#${fId}`} />

      <path
        d="M200,376a8,8,0,0,1-8-8V356a8,8,0,0,1,16,0v12A8,8,0,0,1,200,376Z"
        stroke="#0a5ad4"
        strokeMiterlimit="10"
        fill={cUrl}
        opacity="0"
      >
        <animateTransform
          id="x1"
          attributeName="transform"
          additive="sum"
          type="translate"
          values="0 -32; 0 -32; 0 120;"
          begin="0s; x1.end+1s"
          dur="1s"
          keyTimes="0; .25; 1"
        />

        <animate
          id="y1"
          attributeName="opacity"
          values="0; 1; 0"
          begin="0s; y1.end+1s"
          dur="1s"
          keyTimes="0; .25; 1"
        />
      </path>

      <path
        d="M256,376a8,8,0,0,1-8-8V356a8,8,0,0,1,16,0v12A8,8,0,0,1,256,376Z"
        stroke="#0a5ad4"
        strokeMiterlimit="10"
        fill={dUrl}
        opacity="0"
      >
        <animateTransform
          id="x2"
          attributeName="transform"
          additive="sum"
          type="translate"
          values="0 -32; 0 -32; 0 120;"
          begin="1.34s; x2.end+1s"
          dur="1s"
          keyTimes="0; .25; 1"
        />

        <animate
          id="y2"
          attributeName="opacity"
          values="0; 1; 0"
          begin="1.34s; y2.end+1s"
          dur="1s"
          keyTimes="0; .25; 1"
        />
      </path>

      <path
        d="M312,376a8,8,0,0,1-8-8V356a8,8,0,0,1,16,0v12A8,8,0,0,1,312,376Z"
        stroke="#0a5ad4"
        strokeMiterlimit="10"
        fill={eUrl}
        opacity="0"
      >
        <animateTransform
          id="x3"
          attributeName="transform"
          additive="sum"
          type="translate"
          values="0 -32; 0 -32; 0 120;"
          begin=".67s; x3.end+1s"
          dur="1s"
          keyTimes="0; .25; 1"
        />

        <animate
          id="y3"
          attributeName="opacity"
          values="0; 1; 0"
          begin=".67s; y3.end+1s"
          dur="1s"
          keyTimes="0; .25; 1"
        />
      </path>
    </svg>
  );
};

export default LightRainDay;

import React, { ReactElement } from 'react';
import useUniqueId from 'hooks/useUniqueId';

const OvercastDay = (): ReactElement => {
  const { id: gradientId, url: gradientUrl } = useUniqueId();
  const { id: clipPathId, url: clipPathUrl } = useUniqueId();

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
          id={clipPathId}
          x1="52.74"
          y1="9.62"
          x2="133.36"
          y2="149.27"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#9ca3af" />
          <stop offset="0.45" stop-color="#9ca3af" />
          <stop offset="1" stop-color="#6b7280" />
        </linearGradient>
        <symbol id="d" viewBox="0 0 200.26 126.12">
          <path
            d="M.5,93.18a32.44,32.44,0,0,0,32.44,32.44H162.69v-.12c.77,0,1.53.12,2.31.12a34.75,34.75,0,0,0,6.49-68.89A32.38,32.38,0,0,0,123,23.62,48.58,48.58,0,0,0,34.4,60.81c-.49,0-1-.07-1.46-.07A32.44,32.44,0,0,0,.5,93.18Z"
            stroke="#848b98"
            stroke-miterlimit="10"
            fill={clipPathUrl}
          />
        </symbol>
        <symbol id="e" viewBox="0 0 350 222">
          <path
            d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
            stroke="#e6effc"
            stroke-miterlimit="10"
            stroke-width="6"
            fill={gradientUrl}
          />
        </symbol>
        <symbol id="c" viewBox="0 0 398 222" overflow="visible">
          <use width="200.26" height="126.12" transform="translate(198 27)" xlinkHref="#d">
            <animateTransform
              attributeName="transform"
              additive="sum"
              type="translate"
              values="-9 0; 9 0; -9 0"
              dur="6s"
              repeatCount="indefinite"
            />
          </use>

          <use width="350" height="222" xlinkHref="#e">
            <animateTransform
              attributeName="transform"
              additive="sum"
              type="translate"
              values="-18 0; 18 0; -18 0"
              dur="6s"
              repeatCount="indefinite"
            />
          </use>
        </symbol>
      </defs>
      <use width="398" height="222" transform="translate(68.84 145)" xlinkHref="#c" />
    </svg>
  );
};

export default OvercastDay;

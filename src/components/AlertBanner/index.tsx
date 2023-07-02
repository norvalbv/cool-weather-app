import React, { ReactElement } from 'react';
import AlertIcon from 'components/SVG/AlertIcon';
import { Alerts } from 'types';
import { convertToDate } from 'utils/convertToTime';

type AlertBannerProps = {
  alerts: Alerts[];
};

const AlertBanner = ({ alerts }: AlertBannerProps): ReactElement => {
  return (
    <>
      {alerts.map((alert, idx) => (
        <div key={`${alert.event}_${idx}`} className="flex items-center gap-4">
          <AlertIcon />
          <div className="flex flex-col gap-2">
            <div>
              <h2 className="font-semibold underline">{alert.event}</h2>
              <span className="inline-block">
                Start Time:&nbsp;{convertToDate(alert.start, false, { type: 'short' })}
              </span>
              <span className="inline-block">
                End Time:&nbsp;{convertToDate(alert.end, false, { type: 'short' })}
              </span>
            </div>
            <p className="text-sm">{alert.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default AlertBanner;

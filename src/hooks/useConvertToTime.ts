import { useState, useEffect } from 'react';

type UseConvertToTimeProps = { epoch: number; offset: number };

const useConvertToTime = ({ epoch, offset }: UseConvertToTimeProps) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const date = new Date((epoch + offset) * 1000);
    const hours = date.getUTCHours();
    const minutes = '0' + date.getUTCMinutes();

    setTime(`${hours}:${minutes.substr(-2)}`);
  }, [epoch, offset]);

  return time;
};

export default useConvertToTime;

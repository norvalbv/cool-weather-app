type UseConvertToTimeProps = { epoch: number; offset: number };

const convertEpochToTime = ({ epoch, offset }: UseConvertToTimeProps): string => {
  const date = new Date((epoch + offset) * 1000);
  const hours = date.getUTCHours();
  const minutes = '0' + date.getUTCMinutes();

  return `${hours}:${minutes.substr(-2)}`;
};

export default convertEpochToTime;

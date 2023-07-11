import { Temperature } from 'types';

const tempValidator = (temp: number | Temperature) => {
  const temperature =
    typeof temp === 'object'
      ? Number(
          (
            Object.values(temp).reduce((acc, temp) => acc + temp, 0) / Object.values(temp).length
          ).toFixed(2)
        )
      : temp;

  return temperature;
};

export default tempValidator;

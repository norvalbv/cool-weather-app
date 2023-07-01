import LightRainDay from 'components/SVG/Weather/LightRainDay';
import OvercastDay from 'components/SVG/Weather/OvercastDay/ index';
import PartlyCloudyDay from 'components/SVG/Weather/PartlyCloudyDay';

export const weatherIcons: { [key: string]: JSX.Element } = {
  'broken clouds': <PartlyCloudyDay />,
  'overcast clouds': <OvercastDay />,
  'light rain': <LightRainDay />,
};

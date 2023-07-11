import LightRainDay from 'components/SVG/Weather/LightRainDay';
import OvercastDay from 'components/SVG/Weather/OvercastDay';
import PartlyCloudyDay from 'components/SVG/Weather/PartlyCloudyDay';
import Rain from 'components/SVG/Weather/Rain';

export const weatherIcons: { [key: string]: JSX.Element } = {
  'broken clouds': <PartlyCloudyDay />,
  'overcast clouds': <OvercastDay />,
  'light rain': <LightRainDay />,
  'moderate rain': <Rain />,
  'scattered clouds': <PartlyCloudyDay />,
};

import ClearDay from 'components/SVG/Weather/ClearDay';
import LightRainDay from 'components/SVG/Weather/LightRainDay';
import OvercastDay from 'components/SVG/Weather/OvercastDay';
import PartlyCloudyDay from 'components/SVG/Weather/PartlyCloudyDay';
import Rain from 'components/SVG/Weather/Rain';

export const weatherIcons: { [key: string]: JSX.Element } = {
  'moderate rain': <Rain />,
  'heavy intensity rain': <Rain />,
  'light rain': <LightRainDay />,
  'overcast clouds': <OvercastDay />,
  'broken clouds': <PartlyCloudyDay />,
  'scattered clouds': <PartlyCloudyDay />,
  'few clouds': <PartlyCloudyDay />,
  'clear sky': <ClearDay />,
};

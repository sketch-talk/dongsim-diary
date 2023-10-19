import { ReactComponent as CloudIcon } from '../../assets/cloud-icon.svg';
import { ReactComponent as SunIcon } from '../../assets/sun-icon.svg';
import { ReactComponent as RainyIcon } from '../../assets/rainy-icon.svg';
import { ReactComponent as SnowmanIcon } from '../../assets/snowman-icon.svg';
import { styled } from 'styled-components';

const weatherIcons = [
  { Component: SunIcon, type: 'sunny' },
  { Component: CloudIcon, type: 'cloudy' },
  { Component: RainyIcon, type: 'rainy' },
  { Component: SnowmanIcon, type: 'snowy' },
];

interface Props {
  weather: string;
  handleClickWeather: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

const Weathers = ({ weather, handleClickWeather }: Props) => {
  return (
    <>
      {weatherIcons.map(({ Component, type }) => (
        <S.WeatherIconContainer key={type} $isActive={weather === type}>
          <Component
            onClick={handleClickWeather}
            data-weather={type}
            width={25}
            height={25}
          />
        </S.WeatherIconContainer>
      ))}
    </>
  );
};

export default Weathers;

const S = {
  WeatherIconContainer: styled.div<{ $isActive: boolean }>`
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    transform: ${({ $isActive }) => ($isActive ? 'scale(1.2)' : 'scale(1)')};
    border: ${({ $isActive }) => ($isActive ? '2px solid #f01d1d' : 'none')};
    border-radius: ${({ $isActive }) => ($isActive ? '50%' : 'none')};
    padding: 2px;
    box-sizing: border-box;
  `,
};

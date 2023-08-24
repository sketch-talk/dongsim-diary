import { ReactComponent as CloudIcon } from '../../assets/cloud-icon.svg';
import { ReactComponent as SunIcon } from '../../assets/sun-icon.svg';
import { ReactComponent as RainyIcon } from '../../assets/rainy-icon.svg';
import { ReactComponent as SnowmanIcon } from '../../assets/snowman-icon.svg';
import { ReactComponent as Circle } from '../../assets/circle.svg';
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
        <S.WeatherIconContainer key={type}>
          {weather === type && <S.StyledCircle />}
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
  WeatherIconContainer: styled.div`
    display: flex;
    align-items: center;
    position: relative;

    cursor: pointer;
  `,

  StyledCircle: styled(Circle)`
    width: 45px;
    height: 45px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  `,
};

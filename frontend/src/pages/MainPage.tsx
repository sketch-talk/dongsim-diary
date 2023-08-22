import { styled } from 'styled-components';
import Layout from '../components/Layout/Layout';
import { ReactComponent as CloudIcon } from '../assets/cloud-icon.svg';
import { ReactComponent as SunIcon } from '../assets/sun-icon.svg';
import { ReactComponent as RainyIcon } from '../assets/rainy-icon.svg';
import { ReactComponent as SnowmanIcon } from '../assets/snowman-icon.svg';
import { ReactComponent as Circle } from '../assets/circle.svg';
import { ChangeEvent, FormEvent, useState } from 'react';
// import { useAi } from '../hooks/useAi';
import { day, getDate, getDay, getMonth, getYear } from '../utils/date';
import DiaryContents from '../components/DiaryContents/DiaryContents';

const MainPage = () => {
  const [diaryTitle, setDiaryTitle] = useState<string>('');
  const [weather, setWeather] = useState<string>('');
  const [diaryContents, setDiaryContents] = useState<string>('');
  const [diaryCharacters, setDiaryCharacters] = useState<string[]>([]);

  const [isWritten, setIsWritten] = useState<boolean>(false);

  // const { data, createImage } = useAi();

  const weatherIcons = [
    { Component: SunIcon, type: 'sunny' },
    { Component: CloudIcon, type: 'cloudy' },
    { Component: RainyIcon, type: 'rainy' },
    { Component: SnowmanIcon, type: 'snowy' },
  ];

  const handleChangeTitleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setDiaryTitle(inputValue);
  };

  const handleResizeHeight = (e: FormEvent<HTMLTextAreaElement>) => {
    e.currentTarget.style.height = 'auto';
    e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';

    setDiaryContents(e.currentTarget.value);
  };

  const handleSubmitDiary = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const char = diaryContents.split('');

    setDiaryCharacters(char);
    setIsWritten(true);
  };

  const handleClickWeather = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    if (isWritten) return;

    const weatherType = e.currentTarget.getAttribute('data-weather');
    if (weatherType) {
      setWeather(weatherType);
    }
  };

  console.log(weather);
  // const handleSubmitButton = (e: FormEvent<HTMLButtonElement>) => {
  //   e.preventDefault();

  //   setIsWritten(true);

  //   const textPrompt = diaryContents;

  //   if (textPrompt !== null && typeof textPrompt === 'string') {
  //     createImage(textPrompt);
  //   }

  //   alert('그림을 생성하겠습니다.');
  // };

  return (
    <Layout>
      <S.DateWeatherContainer>
        <S.DateWrapper>
          <S.Date>
            <S.HighlightedText>{getYear}</S.HighlightedText>년
            <S.HighlightedText>{getMonth}</S.HighlightedText>월
            <S.HighlightedText>{getDate}</S.HighlightedText>일
            <S.HighlightedText>{day[getDay]}</S.HighlightedText>요일
          </S.Date>
        </S.DateWrapper>
        <S.WeatherWrapper>
          <S.Weather>
            <S.WeatherTitle>날씨: </S.WeatherTitle>
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
          </S.Weather>
        </S.WeatherWrapper>
      </S.DateWeatherContainer>

      <S.DrawingWrapper>
        {isWritten ? (
          <img width="256px" height="256px" src={data} />
        ) : (
          <p>🎨 일기를 작성하면 그림이 완성돼요.</p>
        )}
      </S.DrawingWrapper>

      <S.DiaryContentContainer>
        {isWritten ? (
          <></>
        ) : (
          <DiaryContents
            diaryTitle={diaryTitle}
            diaryContents={diaryContents}
            handleChangeTitleInput={handleChangeTitleInput}
            handleResizeHeight={handleResizeHeight}
            handleSubmitDiary={handleSubmitDiary}
          />
        )}
      </S.DiaryContentContainer>

      <S.CharacterInputContainer>
        {diaryCharacters.map((item, index) => {
          return <S.CharacterInput key={index}>{item}</S.CharacterInput>;
        })}
      </S.CharacterInputContainer>
    </Layout>
  );
};

export default MainPage;

const S = {
  DateWeatherContainer: styled.div`
    display: flex;
    flex-direction: column;

    border-top: none;
  `,

  DateWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;

    border: 1px solid var(--base-color);
  `,

  Date: styled.p`
    display: flex;
    align-items: center;
    gap: 10px;

    height: 45px;
    padding-left: 15px;
  `,

  HighlightedText: styled.span`
    font-family: 'YoonChildfundkoreaManSeh';
    font-size: 24px;
  `,

  WeatherWrapper: styled.div`
    display: flex;
  `,

  Weather: styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    gap: 30px;

    height: 65px;

    border: 1px solid var(--base-color);
    border-top: none;
    border-bottom: none;
  `,

  WeatherTitle: styled.p`
    margin-right: 10px;
  `,

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

  DrawingWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 256px;

    color: var(--gray-500);

    border: 1px solid var(--base-color);
    border-top: none;
  `,

  DiaryContentContainer: styled.div``,

  CharacterInputContainer: styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(10, 35px);
    gap: 0;

    width: 100%;
  `,

  CharacterInput: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 35px;
    height: 35px;

    font-size: 24px;
    font-family: YoonChildfundkoreaManSeh;

    border: 1px solid #333333;
  `,
};

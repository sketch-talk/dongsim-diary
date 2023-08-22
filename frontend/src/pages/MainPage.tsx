import { styled } from 'styled-components';
import Layout from '../components/Layout/Layout';
import { ReactComponent as CloudIcon } from '../assets/cloud-icon.svg';
import { ReactComponent as SunIcon } from '../assets/sun-icon.svg';
import { ReactComponent as RainyIcon } from '../assets/rainy-icon.svg';
import { ReactComponent as SnowmanIcon } from '../assets/snowman-icon.svg';
import { ReactComponent as Circle } from '../assets/circle.svg';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useAi } from '../hooks/useAi';
import { day, getDate, getDay, getMonth, getYear } from '../utils/date';
import DiaryContents from '../components/DiaryContents/DiaryContents';

const MainPage = () => {
  const [diaryTitle, setDiaryTitle] = useState<string>('');
  const [weather, setWeather] = useState<string>('');
  const [diaryContents, setDiaryContents] = useState<string>('');
  const [diaryCharacters, setDiaryCharacters] = useState<string[]>([]);

  const [isWritten, setIsWritten] = useState<boolean>(false);

  const { data, createImage } = useAi();

  const weatherIcons = [
    { Component: SunIcon, type: 'sunny' },
    { Component: CloudIcon, type: 'cloudy' },
    { Component: RainyIcon, type: 'rainy' },
    { Component: SnowmanIcon, type: 'snowy' },
  ];

  const handleChangeTitleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue.length >= 16) return;

    setDiaryTitle(inputValue);
  };

  const handleResizeHeight = (e: FormEvent<HTMLTextAreaElement>) => {
    e.currentTarget.style.height = 'auto';
    e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';

    const inputValue = e.currentTarget.value;

    if (inputValue.length > 100) return;

    setDiaryContents(inputValue);
  };

  const handleSubmitDiary = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!weather) {
      return alert('날씨를 선택해주세요 ☀️');
    }

    if (!diaryTitle) {
      return alert('제목을 작성해주세요 🥺');
    }

    if (!diaryContents) {
      return alert('일기 내용을 작성해주세요 🥺');
    }

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

  const handleSubmitButton = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setIsWritten(true);

    const textPrompt = diaryContents;

    if (textPrompt !== null && typeof textPrompt === 'string') {
      createImage(textPrompt);
    }

    alert('그림을 생성하겠습니다.');
  };

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
          <>
            <S.diaryTitleContainer>
              <S.diaryTitle>제목</S.diaryTitle>
              <S.diaryTitleWritten>{diaryTitle}</S.diaryTitleWritten>
            </S.diaryTitleContainer>
            <S.CharacterInputContainer>
              {diaryCharacters.map((item, index) => {
                return <S.CharacterInput key={index}>{item}</S.CharacterInput>;
              })}
            </S.CharacterInputContainer>
          </>
        ) : (
          <DiaryContents
            diaryTitle={diaryTitle}
            diaryContents={diaryContents}
            handleChangeTitleInput={handleChangeTitleInput}
            handleResizeHeight={handleResizeHeight}
            handleSubmitDiary={handleSubmitDiary}
            handleSubmitButton={handleSubmitButton}
          />
        )}
      </S.DiaryContentContainer>
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
    font-weight: 900;
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

    & img {
      padding: 30px;
    }
  `,

  DiaryContentContainer: styled.div``,

  diaryTitleContainer: styled.div`
    display: flex;
    align-items: center;
    height: 60px;

    font-size: 24px;

    border: 1px solid var(--base-color);
    border-top: none;
  `,

  diaryTitle: styled.p`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 20%;
    padding-left: 20px;

    &::after {
      content: '';
      height: 60px;
      border-right: 1px solid var(--base-color);
      margin-left: auto;
      width: 0;
    }
  `,

  diaryTitleWritten: styled.div`
    width: 70%;
    padding-left: 20px;

    font-family: YoonChildfundkoreaManSeh;
    letter-spacing: 5px;
  `,

  CharacterInputContainer: styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(10, 1fr);
    gap: 0;
    width: 100%;

    @media (max-width: 768px) {
      grid-template-columns: repeat(10, 1fr);
    }
  `,

  CharacterInput: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    height: 60px;

    font-size: 28px;
    font-family: YoonChildfundkoreaManSeh;

    border: 1px solid #333333;

    @media (max-width: 760px) {
      height: 37.5px;
    }
  `,
};

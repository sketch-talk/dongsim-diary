import { styled } from 'styled-components';
import Layout from '../components/Layout/Layout';
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useContext,
  useState,
} from 'react';
import DiaryContents from '../components/DiaryContents/DiaryContents';
import Weathers from '../components/Weathers/Weathers';
import axios from 'axios';
import Loading from '../components/Loading/Loading';
import { BASE_URL } from '../constants';
import { usePageRouter } from '../hooks/usePageRouter';
import { DiaryContext } from '../contexts/DiaryContext';
import Date from '../components/Date/Date';

const MainPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { diaryTitle, weather, diaryContents, setDiaryContent } =
    useContext(DiaryContext);

  const { goToResultPage } = usePageRouter();

  const handleChangeTitleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (inputValue.length >= 16) return;

    setDiaryContent((prev) => ({ ...prev, diaryTitle: inputValue }));
  };

  const handleResizeHeight = (e: FormEvent<HTMLTextAreaElement>) => {
    e.currentTarget.style.height = 'auto';
    e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';

    const inputValue = e.currentTarget.value;

    if (inputValue.length > 100) return;

    setDiaryContent((prev) => ({ ...prev, diaryContents: inputValue }));
  };

  const handleClickWeather = useCallback(
    (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
      const weatherType = e.currentTarget.getAttribute('data-weather');

      if (weatherType) {
        setDiaryContent((prev) => ({ ...prev, weather: weatherType }));
      }
    },
    [setDiaryContent]
  );

  const postData = async () => {
    setIsLoading(true);
    const data = {
      title: diaryTitle,
      weather: weather,
      contents: diaryContents,
    };

    await axios
      .post(`${BASE_URL}/posts/save`, JSON.stringify(data), {
        headers: {
          'Content-Type': `application/json`,
        },
      })
      .then(async (res) => {
        setDiaryContent((prev) => ({
          ...prev,
          imageUrl: res.data.image_name.replace('static/', ''),
        }));
        setIsLoading(false);

        goToResultPage(res.data.image_name.replace('static/', ''));
      })
      .catch((error) => console.error(error));
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

    postData();
    alert('그림을 생성하겠습니다.');
  };

  // const handleShare = () => {
  //   console.log(imageUrl);
  //   alert('준비 중인 기능입니다.');
  // };

  return (
    <Layout>
      <S.DateWeatherContainer>
        <Date />
        <S.WeatherWrapper>
          <S.Weather>
            <S.WeatherTitle>날씨: </S.WeatherTitle>
            <Weathers
              weather={weather}
              handleClickWeather={handleClickWeather}
            />
          </S.Weather>
        </S.WeatherWrapper>
      </S.DateWeatherContainer>

      <S.DrawingWrapper>
        {isLoading ? (
          <Loading>
            <p>이미지를 생성 중입니다.</p>
            <p> 잠시만 기다려주세요.</p>
          </Loading>
        ) : (
          <p>🎨 일기를 작성하면 그림이 완성돼요.</p>
        )}
      </S.DrawingWrapper>

      <S.DiaryContentContainer>
        <DiaryContents
          diaryTitle={diaryTitle}
          diaryContents={diaryContents}
          handleChangeTitleInput={handleChangeTitleInput}
          handleResizeHeight={handleResizeHeight}
          handleSubmitDiary={handleSubmitDiary}
          disabled={isLoading ? true : false}
        />
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

  DrawingWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 256px;

    color: var(--gray-500);

    border: 1px solid var(--base-color);
    border-top: none;

    & img {
      padding: 0 0 20px 0;
    }
  `,

  DiaryContentContainer: styled.div``,

  diaryTitleContainer: styled.div`
    display: flex;
    align-items: center;
    height: 60px;

    font-size: 1.8rem;

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

    font-family: var(--font-manse) !important;
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
    font-family: var(--font-manse) !important;

    border: 1px solid #333333;

    @media (max-width: 760px) {
      height: 37.5px;
    }
  `,

  ShareContainer: styled.div``,
};

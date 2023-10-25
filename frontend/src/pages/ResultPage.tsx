import { styled } from 'styled-components';
import Layout from '../components/Layout/Layout';
import { SyntheticEvent, useEffect, useState } from 'react';
import Weathers from '../components/Weathers/Weathers';
import Share from '../components/Share/Share';
import { BASE_URL } from '../constants';
import Date from '../components/Date/Date';
import defaultImage from '../../public/default_image.png';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { GetDiaryResponse } from '../types/post';

const ResultPage = () => {
  const [diaryContent, setDiaryContent] = useState<GetDiaryResponse>({
    date: '',
    title: '',
    contents: '',
    weather: '',
    img_name: '',
  });

  const { imageUrl } = useParams();

  useEffect(() => {
    const getPost = async () => {
      await axios
        .get<GetDiaryResponse>(`${BASE_URL}/posts/result/${imageUrl}`)
        .then(async (res) => {
          setDiaryContent((prev) => ({
            ...prev,
            date: res.data.date,
            title: res.data.title,
            weather: res.data.weather,
            contents: res.data.contents,
            img_name: res.data.img_name,
          }));
        })
        .catch((error) => console.error(error));
    };

    getPost();
  }, []);

  const onErrorImg = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = defaultImage;
  };

  return (
    <Layout>
      <S.DateWeatherContainer>
        <Date />
        <S.WeatherWrapper>
          <S.Weather>
            <S.WeatherTitle>날씨: </S.WeatherTitle>
            <Weathers weather={diaryContent.weather} />
          </S.Weather>
        </S.WeatherWrapper>
      </S.DateWeatherContainer>
      <S.DrawingWrapper>
        <img
          width="256px"
          height="256px"
          alt="그림"
          src={`${BASE_URL}/static/${diaryContent.img_name}`}
          crossOrigin="anonymous"
          onError={onErrorImg}
        />
      </S.DrawingWrapper>
      <S.DiaryContentContainer>
        <>
          <S.diaryTitleContainer>
            <S.diaryTitle>제목</S.diaryTitle>
            <S.diaryTitleWritten>{diaryContent.title}</S.diaryTitleWritten>
          </S.diaryTitleContainer>
          <S.CharacterInputContainer>
            {diaryContent.contents.split('').map((item, index) => {
              return <S.CharacterInput key={index}>{item}</S.CharacterInput>;
            })}
          </S.CharacterInputContainer>
        </>
      </S.DiaryContentContainer>
      <Share />
    </Layout>
  );
};

export default ResultPage;

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
    font-family: var(--font-manse) !important;
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

import { styled } from 'styled-components';
import Layout from '../components/Layout/Layout';
import { ReactComponent as CloudIcon } from '../assets/cloud-icon.svg';
import { ReactComponent as SunIcon } from '../assets/sun-icon.svg';
import { ReactComponent as RainyIcon } from '../assets/rainy-icon.svg';
import { ReactComponent as SnowmanIcon } from '../assets/snowman-icon.svg';
import { ChangeEvent, FormEvent, useState } from 'react';

const MainPage = () => {
  const [diaryTitle, setDiaryTitle] = useState<string>('');
  const [diaryContents, setDiaryContents] = useState<string>('');

  const today = new Date();
  const getYear = today.getFullYear();
  const getMonth = today.getMonth() + 1;
  const getDate = today.getDate();
  const getDay = today.getDay();
  const day = ['일', '월', '화', '수', '목', '금', '토'];

  const handleChangeTitleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setDiaryTitle(e.target.value);
  };

  const handleResizeHeight = (e: FormEvent<HTMLTextAreaElement>) => {
    e.currentTarget.style.height = 'auto';
    e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';

    setDiaryContents(e.currentTarget.value);
  };

  return (
    <Layout>
      <S.DateWeatherContainer>
        <S.DateWrapper>
          <S.Date>{`${getYear}년 ${getMonth}월 ${getDate}일 ${day[getDay]}요일`}</S.Date>
        </S.DateWrapper>
        <S.WeatherWrapper>
          <S.Weather>
            <S.WeatherTitle>날씨</S.WeatherTitle>
            <SunIcon />
            <CloudIcon />
            <RainyIcon />
            <SnowmanIcon />
          </S.Weather>
        </S.WeatherWrapper>
      </S.DateWeatherContainer>

      <S.DrawingWrapper></S.DrawingWrapper>

      <S.diaryTitleContainer>
        <S.diaryTitle>제목</S.diaryTitle>
        <S.diaryTitleInput
          value={diaryTitle}
          onChange={handleChangeTitleInput}
          placeholder="일기 제목을 입력해주세요."
        />
      </S.diaryTitleContainer>
      <S.WritingContainer>
        <S.WritingArea
          value={diaryContents}
          onChange={handleResizeHeight}
          rows={1}
          placeholder="일기를 작성해주세요."
        />
      </S.WritingContainer>
      <S.SubmitButton>오늘의 일기 완성하기</S.SubmitButton>
    </Layout>
  );
};

export default MainPage;

const S = {
  DateWeatherContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 45px;

    border: 1px solid var(--base-color);
    border-top: none;
  `,

  DateWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center; // 세로 중앙 정렬 추가
    width: 50%;
    height: 100%; // 부모 요소의 높이에 맞춤

    &::after {
      content: ''; // 내용을 비워둠
      height: 45px; // 높이 지정
      border-right: 1px solid var(--base-color); // 오른쪽 테두리 지정
      margin-left: auto; // 왼쪽 마진을 자동으로 지정하여 오른쪽 끝에 위치
      width: 0; // 너비는 0으로 설정
    }
  `,

  Date: styled.p`
    padding-left: 20px;
  `,

  WeatherWrapper: styled.div`
    display: flex;
    justify-content: flex-start;

    width: 50%;
  `,

  Weather: styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    padding-left: 20px;

    & svg {
      cursor: pointer;
    }
  `,

  WeatherTitle: styled.p`
    margin-right: 10px;
  `,

  DrawingWrapper: styled.div`
    height: 256px;

    border: 1px solid var(--base-color);
    border-top: none;
  `,

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

  diaryTitleInput: styled.input`
    width: 70%;
    padding-left: 20px;

    &:focus {
      outline: none;
    }
  `,

  WritingContainer: styled.div`
    display: flex;
    justify-content: center;
  `,

  WritingArea: styled.textarea`
    width: 100%;
    min-height: 200px;
    padding: 20px;

    line-height: 1.5em;

    font-size: 24px;

    border: 1px solid var(--base-color);
    border-top: none;
  `,

  SubmitButton: styled.button`
    display: block;

    width: 80%;
    height: 50px;

    margin: 20px auto;

    font-size: 20px;
    color: var(--white-color);

    border-radius: 8px;
    background-color: var(--base-color);
  `,
};

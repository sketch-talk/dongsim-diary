import styled from 'styled-components';
import notFound from '../assets/404.png';
import { usePageRouter } from '../hooks/usePageRouter';

const NotFoundPage = () => {
  const { goToMainPage } = usePageRouter();

  const handleClickHomeButton = () => {
    goToMainPage();
  };

  return (
    <S.NotFoundPageContainer>
      <S.NotFoundImage src={notFound} />
      <S.Message>
        <S.Bold>저장된 그림이 없거나 잘못된 페이지입니다 😢</S.Bold>
      </S.Message>
      <S.Button onClick={handleClickHomeButton}>홈으로 가기</S.Button>
    </S.NotFoundPageContainer>
  );
};

export default NotFoundPage;

const S = {
  NotFoundPageContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;

    margin-top: 10vh;
  `,

  NotFoundImage: styled.img`
    height: 40vh;
  `,

  Message: styled.h1`
    font-size: 30px;
    line-height: 1.5;
    white-space: pre-wrap;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  `,

  Bold: styled.span`
    font-weight: 700;
  `,

  Button: styled.button`
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

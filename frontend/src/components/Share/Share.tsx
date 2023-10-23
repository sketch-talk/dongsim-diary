import { ReactComponent as KakaoTalk } from '../../assets/kakao_icon.svg';
import { ReactComponent as Instagram } from '../../assets/instagram_icon.svg';
import { styled } from 'styled-components';
import { createPortal } from 'react-dom';
import { useContext, useEffect } from 'react';
import { shareKakao } from '../../utils/shareKaKaoLink';
import { DiaryContext } from '../../contexts/DiaryContext';

const Share = () => {
  const { diaryTitle, imageUrl } = useContext(DiaryContext);

  const handleShare = () => {
    alert('아직 준비중인 기능이에요🥲');
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);

    return () => document.body.removeChild(script);
  }, []);

  const handleShareButton = (imageUrl: string, title: string) => {
    const imageName = imageUrl.replace('static/', '');

    shareKakao(imageName, title);
  };

  return createPortal(
    <S.ShareContainer>
      <S.ShareIconContainer>
        <S.ShareIcon>
          <p>내 동심일기 공유하기</p>
          <KakaoTalk
            onClick={() => handleShareButton(`${imageUrl}`, diaryTitle)}
            width="33px"
            height="33px"
          />
          <Instagram onClick={handleShare} width="33px" height="33px" />
        </S.ShareIcon>
        <S.ReWriteButton href="/">다시 쓰기</S.ReWriteButton>
      </S.ShareIconContainer>
    </S.ShareContainer>,
    document.getElementById('share-root') as HTMLDivElement
  );
};

export default Share;

const S = {
  ShareContainer: styled.div`
    max-width: 600px;
    height: 100%;
    margin: 0 auto;
  `,

  ShareIconContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 24px;

    margin: 40px 10px;
  `,

  ShareIcon: styled.div`
    display: flex;
    align-items: center;
    gap: 15px;

    cursor: pointer;
  `,

  SaveButton: styled.button`
    width: 150px;
    height: 30px;

    border-radius: 8px;

    background-color: #333333;
    color: #ffffff;
  `,

  ReWriteButton: styled.a`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 150px;
    height: 30px;

    border-radius: 8px;
    border: 1px solid #333333;

    background-color: #ffffff;
    color: #333333;
  `,
};

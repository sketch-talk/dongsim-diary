import { ReactComponent as Facebook } from '../../assets/facebook-icon.svg';
import { ReactComponent as KakaoTalk } from '../../assets/kakao-icon.svg';
import { ReactComponent as Instagram } from '../../assets/insta-icon.svg';
import { styled } from 'styled-components';
import { createPortal } from 'react-dom';

interface Props {
  handleCapture: () => void;
  handleShare: () => void;
}

const Share = ({ handleCapture, handleShare }: Props) => {
  return createPortal(
    <S.ShareContainer>
      <S.ShareIconContainer>
        <S.SaveButton onClick={handleCapture}>이미지로 저장하기</S.SaveButton>
        <S.ShareIcon>
          <p>내 동심일기 공유하기</p>
          <Instagram onClick={handleShare} width="33px" height="33px" />
          <Facebook onClick={handleShare} width="31px" height="31px" />
          <KakaoTalk onClick={handleShare} width="30px" height="30px" />
        </S.ShareIcon>
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
    flex-direction: column;
    align-items: center;
    gap: 15px;

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
};

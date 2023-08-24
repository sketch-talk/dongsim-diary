import { ReactComponent as Facebook } from '../../assets/facebook-icon.svg';
import { ReactComponent as KakaoTalk } from '../../assets/kakao-icon.svg';
import { ReactComponent as Instagram } from '../../assets/insta-icon.svg';
import { styled } from 'styled-components';

interface Props {
  handleCapture: () => void;
}

const Share = ({ handleCapture }: Props) => {
  return (
    <S.ShareIconContainer>
      <S.SaveButton onClick={handleCapture}>이미지로 저장하기</S.SaveButton>
      <S.ShareIcon>
        <p>내 동심일기 공유하기</p>
        <Instagram width="33px" height="33px" />
        <Facebook width="31px" height="31px" />
        <KakaoTalk width="30px" height="30px" />
      </S.ShareIcon>
    </S.ShareIconContainer>
  );
};

export default Share;

const S = {
  ShareIconContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 15px;

    margin: 40px 0;
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

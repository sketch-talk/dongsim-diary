import { ReactComponent as KakaoTalk } from '../../assets/kakao_icon.svg';
import { ReactComponent as Link } from '../../assets/link_icon.svg';
import { styled } from 'styled-components';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { shareKakao } from '../../utils/shareKaKaoLink';
import { useLocation } from 'react-router-dom';
import { BASE_URL } from '../../constants';
import KakaoAdFit from '../../KakaoAdfit';

interface Props {
  img_name: string;
  title: string;
}

const Share = ({ img_name, title }: Props) => {
  const location = useLocation();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      return undefined;
    };
  }, []);

  const handleShareButton = (imageUrl: string, title: string) => {
    const imageName = imageUrl.replace('static/', '');
    const parsedImageName = imageName.replace('.jpg', '');

    shareKakao(parsedImageName, title);
  };

  const handleCopyClipBoard = async (text: string) => {
    if (navigator.clipboard !== undefined) {
      navigator.clipboard.writeText(text).then(() => {
        alert('클립보드에 링크가 복사되었습니다.');
      });
    } else {
      // execCommand 사용
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      textArea.setSelectionRange(0, 99999);
      try {
        document.execCommand('copy');
      } catch (err) {
        console.error('복사 실패', err);
      }
      textArea.setSelectionRange(0, 0);
      document.body.removeChild(textArea);
      alert('클립보드에 링크가 복사되었습니다.');
    }
  };
  console.log(img_name);
  return createPortal(
    <>
      <S.ShareContainer>
        <S.ShareIconContainer>
          <S.ShareIcon>
            <p>내 동심일기 공유하기</p>
            <KakaoTalk
              onClick={() => handleShareButton(`${img_name}`, title)}
              width="33px"
              height="33px"
            />
            <Link
              onClick={() =>
                handleCopyClipBoard(`${BASE_URL}${location.pathname}`)
              }
              width="33px"
              height="33px"
            />
          </S.ShareIcon>
          <S.ReWriteButton href="/">다시 쓰기</S.ReWriteButton>
        </S.ShareIconContainer>
        <S.ProfileContainer>
          <p>©2023</p>
          <S.Profile href="https://github.com/gyeongza" target="_blank">
            gyeongza |
          </S.Profile>
          <S.Profile href="https://github.com/ss3un9" target="_blank">
            ss3un9
          </S.Profile>
        </S.ProfileContainer>
        <KakaoAdFit
          unit="DAN-leXk8TAFiz8032BR"
          disabled={false}
          width="320px"
          height="50px"
        />
      </S.ShareContainer>
    </>,
    document.getElementById('share-root') as HTMLDivElement
  );
};

export default Share;

const S = {
  ShareContainer: styled.div`
    max-width: 600px;
    height: 100%;
    margin: 0 auto;
    padding: 0px 20px 20px 20px;
  `,

  ShareIconContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 24px;

    margin: 10px 10px 30px 10px;
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

  ProfileContainer: styled.div`
    display: flex;
    gap: 5px;
    justify-content: center;
    margin: 40px 0 20px 0;
    font-family: var(--font-pretendard) !important;
    font-size: 12px;
  `,

  Profile: styled.a`
    cursor: pointer;
  `,
};

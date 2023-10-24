import { BASE_URL } from '../constants';

export const shareKakao = (imageName: string, title: string) => {
  // url이 id값에 따라 변경되기 때문에 route를 인자값으로 받아줌
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(import.meta.env.VITE_KAKAO_API_KEY); // 카카오에서 제공받은 javascript key를 넣어줌 -> .env파일에서 호출시킴
    }
    kakao.Link.sendDefault({
      objectType: 'feed', // 카카오 링크 공유 여러 type들 중 feed라는 타입 -> 자세한 건 카카오에서 확인
      content: {
        title: title, // 인자값으로 받은 title
        description: '오늘 일기를 그림으로 공유해보세요!', // 인자값으로 받은 title
        imageUrl: `${BASE_URL}/static/${imageName}`,
        link: {
          mobileWebUrl: `${BASE_URL}/result/${imageName}`, // 인자값으로 받은 route(uri 형태)
          webUrl: `${BASE_URL}/result/${imageName}`,
        },
      },
      buttons: [
        {
          title: '일기 확인하기',
          link: {
            mobileWebUrl: `${BASE_URL}/result/${imageName}`,
            webUrl: `${BASE_URL}/result/${imageName}`,
          },
        },
      ],
    });
  }
};

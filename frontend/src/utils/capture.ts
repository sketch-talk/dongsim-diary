import * as htmlToImage from 'html-to-image';

export const capture = async (ref: React.RefObject<HTMLDivElement>) => {
  if (ref.current) {
    htmlToImage
      .toPng(ref.current, { backgroundColor: '#ffffff' })
      .then((dataUrl) => {
        const link = document.createElement('a');

        link.href = dataUrl;
        link.download = '캡쳐된이미지.png';
        link.click();
      })
      .catch((error) => {
        console.error('화면 캡쳐 중 오류가 발생했습니다:', error);
      });
  }
};

// import * as htmlToImage from 'html-to-image';

// export const capture = async (ref: React.RefObject<HTMLDivElement>) => {
//   if (ref.current) {
//     await htmlToImage
//       .toPng(ref.current, { backgroundColor: '#ffffff' })
//       .then((dataUrl) => {
//         const link = document.createElement('a');
//         link.download = '동심일기.png';
//         link.href = dataUrl;
//         link.click();
//       })
//       .catch((error) => {
//         console.error('화면 캡쳐 중 오류가 발생했습니다:', error);
//       });
//   }
// };

import html2canvas from 'html2canvas';

export const capture = async (ref: React.RefObject<HTMLDivElement>) => {
  if (ref.current) {
    try {
      const canvas = await html2canvas(ref.current, {
        logging: true,
        allowTaint: true,
        useCORS: true,
        backgroundColor: '#ffffff',
      });
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = '동심일기.png';
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('화면 캡쳐 중 오류가 발생했습니다:', error);
    }
  }
};

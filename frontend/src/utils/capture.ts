import axios from 'axios';
import * as htmlToImage from 'html-to-image';
import { BASE_URL } from '../constants';

export const capture = async (ref: React.RefObject<HTMLDivElement>) => {
  if (ref.current) {
    htmlToImage
      .toPng(ref.current, { backgroundColor: '#ffffff' })
      .then((dataUrl) => {
        const blob = dataURItoBlob(dataUrl);

        // FormData 생성
        const formData = new FormData();
        formData.append('image', blob, '캡쳐된이미지.png');

        axios
          .post(`${BASE_URL}/posts/save`, formData, {
            headers: {
              'Content-Type':
                'multipart/form-data; boundary=<calculated when request is sent>',
            },
          })
          .then((res) => {
            console.log(res);
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => {
        console.error('화면 캡쳐 중 오류가 발생했습니다:', error);
      });
  }
};

const dataURItoBlob = (dataURI: string) => {
  const byteString = atob(dataURI.split(',')[1]);
  const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const uint8Array = new Uint8Array(arrayBuffer);

  for (let i = 0; i < byteString.length; i++) {
    uint8Array[i] = byteString.charCodeAt(i);
  }

  return new Blob([uint8Array], { type: mimeString });
};

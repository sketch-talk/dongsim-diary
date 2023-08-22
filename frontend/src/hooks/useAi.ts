import { Configuration, OpenAIApi } from 'openai';
import { useState } from 'react';

export const useAi = () => {
  const [data, setData] = useState('');

  class CustomFormData extends FormData {
    getHeaders() {
      return {};
    }
  }

  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_API_KEY,
    formDataCtor: CustomFormData,
  });

  const openai = new OpenAIApi(configuration);

  const createImage = async (value: string) => {
    const response = await openai.createImage({
      prompt: value,
      n: 1,
      size: '256x256',
    });

    if (
      response.data &&
      response.data.data &&
      response.data.data[0] &&
      response.data.data[0].url
    ) {
      setData(response.data.data[0].url);
    }
  };

  return { data, createImage };
};

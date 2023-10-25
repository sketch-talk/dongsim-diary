import { createContext, useState } from 'react';
import { Diary } from '../types/post';

interface Props {
  children: React.ReactNode;
}

interface DiaryContextType extends Diary {
  setDiaryContent: React.Dispatch<React.SetStateAction<Diary>>;
}

const defaultContextValue: DiaryContextType = {
  diaryTitle: '',
  weather: '',
  diaryContents: '',
  diaryCharacters: [],
  imageUrl: '',
  setDiaryContent: () => {},
};

export const DiaryContext =
  createContext<DiaryContextType>(defaultContextValue);

const DiaryProvider: React.FC<Props> = ({ children }) => {
  const [diaryContent, setDiaryContent] = useState<Diary>({
    diaryTitle: '',
    weather: '',
    diaryContents: '',
    diaryCharacters: [],
    imageUrl: '',
  });

  return (
    <DiaryContext.Provider value={{ ...diaryContent, setDiaryContent }}>
      {children}
    </DiaryContext.Provider>
  );
};

export default DiaryProvider;

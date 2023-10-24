import { createContext, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

interface DiaryState {
  diaryTitle: string;
  weather: string;
  diaryContents: string;
  diaryCharacters: string[];
  imageUrl: string;
}

interface DiaryContextType extends DiaryState {
  setDiaryContent: React.Dispatch<React.SetStateAction<DiaryState>>;
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
  const [diaryContent, setDiaryContent] = useState<DiaryState>({
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

export interface Diary {
  diaryTitle: string;
  weather: string;
  diaryContents: string;
  diaryCharacters?: string[];
  imageUrl: string;
}

export interface GetDiaryResponse {
  date: string;
  title: string;
  weather: string;
  contents: string;
  img_name: string;
}

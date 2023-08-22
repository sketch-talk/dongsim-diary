import { ChangeEvent, FormEvent } from 'react';
import { styled } from 'styled-components';

interface Props {
  diaryTitle: string;
  diaryContents: string;
  handleChangeTitleInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleResizeHeight: (e: FormEvent<HTMLTextAreaElement>) => void;
  handleSubmitDiary: (e: FormEvent<HTMLButtonElement>) => void;
}

const DiaryContents = ({
  diaryTitle,
  diaryContents,
  handleChangeTitleInput,
  handleResizeHeight,
  handleSubmitDiary,
}: Props) => {
  return (
    <>
      <S.diaryTitleContainer>
        <S.diaryTitle>제목</S.diaryTitle>
        <S.diaryTitleInput
          value={diaryTitle}
          onChange={handleChangeTitleInput}
          placeholder="일기 제목을 입력해주세요."
        />
      </S.diaryTitleContainer>
      <S.WritingContainer>
        <S.WritingArea
          value={diaryContents}
          onChange={handleResizeHeight}
          rows={1}
          placeholder="일기를 작성해주세요."
        />
      </S.WritingContainer>
      {/* <S.SubmitButton onClick={handleSubmitButton}>
  오늘의 그림일기 완성하기
</S.SubmitButton> */}
      <S.SubmitButton onClick={handleSubmitDiary}>
        일기 형식으로 저장
      </S.SubmitButton>
    </>
  );
};

export default DiaryContents;

const S = {
  diaryTitleContainer: styled.div`
    display: flex;
    align-items: center;
    height: 60px;

    font-size: 24px;

    border: 1px solid var(--base-color);
    border-top: none;
  `,

  diaryTitle: styled.p`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 20%;
    padding-left: 20px;

    &::after {
      content: '';
      height: 60px;
      border-right: 1px solid var(--base-color);
      margin-left: auto;
      width: 0;
    }
  `,

  diaryTitleInput: styled.input`
    width: 70%;
    padding-left: 20px;

    &:focus {
      outline: none;
    }
  `,

  WritingContainer: styled.div`
    display: flex;
    justify-content: center;
  `,

  WritingArea: styled.textarea`
    width: 100%;
    min-height: 200px;
    padding: 20px;

    line-height: 1.5em;

    font-size: 24px;

    border: 1px solid var(--base-color);
    border-top: none;
  `,

  SubmitButton: styled.button`
    display: block;

    width: 80%;
    height: 50px;

    margin: 20px auto;

    font-size: 20px;
    color: var(--white-color);

    border-radius: 8px;
    background-color: var(--base-color);
  `,
};

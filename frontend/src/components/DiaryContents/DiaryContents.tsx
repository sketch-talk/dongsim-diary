import { ChangeEvent, FormEvent } from 'react';
import { styled } from 'styled-components';

interface Props {
  diaryTitle: string;
  diaryContents: string;
  handleChangeTitleInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleResizeHeight: (e: FormEvent<HTMLTextAreaElement>) => void;
  handleSubmitDiary: (e: FormEvent<HTMLButtonElement>) => void;
  disabled: boolean;
}

const DiaryContents = ({
  diaryTitle,
  diaryContents,
  handleChangeTitleInput,
  handleResizeHeight,
  handleSubmitDiary,
  disabled,
}: Props) => {
  return (
    <>
      <S.diaryTitleContainer>
        <S.diaryTitle>제목</S.diaryTitle>
        <S.TitleInputContainer>
          <S.InputContainer>
            <S.diaryTitleInput
              value={diaryTitle}
              onChange={handleChangeTitleInput}
              placeholder="일기 제목을 입력해주세요."
              autoFocus
            />
            <S.TitleLength>{diaryTitle.length}/15</S.TitleLength>
          </S.InputContainer>
          {diaryTitle.length >= 15 && (
            <S.Caption>제목은 15자 이하로 입력해주세요.</S.Caption>
          )}
        </S.TitleInputContainer>
      </S.diaryTitleContainer>

      <S.WritingContainer>
        <S.WritingArea
          value={diaryContents}
          onChange={handleResizeHeight}
          rows={1}
          placeholder="일기를 작성해주세요."
        />
        <S.CaptionContainer>
          {diaryContents.length >= 100 && (
            <S.Caption>일기 내용은 100자 이내로 작성해주세요.</S.Caption>
          )}
          <S.TitleLength>{diaryContents.length}/100</S.TitleLength>
        </S.CaptionContainer>
      </S.WritingContainer>
      {disabled ? null : (
        <S.SubmitButton disabled={disabled} onClick={handleSubmitDiary}>
          동심일기 완성하기
        </S.SubmitButton>
      )}
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

  TitleInputContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;

    padding: 0 20px;
  `,

  InputContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  diaryTitleInput: styled.input`
    width: 80%;

    &:focus {
      outline: none;
    }

    @media (max-width: 768px) {
      font-size: 18px;
    }
  `,
  TitleLength: styled.p`
    font-size: 10px;
    color: var(--gray-400);
  `,

  Caption: styled.span`
    font-size: 10px;
    color: red;
  `,

  WritingContainer: styled.div`
    display: flex;
    flex-direction: column;
  `,

  CaptionContainer: styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;

    width: 100%;

    margin: 5px 10px 0 0;
  `,

  WritingArea: styled.textarea`
    min-height: 200px;
    padding: 20px;

    line-height: 1.5em;

    font-size: 24px;

    border: 1px solid var(--base-color);
    border-top: none;

    @media (max-width: 768px) {
      font-size: 18px;
    }
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

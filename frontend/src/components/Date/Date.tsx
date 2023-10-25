import styled from 'styled-components';
import React from 'react';
import { parsedDate } from '../../utils/date';
interface Props {
  responseDate?: string;
}

const Date = React.memo(({ responseDate }: Props) => {
  const date = parsedDate(responseDate);

  return (
    <S.DateWrapper>
      <S.Date>
        <S.HighlightedText>{date.getYear}</S.HighlightedText>
        <span>년</span>
        <S.HighlightedText>{date.getMonth}</S.HighlightedText>
        <span>월</span>
        <S.HighlightedText>{date.getDate}</S.HighlightedText>
        <span>일</span>
        <S.HighlightedText>{date.day[date.getDay]}</S.HighlightedText>
        <span>요일</span>
      </S.Date>
    </S.DateWrapper>
  );
});

export default Date;

const S = {
  DateWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;

    border: 1px solid var(--base-color);
  `,

  Date: styled.p`
    display: flex;
    align-items: center;
    gap: 10px;

    height: 45px;
    padding-left: 15px;
  `,

  HighlightedText: styled.span`
    font-weight: 900;
    font-family: var(--font-manse) !important;
    font-size: 24px;
  `,
};

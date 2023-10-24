import styled from 'styled-components';
import { day, getDate, getDay, getMonth, getYear } from '../../utils/date';
import React from 'react';

const Date = React.memo(() => {
  return (
    <S.DateWrapper>
      <S.Date>
        <S.HighlightedText>{getYear}</S.HighlightedText>년
        <S.HighlightedText>{getMonth}</S.HighlightedText>월
        <S.HighlightedText>{getDate}</S.HighlightedText>일
        <S.HighlightedText>{day[getDay]}</S.HighlightedText>요일
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

import React, { ForwardRefRenderFunction, forwardRef } from 'react';
import Header from '../Common/Header';
import { styled } from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const Layout: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { children },
  ref
) => {
  return (
    <S.LayoutContainer>
      <Header />
      <S.MainWrapper ref={ref}>{children}</S.MainWrapper>
    </S.LayoutContainer>
  );
};

export default forwardRef(Layout);

const S = {
  LayoutContainer: styled.div`
    max-width: 600px;
    height: 100%;
    margin: 0 auto;
  `,

  MainWrapper: styled.div``,
};

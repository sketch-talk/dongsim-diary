import React from 'react';
import Header from '../Common/Header';
import { styled } from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <S.LayoutContainer>
      <Header />
      <S.MainWrapper>{children}</S.MainWrapper>
    </S.LayoutContainer>
  );
};

export default Layout;

const S = {
  LayoutContainer: styled.div`
    max-width: 600px;
    height: 100%;

    margin: 0 auto;
    padding: 0px 20px 20px 20px;
  `,

  MainWrapper: styled.div``,
};

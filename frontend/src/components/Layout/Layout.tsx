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

    background-color: #323232;
  `,

  MainWrapper: styled.div`
    /* height: calc(100% - 120px); */
    padding: 20px;
    overflow-y: auto;
  `,
};

import React, { ForwardRefRenderFunction, forwardRef, useEffect } from 'react';
import Header from '../Common/Header';
import { styled } from 'styled-components';

interface Props {
  children: React.ReactNode;
  handleCaptureReady: () => void;
  captureReady: boolean;
}

const Layout: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { children, handleCaptureReady, captureReady },
  ref
) => {
  useEffect(() => {
    handleCaptureReady(); // Reset the captureReady state after capturing
  }, [captureReady]);

  return (
    <S.LayoutContainer ref={ref}>
      <Header />
      <S.MainWrapper>{children}</S.MainWrapper>
    </S.LayoutContainer>
  );
};

export default forwardRef(Layout);

const S = {
  LayoutContainer: styled.div`
    max-width: 600px;
    height: 100%;

    margin: 0 auto;
    padding: 0px 20px 20px 20px;
  `,

  MainWrapper: styled.div``,
};

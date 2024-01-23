import React from 'react';
import Spinner from '../../assets/loading.gif';
import { styled } from 'styled-components';

interface Props {
  children: React.ReactNode;
  isError?: boolean;
}

const Loading = ({ children, isError }: Props) => {
  if (isError) {
    throw Error;
  }

  return (
    <LoadingContainer>
      <img src={Spinner} alt="로딩중" />
      {children}
    </LoadingContainer>
  );
};

export default Loading;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  & > img {
    padding: 0 !important;
    width: 70px;
    height: 70px;
  }
`;

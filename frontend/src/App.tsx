import styled from 'styled-components';

const App = () => {
  return (
    <>
      <S.Title>hello world!!!!</S.Title>
    </>
  );
};

export default App;

const S = {
  Title: styled.h1`
    font-size: 28px;
  `,
};

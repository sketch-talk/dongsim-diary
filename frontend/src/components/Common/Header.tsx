import { styled } from 'styled-components';

const Header = () => {
  return <S.HeaderContainer>Header</S.HeaderContainer>;
};

export default Header;

const S = {
  HeaderContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 60px;

    background-color: #c6c6c6;
  `,
};

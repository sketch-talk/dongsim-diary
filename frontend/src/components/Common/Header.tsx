import { styled } from 'styled-components';

const Header = () => {
  return <S.HeaderContainer>Sketch Talk</S.HeaderContainer>;
};

export default Header;

const S = {
  HeaderContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 60px;

    font-size: 20px;

    border-bottom: 1px solid var(--base-color);
  `,
};

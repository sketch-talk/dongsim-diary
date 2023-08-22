import { styled } from 'styled-components';

const Header = () => {
  return <S.HeaderContainer>동심 일기</S.HeaderContainer>;
};

export default Header;

const S = {
  HeaderContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 80px;

    font-size: 38px;
    font-family: YoonChildfundkoreaManSeh;
  `,
};

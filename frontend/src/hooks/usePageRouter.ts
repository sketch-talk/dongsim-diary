import { useNavigate } from 'react-router-dom';

export const usePageRouter = () => {
  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate('/');
  };

  const goToResultPage = (postId: number) => {
    navigate(`/result/${postId}`);
  };

  return { goToMainPage, goToResultPage };
};

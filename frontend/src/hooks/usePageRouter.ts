import { useNavigate } from 'react-router-dom';

export const usePageRouter = () => {
  const navigate = useNavigate();

  const goToResultPage = (postId: number) => {
    navigate(`/result/${postId}`);
  };

  return { goToResultPage };
};

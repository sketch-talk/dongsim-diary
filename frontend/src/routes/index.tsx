import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import ResultPage from '../pages/ResultPage';
import App from '../App';

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: '/result/:postId',
        element: <ResultPage />,
      },
    ],
  },
]);

import { Outlet } from 'react-router-dom';
import ImageUrlProvider from './contexts/DiaryContext.tsx';
import RouteChangeTracker from './RouteChangeTracker.ts';

const App = () => {
  RouteChangeTracker();

  return (
    <ImageUrlProvider>
      <Outlet />
    </ImageUrlProvider>
  );
};

export default App;

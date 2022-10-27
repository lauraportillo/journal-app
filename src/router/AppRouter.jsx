import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { CheckingAuthLoader } from '../ui';

export const AppRouter = () => {
  const { status } = useSelector((state) => state.auth);

  if (status === 'checking') {
    return <CheckingAuthLoader />;
  }

  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />

      <Route path="/*" element={<JournalRoutes />} />
    </Routes>
  );
};

import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { FirebaseAuth } from '../firebase/config';

import { login, logout } from '../store/auth';
import { AuthRoutes } from '../auth/routes/AuthRoutes';

import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { CheckingAuthLoader } from '../ui';

export const AppRouter = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    // Firebase tiene esta fución que está pendiente de los cambios de usuario
    onAuthStateChanged(FirebaseAuth, async (user) => {
      // Si no hay ningún usuario, mando llamar al logout:
      if (!user) return dispatch(logout());

      // Si tengo un usuario:
      const { uid, email, displayName, photoURL } = user;
      dispatch(login({ uid, email, displayName, photoURL }));
    });
  }, []);

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

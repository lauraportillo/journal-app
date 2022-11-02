import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';

import { FirebaseAuth } from '../firebase/config';

import { login, logout } from '../store/auth';

export const useCheckAuth = () => {

    // EFECTO PENDIENTE DE LA AUTENTICACION
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

    return status;
}

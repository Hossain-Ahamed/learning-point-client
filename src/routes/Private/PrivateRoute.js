import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import LoadingPage from '../../pages/Shared/LoadingPage/LoadingPage';


const PrivateRoute = ({children}) => {

    const location = useLocation();

    const {user,loading} = useContext(AuthContext);

    if(loading){
        return <LoadingPage></LoadingPage>
    }

    if(!user){
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;
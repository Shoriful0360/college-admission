
import useAuth from '../hook/useAuth';
import Spinner from '../shared/Spinner';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
const location=useLocation()
    const{user,loading}=useAuth()
    if(loading)return<Spinner/>
    if(user) return children
    return (
        <div>
           <Navigate to={'/login'} state={{from:location}} replace="true"></Navigate>
        </div>
    );
};

export default PrivateRoute;
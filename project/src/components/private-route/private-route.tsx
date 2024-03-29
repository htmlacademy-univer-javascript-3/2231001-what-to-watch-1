import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../common/enums';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-reducer/user-selectors';

type Props = {
  children: JSX.Element;
};

const PrivateRoute: FC<Props> = (props) => {
  const { children } = props;
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.SignIn}/>
  );
};

export default PrivateRoute;

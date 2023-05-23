import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import DashBoard from "./pages/DashBoard";

type Props = { auth?: boolean };

const PrivateRouters = ({ children }: any) => {
  const { token } = useContext(AuthContext);
  console.log(token);
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const Routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/meu-time",
    element: (
      <PrivateRouters>
        <DashBoard />
      </PrivateRouters>
    ),
  },
]);
export default Routes;

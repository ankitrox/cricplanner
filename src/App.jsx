import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AppProvider } from "@toolpad/core/react-router-dom";
import { Outlet, useNavigate } from "react-router-dom";
import { useSession } from './AuthContext.jsx';
import { useAuthentication } from "./hooks/useAuthentication.js";
import { auth } from "./services/index.js";

const NAVIGATION = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "orders",
    title: "Orders",
    icon: <ShoppingCartIcon />,
  },
];

const BRANDING = {
  title: "Cricplanner",
};

export default function App() {
  const { user, setUser } = useSession();
  const { signIn } = useAuthentication();
  const navigate = useNavigate();

  const signOut = async () => {
    await auth.signOut();
    setUser(null);
    navigate('/sign-in');
  }

  return (
      <AppProvider
        navigation={NAVIGATION}
        branding={BRANDING}
        session={ {
          user
        } }
        authentication={{ signIn, signOut }}
      >
        <Outlet />
      </AppProvider>
  );
}

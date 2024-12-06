import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { googleProvider, auth } from "../services/index.js";
import { useSession } from "../AuthContext.jsx";

export function useAuthentication() {
  const navigate = useNavigate();

  const signIn = useCallback(async () => {
    try {
      const result = await signInWithPopup( auth, googleProvider );
      navigate("/");
      return {};
    } catch (error) {
      console.error(error);
    }
  }, [navigate]);

  const signOut = useCallback(() => {
    const navigate = useNavigate();
    const { setUser } = useSession();

    setUser(null);
    navigate("/sign-in");
  }, [navigate]);
  return {
    signIn,
    signOut,
  };
}

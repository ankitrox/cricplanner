import { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithRedirect, getRedirectResult } from "firebase/auth";
import { googleProvider, auth } from "../services/index.js";
import { useSession } from "../AuthContext.jsx";

export function useAuthentication() {
  const navigate = useNavigate();
  const { setUser } = useSession();

  useEffect(() => {
    const fetchRedirectResult = async () => {
      try {
        const result = await getRedirectResult( auth );
        console.log("Redirect result:", result);
        if (result) {
          const { user } = result;
          console.log("User authenticated:", user);

          // Set the user in your context
          setUser(user);

          // Navigate to the homepage or another page
          navigate("/");
        }
      } catch (error) {
        console.error("Error retrieving redirect result:", error);
      }
    };

    fetchRedirectResult();
  }, [navigate, setUser]);

  const signIn = useCallback(async () => {
    try {
      await signInWithRedirect( auth, googleProvider );
      return;
    } catch (error) {
      return {
        error: 'Error logging in, please try again!',
        type: 'googleSignIn',
      };
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

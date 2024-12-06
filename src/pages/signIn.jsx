"use client";
import React, { useEffect } from "react";
import { SignInPage } from "@toolpad/core/SignInPage";
import { useAuthentication } from "../hooks/useAuthentication";
import { useSession } from "../AuthContext";
import { useNavigate } from "react-router-dom";

const providers = [
  {
    id: "credentials",
    name: "Credentials",
  },
  {
    id: "google",
    name: "Google",
  },
];

export default function SignIn() {
  const { signIn } = useAuthentication();
  const { user } = useSession();
  const navigate = useNavigate();

  useEffect( () => {
    if ( user ) {
      navigate('/');
    }
  }, [user, navigate] );

  return (
    <SignInPage
      providers={providers}
      signIn={async (provider) => {
        if (provider.id === "google") {
          await signIn();
        }
      }}
    />
  );
}

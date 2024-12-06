import React, { useEffect } from "react";
import { Outlet, Navigate, useLocation, useNavigate } from "react-router-dom";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import { useSession } from "../AuthContext";

export default function Layout() {
  const location = useLocation();
  const { user } = useSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/sign-in");
    }
  });

  return (
    <DashboardLayout>
      <PageContainer>
        <Outlet />
      </PageContainer>
    </DashboardLayout>
  );
}

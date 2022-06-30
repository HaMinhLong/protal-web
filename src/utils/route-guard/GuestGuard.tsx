// THIRD-PARTY
import { useNavigate } from "react-router-dom";

// PROJECT IMPORTS
import useAuth from "hooks/useAuth";
import { DASHBOARD_PATH } from "config";
import { GuardProps } from "types";
import { useEffect } from "react";

const GuestGuard = ({ children }: GuardProps) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      window.location.href = DASHBOARD_PATH;
    }
  }, [isLoggedIn, navigate]);

  return children;
};

export default GuestGuard;

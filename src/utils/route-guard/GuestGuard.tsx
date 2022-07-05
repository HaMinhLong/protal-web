// THIRD-PARTY
import { useNavigate } from "react-router-dom";

// PROJECT IMPORTS
import useAuth from "hooks/useAuth";
import { DASHBOARD_PATH, ARTICLE_PATH, ADMIN_TYPE } from "config";
import { GuardProps } from "types";
import { useEffect } from "react";

const GuestGuard = ({ children }: GuardProps) => {
  const { isLoggedIn, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate(user?.type === ADMIN_TYPE ? DASHBOARD_PATH : ARTICLE_PATH, {
        replace: true,
      });
    }
  }, [isLoggedIn, navigate]);

  return children;
};

export default GuestGuard;

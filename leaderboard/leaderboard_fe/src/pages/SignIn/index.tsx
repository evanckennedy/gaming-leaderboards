import PageTitle from "@/components/ui/pageTitle/PageTitle";
import SignInForm from "@/features/authentication/components/SignInForm";
import SignUpForm from "@/features/authentication/components/SignUpForm";
import ResetPasswordForm from "@/features/authentication/components/ResetPasswordForm";
import ToggleAuthenticationForm from "@/features/authentication/components/ToggleAuthenticationForm";
import useAuthenticationState from "./hooks/useAuthenticationState";
import { useEffect } from "react";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SignIn() {
  const { isSignUp, toggleForm } = useAuthenticationState();
  const { isLoggedIn } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  const [showResetPassword, setShowResetPassword] = useState(false);

  const toggleResetPassword = () => {
    setShowResetPassword(!showResetPassword);
  };

  let title = "Sign In";
  if (isSignUp) {
    title = "Sign Up";
  } else if (showResetPassword) {
    title = "Reset Password";
  }

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <PageTitle title={title} />
      {isSignUp ?
        <SignUpForm />
      : showResetPassword ?
        <ResetPasswordForm onBack={toggleResetPassword} />
      : <SignInForm onToggleResetPassword={toggleResetPassword} />}
      {!showResetPassword && (
        <ToggleAuthenticationForm isSignUp={isSignUp} toggleForm={toggleForm} />
      )}
    </>
  );
}

export default SignIn;

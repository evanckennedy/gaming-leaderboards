import PageTitle from "@/components/ui/pageTitle/PageTitle";
import SignInForm from "@/features/authentication/components/SignInForm";
import SignUpForm from "@/features/authentication/components/SignUpForm";
import ToggleAuthenticationForm from "@/features/authentication/components/ToggleAuthenticationForm";
import useAuthenticationState from "./hooks/useAuthenticationState";
import { useEffect } from "react";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const { isSignUp, toggleForm } = useAuthenticationState();
  const { isLoggedIn } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      {isSignUp ?
        <PageTitle title="Sign Up" />
      : <PageTitle title="Sign In" />}
      {isSignUp ?
        <SignUpForm />
      : <SignInForm />}
      <ToggleAuthenticationForm isSignUp={isSignUp} toggleForm={toggleForm} />
    </>
  );
}

export default SignIn;

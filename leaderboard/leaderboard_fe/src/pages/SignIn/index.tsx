import PageTitle from "@/components/ui/pageTitle/PageTitle";
import SignInForm from "@/features/authentication/components/SignInForm";
import SignUpForm from "@/features/authentication/components/SignUpForm";
import ToggleAuthenticationForm from "@/features/authentication/components/ToggleAuthenticationForm";
import useAuthenticationState from "./hooks/useAuthenticationState";

function SignIn() {
  const { isSignUp, toggleForm } = useAuthenticationState();

  return (
    <>
      <PageTitle title={isSignUp ? "Sign Up" : "Sign In"} />
      {isSignUp ?
        <SignUpForm />
      : <SignInForm />}
      <ToggleAuthenticationForm isSignUp={isSignUp} toggleForm={toggleForm} />
    </>
  );
}

export default SignIn;

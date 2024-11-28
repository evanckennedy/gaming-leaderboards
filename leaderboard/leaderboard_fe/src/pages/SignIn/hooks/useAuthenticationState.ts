import { useState } from "react";

function useAuthenticationState() {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => setIsSignUp(!isSignUp);

  return { isSignUp, toggleForm };
}

export default useAuthenticationState;

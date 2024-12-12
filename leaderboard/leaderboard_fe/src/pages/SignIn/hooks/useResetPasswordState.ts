import { useState } from "react";

function useResetPasswordState() {
  const [showResetPassword, setShowResetPassword] = useState(false);

  const toggleResetPassword = () => {
    setShowResetPassword(!showResetPassword);
  };

  return { showResetPassword, toggleResetPassword };
}

export default useResetPasswordState;

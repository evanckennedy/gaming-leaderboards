interface ToggleFormButtonProps {
  isSignUp: boolean;
  toggleForm: () => void;
}

function ToggleAuthenticationForm({
  isSignUp,
  toggleForm,
}: ToggleFormButtonProps) {
  return (
    <div className="mt-8 3xl:mt-12 4xl:mt-24 flex justify-center items-center gap-2 3xl:gap-3 4xl:gap-6 text-white-100 text-lg 3xl:text-3xl 4xl:text-6xl">
      <p>{isSignUp ? "Already have an account?" : "Don't have an account?"}</p>
      <button
        onClick={toggleForm}
        className="font-bold hover:text-secondary transition-colors ease-out duration-300"
      >
        {isSignUp ? "Sign In" : "Sign Up"}
      </button>
    </div>
  );
}

export default ToggleAuthenticationForm;

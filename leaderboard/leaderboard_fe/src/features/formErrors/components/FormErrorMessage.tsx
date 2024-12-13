interface FormErrorMessageProps {
  message: string;
}

function FormErrorMessage({ message }: FormErrorMessageProps) {
  return (
    <p className="absolute bottom-[-27px] 3xl:bottom-[-40px] 4xl:bottom-[-81px] left-1/2 transform -translate-x-1/2 3xl:text-2xl 4xl:text-5xl text-error-100 text-center">
      {message}
    </p>
  );
}

export default FormErrorMessage;

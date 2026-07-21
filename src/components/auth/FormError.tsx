import { FieldError } from "react-hook-form";

type FormErrorProps = {
  error?: FieldError;
};

export default function FormError({ error }: FormErrorProps) {
  if (!error) {
    return null;
  }

  return (
    <p role="alert" className="mt-1 text-sm font-medium texte-green-500">
      {" "}
      {error.message}
    </p>
  );
}

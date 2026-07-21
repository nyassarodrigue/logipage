import Background from "./Background";
import LoginForm from "./LoginForm";

export default function LoginCard() {
  return (
    <>
      <Background />

      <div
        className="
          relative
          z-4
          w-full
          max-w-md
          rounded-3xl
          border
          border-green/20
          bg-blue/12
          p-10
          shadow-2xl
          backdrop-blur-4xl
        "
      >
        <LoginForm />
      </div>
    </>
  );
}

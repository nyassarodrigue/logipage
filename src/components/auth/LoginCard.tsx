import Background from "./Background";
import LoginForm from "./LoginForm";

export default function LoginCard() {
  return (
    <>
      <Background />

      <div
        className="
          relative
          z-10
          w-full
          max-w-md
          rounded-3xl
          border
          border-white/20
          bg-white/10
          p-10
          shadow-2xl
          backdrop-blur-2xl
        "
      >
        <LoginForm />
      </div>
    </>
  );
}

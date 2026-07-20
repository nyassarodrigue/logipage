export default function Background() {
  return (
    <>
      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl" />

      <div className="absolute right-20 bottom-20 h-72 w-72 rounded-full bg-purple-500/30 blur-3xl" />

      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-[140px]" />
    </>
  );
}

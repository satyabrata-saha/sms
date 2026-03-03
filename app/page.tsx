export default function HomePage() {
  return (
    <div className="flex flex-col gap-4 h-screen w-full justify-center items-center text-center">
      <h1 className="text-4xl font-bold underline">School Managment System</h1>
      <a
        href="/login"
        className="px-6 py-2 bg-blue-500 text-white text-xl rounded-xl"
      >
        Login
      </a>
    </div>
  );
}

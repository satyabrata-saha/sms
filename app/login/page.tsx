import { LoginForm } from "@/components/login-form";
import { school_logo, school_name } from "@/lib/constatnt";

export default function LoginPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <a href="#" className="flex items-center justify-center gap-2 self-center font-medium mb-4">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            {school_logo || "🔍"}
          </div>
          {school_name}
        </a>
        <LoginForm roleGroup={['student', 'teacher']} thumbnail="https://cdn.pixabay.com/photo/2020/05/23/20/08/books-5211309_1280.jpg" />
      </div>
    </div>
  );
}

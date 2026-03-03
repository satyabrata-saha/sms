"use client";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useState } from "react";

export function LoginForm({
  className,
  roleGroup,
  thumbnail,
  ...props
}: React.ComponentProps<"div"> & { roleGroup: string[], thumbnail: string }) {
  const [selectedRole, setSelectedRole] = useState(roleGroup[0]);
  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });

  const changeUI = (value: string[]) => {
    if (value && value.length > 0) setSelectedRole(value[0]);
    console.log("Selected Role:", value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    setFormData({
      id: e.target.studentid.value,
      password: e.target.password.value,
    });
  };

  // console.log(
  //   "Selected Role:",
  //   selectedRole, "\n",
  //   "Formid:",
  //   formData.id, "\n",
  //   "Password:",
  //   formData.password,
  // );
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className={`grid p-0 ${thumbnail ? "md:grid-cols-2" : "grid-cols-1"}`}>
          <form className="p-6 md:p-8" onSubmit={handleForm}>
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Welcome back</h1>
                <p className="text-muted-foreground text-balance">
                  Login to your Acme Inc account
                </p>
              </div>
               {/* Admin / Student / Teacher */}

          <div className="flex flex-col gap-4 justify-center items-center">
            <ToggleGroup
              type="single"
              value={selectedRole}
              variant="outline"
              onValueChange={(v) => changeUI(v)}
            >
              {roleGroup.map((role) => (
                <ToggleGroupItem key={role} value={role}>
                  {role.charAt(0).toUpperCase() + role.slice(1)}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
              <Field>
                <FieldLabel htmlFor="text">{`${selectedRole.toString().toUpperCase()} ID`}</FieldLabel>
                <Input
                  id="studentid"
                  type="text"
                  placeholder="IV03052026"
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  {/* <a
                    href="#"
                    className="ml-auto text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a> */}
                </div>
                <Input id="password" type="password" placeholder="******" required />
              </Field>
              <Field>
                <Button type="submit">Login</Button>
              </Field>
              {/* <FieldDescription className="text-center">
                Don&apos;t have an account? <a href="#">Sign up</a>
              </FieldDescription> */}
            </FieldGroup>
          </form>
          {thumbnail ? <div className="bg-muted relative hidden md:block">
            <img
              src={thumbnail || "/placeholder.png"}
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div> : null}
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  )
}

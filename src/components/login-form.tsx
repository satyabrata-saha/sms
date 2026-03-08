"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { Card, CardContent } from "./ui/card";

export function LoginForm({
  className,
  roleGroup,
  ...props
}: React.ComponentProps<"div"> & { roleGroup: string[] }) {
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
    // <Card>
    <CardContent>
      <form className={cn("flex flex-col gap-6", className)} {...props}>
        <FieldGroup>
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-2xl font-bold">Welcome back</h1>
          </div>
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
            <Input
              id="password"
              type="password"
              placeholder="******"
              required
            />
          </Field>
          <Field>
            <Button type="submit">Login</Button>
          </Field>
          {/* <FieldDescription className="text-center">
                Don&apos;t have an account? <a href="#">Sign up</a>
              </FieldDescription> */}

          <Field>
            <FieldDescription className="px-6 text-center">
              By clicking continue, you agree to our{" "}
              <a href="#">Terms of Service</a> and{" "}
              <a href="#">Privacy Policy</a>.
            </FieldDescription>
          </Field>
        </FieldGroup>
      </form>
    </CardContent>
    // </Card>
  );
}

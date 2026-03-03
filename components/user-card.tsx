import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BookMarked, LineSquiggle } from "lucide-react";
import Link from "next/link";

interface UserCardProps {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  image?: string;
}

export function UserCard({
  firstName,
  lastName,
  email,
  role,
  image,
}: UserCardProps) {
  return (
    <Card className="flex flex-row justify-center items-center overflow-hidden rounded-xl p-0 bg-linear-to-r from-indigo-500 via-blue-500 to-cyan-500">
      <div className="min-h-full w-full relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
        linear-gradient(to right, #d1d5db24 1px, transparent 1px),
        linear-gradient(to bottom, #d1d5db24 1px, transparent 1px)
      `,
            backgroundSize: "32px 32px",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 99%)",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 99%)",
          }}
        />
        {/* Main content */}
        <div className="flex flex-row justify-center items-center">
          <div className="flex-1 p-6">
            <h2 className="text-xl font-semibold text-gray-50">
              Welcome back, {firstName}! 👋
            </h2>

            <p className="text-gray-200">{email}</p>
            <p className="text-gray-200">
              {new Date().toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </p>

            <div className="mt-4">
              <Badge variant="outline" className="text-white">
                Class - V
              </Badge>
            </div>
            <div className="mt-4">
              <a href="/dashboard/student/profile" className="cursor-pointer">
                <Button variant="secondary">View Profile</Button>
              </a>
            </div>
          </div>
          <LineSquiggle
            className="text-gray-50 opacity-15 absolute"
            size={100}
          />
          <BookMarked className="text-gray-50 opacity-30" size={100} />
        </div>
      </div>
    </Card>
  );
}

"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Building,
  Calendar,
  Edit3,
  Camera,
} from "lucide-react";
import Image from "next/image";

export default function ProfilePage() {
  const studentInfo = {
    firstName: "Satyabrata",
    lastName: "Saha",
    studentId: "STU-2026-8901",
    email: "satyabrata.saha@student.edu",
    phone: "+1 (555) 123-4567",
    dob: "August 15, 2005",
    address: "123 Campus Drive, Apt 4B",
    city: "University Town",
    state: "NY",
    zip: "10027",
    department: "Computer Science",
    enrollmentYear: "2024",
    advisor: "Dr. Alan Turing",
    image: "https://avatars.githubusercontent.com/u/108542741",
  };

  return (
    <div className="w-full p-6 space-y-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between border-b pb-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Student Profile</h1>
          <p className="text-muted-foreground mt-1">
            Manage your personal information and student details.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Photo & Quick Actions */}
        <div className="space-y-6">
          <Card className="shadow-md overflow-hidden border-0">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 h-32 relative"></div>
            <CardContent className="pt-0 relative px-6 pb-6">
              <div className="flex justify-center -mt-16 mb-4">
                <div className="relative group">
                  <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white">
                    <img
                      src={studentInfo.image}
                      alt="Student Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button className="absolute inset-0 bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-full">
                    <Camera size={24} />
                  </button>
                </div>
              </div>

              <div className="text-center space-y-1 mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {studentInfo.firstName} {studentInfo.lastName}
                </h2>
                <p className="text-sm font-medium text-indigo-600">
                  {studentInfo.studentId}
                </p>
                <div className="inline-block mt-2 px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600 font-medium">
                  {studentInfo.department} Major
                </div>
              </div>

              <div className="space-y-3">
                {/* <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white flex gap-2">
                  <Edit3 size={16} /> Edit Profile
                </Button> */}
                <Button
                  variant="outline"
                  className="w-full border-gray-300 text-gray-700 flex gap-2"
                >
                  Change Password
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Detailed Info */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="shadow-sm border-gray-200">
            <CardHeader className="bg-gray-50 border-b pb-4">
              <CardTitle className="text-lg flex items-center gap-2">
                <User className="text-indigo-500" size={20} /> Personal Details
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
                <div>
                  <dt className="text-sm font-medium text-gray-500 mb-1">
                    Full Name
                  </dt>
                  <dd className="text-base font-semibold text-gray-900">
                    {studentInfo.firstName} {studentInfo.lastName}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 mb-1">
                    Date of Birth
                  </dt>
                  <dd className="text-base text-gray-900 flex items-center gap-2">
                    <Calendar size={16} className="text-gray-400" />{" "}
                    {studentInfo.dob}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 mb-1">
                    Email Address
                  </dt>
                  <dd className="text-base text-gray-900 flex items-center gap-2">
                    <Mail size={16} className="text-gray-400" />{" "}
                    {studentInfo.email}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 mb-1">
                    Phone Number
                  </dt>
                  <dd className="text-base text-gray-900 flex items-center gap-2">
                    <Phone size={16} className="text-gray-400" />{" "}
                    {studentInfo.phone}
                  </dd>
                </div>
              </dl>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <dt className="text-sm font-medium text-gray-500 mb-2">
                  Residential Address
                </dt>
                <dd className="text-base text-gray-900 flex items-start gap-2">
                  <MapPin size={18} className="text-gray-400 mt-0.5" />
                  <span>
                    {studentInfo.address},<br />
                    {studentInfo.city}, {studentInfo.state} {studentInfo.zip}
                  </span>
                </dd>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-gray-200">
            <CardHeader className="bg-gray-50 border-b pb-4">
              <CardTitle className="text-lg flex items-center gap-2">
                <Building className="text-indigo-500" size={20} /> Academic
                Information
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
                <div>
                  <dt className="text-sm font-medium text-gray-500 mb-1">
                    Department
                  </dt>
                  <dd className="text-base font-semibold text-gray-900">
                    {studentInfo.department}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 mb-1">
                    Enrollment Year
                  </dt>
                  <dd className="text-base text-gray-900">
                    {studentInfo.enrollmentYear}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 mb-1">
                    Academic Advisor
                  </dt>
                  <dd className="text-base text-gray-900">
                    {studentInfo.advisor}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-gray-500 mb-1">
                    Student Status
                  </dt>
                  <dd className="text-base text-gray-900">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                  </dd>
                </div>
              </dl>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

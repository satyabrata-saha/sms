"use client";

import React from "react";
import {
  Bell,
  MessageSquare,
  Settings,
  Search,
  Book,
  Video,
  FileText,
  Clock,
  CheckCircle,
  Award,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Edit2,
  Trash2,
  Calendar,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const testScoreData = [
  { name: "Apr 10", score: 40 },
  { name: "Apr 11", score: 60 },
  { name: "Apr 12", score: 30 },
  { name: "Apr 13", score: 80 },
  { name: "Apr 14", score: 60 },
  { name: "Apr 15", score: 90 },
  { name: "Apr 16", score: 55 },
];

const assignmentsData = [
  {
    no: "01",
    task: "Read Chapters1-3",
    subject: "English",
    due: "12 May 2024",
    status: "In Progress",
  },
  {
    no: "02",
    task: "Complete Problem Set #5",
    subject: "Maths",
    due: "12 May 2024",
    status: "Not Started",
  },
  {
    no: "03",
    task: "Write Lab Report on Acid-Base Titration",
    subject: "Physics",
    due: "12 May 2024",
    status: "In Progress",
  },
  {
    no: "04",
    task: "Prepare for Oral Presentation",
    subject: "Chemistry",
    due: "12 May 2024",
    status: "In Progress",
  },
  {
    no: "05",
    task: "Create Art Piece for Final Project",
    subject: "English",
    due: "12 May 2024",
    status: "Completed",
  },
];

export default function StudentDashboard() {
  return (
    <div className="flex flex-col gap-4 xl:flex-row w-full text-gray-800">
      {/* Main Content Area */}
      <div className="pl-4 flex-1 w-full min-w-0">
        {/* Top Bar for Main Area */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-4 lg:hidden">
            {/* Mobile Header Icons */}
            <button className="p-2 bg-white rounded-full shadow-sm text-gray-600">
              <Bell size={20} />
            </button>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
              <img
                src="https://i.pinimg.com/736x/2e/c4/63/2ec4630175fbaac00982616859be0faa.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-3xl p-8 mb-6 relative overflow-hidden flex flex-col md:flex-row items-center justify-between shadow-xs border border-gray-50">
          <div className="max-w-md relative z-10">
            <h1 className="text-3xl font-bold mb-3 text-gray-900">
              Hey Ashwin.
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Welcome back! We're here to support you on your learning journey.
              Dive into your classes and keep progressing towards your goals
            </p>
          </div>
          <div className="mt-6 md:mt-0 w-48 h-48 md:w-64 md:h-64 relative z-10 rounded-full">
            <img
              src="https://i.pinimg.com/736x/2e/c4/63/2ec4630175fbaac00982616859be0faa.jpg"
              alt="Student Illustration"
              className="w-full h-full object-contain rounded-full borxder border-white border-4"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-transparent to-indigo-50/30"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-50 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
          <div className="absolute top-20 right-40 w-32 h-32 bg-yellow-50 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-3xl p-5 shadow-xs border border-gray-50 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-blue-50 text-blue-500 rounded-xl">
                {/* Icon */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    fill="#EBF5FF"
                  />
                  <path
                    d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                    fill="#3B82F6"
                  />
                  <path
                    d="M12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">80%</h3>
            </div>
            <p className="text-gray-400 text-sm font-medium">Attendance</p>
          </div>

          <div className="bg-white rounded-3xl p-5 shadow-xs border border-gray-50 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-purple-50 text-purple-500 rounded-xl">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-2xl font-bold">258+</h3>
            </div>
            <p className="text-gray-400 text-sm font-medium">Task Completed</p>
          </div>

          <div className="bg-white rounded-3xl p-5 shadow-xs border border-gray-50 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-amber-50 text-amber-500 rounded-xl">
                <Clock size={24} />
              </div>
              <h3 className="text-2xl font-bold">64%</h3>
            </div>
            <p className="text-gray-400 text-sm font-medium">
              Task in Progress
            </p>
          </div>

          <div className="bg-white rounded-3xl p-5 shadow-xs border border-gray-50 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 bg-pink-50 text-pink-500 rounded-xl">
                <Award size={24} />
              </div>
              <h3 className="text-2xl font-bold">245</h3>
            </div>
            <p className="text-gray-400 text-sm font-medium">Reward Points</p>
          </div>
        </div>

        {/* Notice Board & Resources */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-3xl p-6 shadow-xs border border-gray-50">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-900">Notice Board</h2>
              <button className="text-sm text-gray-400 underline decoration-gray-300 underline-offset-4">
                View all
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-3 border border-gray-100 rounded-2xl hover:border-amber-100 transition-colors">
                <div className="p-3 bg-amber-50 text-amber-500 rounded-2xl shrink-0">
                  <Bell size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">
                    Sports Day Announcement
                  </h4>
                  <p className="text-xs text-gray-500 leading-tight">
                    The school's Annual Sports Day will be held on May 12, 2024.
                    Mark your calendars!
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-3 border border-gray-100 rounded-2xl hover:border-indigo-100 transition-colors">
                <div className="p-3 bg-indigo-50 text-indigo-500 rounded-2xl shrink-0">
                  <Bell size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">
                    Summer Break Start Date
                  </h4>
                  <p className="text-xs text-gray-500 leading-tight">
                    Summer break begins on May 25, 2024. Have a wonderful
                    holiday!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-xs border border-gray-50">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-900">Resources</h2>
              <button className="text-sm text-gray-400 underline decoration-gray-300 underline-offset-4">
                View all
              </button>
            </div>
            <div className="flex gap-4 items-center justify-around h-full pb-4">
              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 bg-rose-50 rounded-2xl flex flex-col items-center justify-center text-rose-500 shadow-sm border border-rose-100/50 hover:-translate-y-1 transition-transform cursor-pointer">
                  <Book size={32} strokeWidth={1.5} />
                </div>
                <span className="text-sm font-medium text-gray-600">Books</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 bg-teal-50 rounded-2xl flex flex-col items-center justify-center text-teal-500 shadow-sm border border-teal-100/50 hover:-translate-y-1 transition-transform cursor-pointer">
                  <Video size={32} strokeWidth={1.5} />
                </div>
                <span className="text-sm font-medium text-gray-600">
                  Videos
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-20 bg-purple-50 rounded-2xl flex flex-col items-center justify-center text-purple-500 shadow-sm border border-purple-100/50 hover:-translate-y-1 transition-transform cursor-pointer">
                  <FileText size={32} strokeWidth={1.5} />
                </div>
                <span className="text-sm font-medium text-gray-600">
                  Papers
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      {/* <div className="w-full xl:w-[340px] flex-shrink-0 flex-col bg-white"> */}
      <div className="pr-4 pb-20 space-y-6">
        {/* Attendance Chart */}
        <div className="bg-white rounded-3xl p-6 shadow-[0_2px_20px_0px_rgba(0,0,0,0.03)] border border-gray-50 relative">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold text-gray-900">Attendance</h2>
            <button>
              <MoreHorizontal size={20} className="text-gray-400" />
            </button>
          </div>
          <div className="flex gap-4 mb-4 text-xs font-medium">
            <span className="flex items-center gap-1.5 text-gray-500">
              <div className="w-2 h-2 rounded-full bg-indigo-200"></div> Present
            </span>
            <span className="flex items-center gap-1.5 text-gray-500">
              <div className="w-2 h-2 rounded-full bg-yellow-400"></div> Absent
            </span>
          </div>

          <div className="h-40 w-full relative flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={[
                    { name: "Present", value: 80, color: "#C7D2FE" },
                    { name: "Absent", value: 20, color: "#FCD34D" },
                  ]}
                  innerRadius={55}
                  outerRadius={75}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                  stroke="none"
                >
                  {[
                    { name: "Present", value: 80, color: "#C7D2FE" },
                    { name: "Absent", value: 20, color: "#FCD34D" },
                  ].map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span className="text-2xl font-bold text-gray-800">80%</span>
            </div>
          </div>

          <div className="flex gap-2 mt-4">
            <button className="flex-1 border border-gray-100 rounded-xl py-2 flex justify-center items-center gap-2 text-xs text-gray-500 font-medium hover:bg-gray-50 transition-colors">
              {/* <Calendar size={14} /> April 2023 <ChevronRight size={14} /> */}
              <p>April 2026</p>
            </button>
            <button className="flex-1 border border-gray-100 rounded-xl py-2 flex justify-center items-center gap-2 text-xs text-gray-500 font-medium hover:bg-gray-50 transition-colors">
              Class 10th <ChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Calendar (Static mock) */}
        <div className="bg-white rounded-3xl p-6 shadow-[0_2px_20px_0px_rgba(0,0,0,0.03)] border border-gray-50">
          <div className="flex justify-between items-center mb-6">
            <button className="p-1 hover:bg-gray-100 rounded-lg text-gray-500">
              <ChevronLeft size={16} />
            </button>
            <h3 className="text-sm font-bold text-gray-900">September 2021</h3>
            <button className="p-1 hover:bg-gray-100 rounded-lg text-gray-500">
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-y-4 gap-x-1 text-center text-xs">
            {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d) => (
              <div key={d} className="text-gray-400 font-medium mb-2">
                {d}
              </div>
            ))}

            {/* Days */}
            {[
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            ].map((d) => (
              <div key={`d1-${d}`} className="text-gray-700 font-medium py-1">
                {d}
              </div>
            ))}
            <div className="text-white font-medium bg-rose-500 rounded-full w-7 h-7 flex items-center justify-center mx-auto shadow-sm">
              19
            </div>
            {[20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map((d) => (
              <div key={`d2-${d}`} className="text-gray-700 font-medium py-1">
                {d}
              </div>
            ))}
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

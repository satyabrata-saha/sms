import {
  LayoutDashboard,
  User,
  BookText,
  Megaphone,
  ShieldUser,
  GraduationCap,
  Activity,
  Users,
  Settings,
  ClipboardList,
  LifeBuoy,
  LineChart,
  FileText,
  BookOpen,
  CalendarDays,
  ClipboardCheck,
  Award,
  IndianRupee,
} from "lucide-react";

export const school_name = "Test School";
export const school_logo = "🔍";

export const roleMenu = {
  ADMIN: [
    {
      title: "Overview",
      items: [
        { title: "Dashboard", url: "/dashboard/admin", icon: LayoutDashboard },
        {
          title: "Analytics",
          url: "/dashboard/admin/analytics",
          icon: LineChart,
        },
        { title: "Reports", url: "/dashboard/admin/reports", icon: FileText },
        {
          title: "Activity Logs",
          url: "/dashboard/admin/activity",
          icon: Activity,
        },
      ],
    },
    {
      title: "Management",
      items: [
        { title: "Students", url: "/dashboard/admin/students", icon: Users },
        { title: "Teachers", url: "/dashboard/admin/teachers", icon: BookOpen },
        {
          title: "Classes",
          url: "/dashboard/admin/classes",
          icon: GraduationCap,
        },
        {
          title: "Attendance",
          url: "/dashboard/student/attendance",
          icon: ShieldUser,
        },
        {
          title: "Grades",
          url: "/dashboard/student/grades",
          icon: GraduationCap,
        },
      ],
    },
    {
      title: "System",
      items: [
        // { title: "Settings", url: "/dashboard/admin/settings", icon: Settings },
        { title: "Support", url: "/support", icon: LifeBuoy },
      ],
    },
  ],

  TEACHER: [
    {
      title: "Overview",
      items: [
        {
          title: "Dashboard",
          url: "/dashboard/teacher",
          icon: LayoutDashboard,
        },
        {
          title: "My Classes",
          url: "/dashboard/teacher/classes",
          icon: BookOpen,
        },
        {
          title: "Schedule",
          url: "/dashboard/teacher/schedule",
          icon: CalendarDays,
        },
      ],
    },
    {
      title: "Academic",
      items: [
        {
          title: "Attendance",
          url: "/dashboard/teacher/attendance",
          icon: ClipboardCheck,
        },
        { title: "Grades", url: "/dashboard/teacher/grades", icon: Award },
      ],
    },
    {
      title: "Account",
      items: [
        { title: "Profile", url: "/dashboard/teacher/profile", icon: User },
        { title: "Support", url: "/support", icon: LifeBuoy },
      ],
    },
  ],

  STUDENT: [
    {
      title: "Overview",
      items: [
        {
          title: "Dashboard",
          url: "/dashboard/student",
          icon: LayoutDashboard,
        },
        {
          title: "Academic Summary",
          url: "/dashboard/student/summary",
          icon: BookText,
        },
        {
          title: "Announcements",
          url: "/dashboard/student/announcements",
          icon: Megaphone,
        },
      ],
    },
    {
      title: "Academic",
      items: [
        {
          title: "Attendance",
          url: "/dashboard/student/attendance",
          icon: ShieldUser,
        },
        {
          title: "Grades",
          url: "/dashboard/student/grades",
          icon: GraduationCap,
        },
        {
          title: "Payments",
          url: "/dashboard/student/payments",
          icon: IndianRupee,
        },
      ],
    },
    {
      title: "Account",
      items: [
        { title: "Profile", url: "/dashboard/student/profile", icon: User },
      ],
    },
  ],
};

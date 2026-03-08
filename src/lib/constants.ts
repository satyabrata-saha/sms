import {
  LayoutDashboard,
  User,
  BookText,
  Megaphone,
  ShieldUser,
  GraduationCap,
  Activity,
  Users,
  ClipboardList,
  LifeBuoy,
  LineChart,
  FileText,
  BookOpen,
  CalendarDays,
  ClipboardCheck,
  Award,
  IndianRupee,
  LifeBuoyIcon,
  SendIcon,
  FrameIcon,
  PieChartIcon,
  MapIcon,
  type LucideIcon,
} from "lucide-react";

// ─── School Info ──────────────────────────────
export const school_name = "Test School";
export const school_logo = "🔍";

// ─── App Constants ────────────────────────────
export const APP_NAME = "School Management System";
export const APP_SHORT_NAME = "SMS";
export const ACADEMIC_YEAR =
  process.env.NEXT_PUBLIC_ACADEMIC_YEAR || "2025-2026";

// Pagination
export const DEFAULT_PAGE_SIZE = 10;
export const PAGE_SIZE_OPTIONS = [10, 25, 50, 100];

// Auth
export const MAX_LOGIN_ATTEMPTS = 5;
export const LOCK_DURATION_MINUTES = 30;

// Role labels
export const ROLE_LABELS: Record<string, string> = {
  ADMIN: "Administrator",
  TEACHER: "Teacher",
  STUDENT: "Student",
};

// Status labels
export const STATUS_LABELS: Record<string, string> = {
  PRESENT: "Present",
  ABSENT: "Absent",
  LATE: "Late",
};

// Payment status labels
export const PAYMENT_STATUS_LABELS: Record<string, string> = {
  PENDING: "Pending",
  COMPLETED: "Completed",
  FAILED: "Failed",
  REFUNDED: "Refunded",
};

// Payment type labels
export const PAYMENT_TYPE_LABELS: Record<string, string> = {
  TUITION: "Tuition Fee",
  TRANSPORT: "Transport Fee",
  EXAM_FEE: "Exam Fee",
  LIBRARY: "Library Fee",
  OTHER: "Other",
};

// Exam types
export const EXAM_TYPES = [
  "Mid-Term",
  "Final",
  "Quiz",
  "Assignment",
  "Practical",
] as const;

// ─── Role-Based Menu ──────────────────────────
export interface MenuItem {
  title: string;
  url: string;
  icon: LucideIcon;
  isActive?: boolean;
  items?: MenuItem[];
}

export interface MenuSection {
  title: string;
  url?: string;
  icon?: LucideIcon;
  items: MenuItem[];
}

export const roleMenu: Record<string, MenuSection[]> = {
  ADMIN: [
    {
      title: "Overview",
      isActive: true,
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
      isActive: true,
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
          url: "/dashboard/admin/attendance",
          icon: ShieldUser,
        },
        {
          title: "Grades",
          url: "/dashboard/admin/grades",
          icon: ClipboardList,
        },
      ],
    },
  ],

  TEACHER: [
    {
      title: "Overview",
      isActive: true,
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
      isActive: true,
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
      isActive: true,
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
      isActive: true,
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
  ],
};

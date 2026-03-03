import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Trophy, Award, TrendingUp } from "lucide-react";

export default function AcademicSummaryPage() {
  const courses = [
    { name: "Advanced Calculus", credits: 4, grade: "A", status: "Excellent" },
    { name: "Physics II", credits: 4, grade: "B+", status: "Good" },
    { name: "World History", credits: 3, grade: "A-", status: "Great" },
    { name: "Computer Science 101", credits: 4, grade: "A+", status: "Outstanding" },
    { name: "English Literature", credits: 3, grade: "B", status: "Good" },
  ];

  return (
    <div className="w-full p-6 space-y-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Academic Summary</h1>
          <p className="text-muted-foreground mt-1">
            Overview of your academic performance and current standing.
          </p>
        </div>
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white border-none shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-indigo-100 text-sm font-medium">Cumulative GPA</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">3.84</div>
            <p className="text-xs mt-1 text-indigo-200 flex items-center">
              <TrendingUp size={14} className="mr-1" /> Top 10% of class
            </p>
          </CardContent>
        </Card>
        
        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-muted-foreground text-sm font-medium">Total Credits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-800">86</div>
            <p className="text-xs mt-1 text-muted-foreground">
              34 remaining for graduation
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-muted-foreground text-sm font-medium">Academic Standing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold text-gray-800 mt-2 flex items-center gap-2">
              <Award className="text-green-500" /> Dean's List
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-muted-foreground text-sm font-medium">Class Rank</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-800">42<span className="text-lg text-gray-500 font-normal">/450</span></div>
            <p className="text-xs mt-1 text-muted-foreground">
              Top 9th percentile
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Current Semester Courses */}
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Current Semester</CardTitle>
          <CardDescription>Spring 2026 Academic Term</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b">
                <tr>
                  <th scope="col" className="px-6 py-3 font-semibold">Course Name</th>
                  <th scope="col" className="px-6 py-3 font-semibold">Credits</th>
                  <th scope="col" className="px-6 py-3 font-semibold">Current Grade</th>
                  <th scope="col" className="px-6 py-3 font-semibold text-right">Status</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course, idx) => (
                  <tr key={idx} className="bg-white border-b hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900 flex items-center gap-3">
                      <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                        <BookOpen size={16} />
                      </div>
                      {course.name}
                    </td>
                    <td className="px-6 py-4">{course.credits}</td>
                    <td className="px-6 py-4 font-bold text-gray-700">{course.grade}</td>
                    <td className="px-6 py-4 text-right">
                      <Badge variant={course.grade.includes('A') ? "default" : course.grade.includes('B') ? "secondary" : "outline"} className={course.grade.includes('A') ? "bg-green-100 text-green-800 hover:bg-green-200" : ""}>
                        {course.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

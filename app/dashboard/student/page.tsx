import { AttendanceCard } from "@/components/attendance-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UserCard } from "@/components/user-card";
import {
  ChevronRightIcon,
  Dot,
  MapPin,
  PieChart,
  Calendar,
  Clock,
  BookOpen,
  Trophy,
} from "lucide-react";

export default function Page() {
  return (
    <div className="w-full p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 w-full">
        {/* Profile Summary */}
        <div className="md:col-span-2">
          <UserCard
            firstName="Satyabrata"
            lastName="Saha"
            email="satyabrata@email.com"
            role="Student"
            image="https://cdn.pixabay.com/photo/2022/03/24/15/46/beauty-7089300_1280.jpg"
          />
        </div>

        {/* Quick Stats overview */}
        <div className="md:col-span-2 md:col-start-3 grid grid-cols-2 gap-4 w-full">
          <AttendanceCard />
          <Card className="h-full flex flex-col justify-center">
            <CardHeader className="pb-2">
              <CardDescription className="font-semibold text-gray-500">
                test
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-end gap-2">
                <span className="text-4xl font-black text-gray-800">3.8</span>
                <Trophy size={20} className="text-yellow-500 mb-1.5" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Announcements Summary */}
        <div className="md:row-span-5 md:col-start-5">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Recent Updates</CardTitle>
            </CardHeader>
            {/* <div className="h-fit overflow-y-auto pr-2 text-gray-700"> */}
            <CardContent className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4 py-1">
                <p className="text-sm font-semibold">
                  Science Fair Registration
                </p>
                <p className="text-xs text-muted-foreground">
                  Closes in 2 days
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4 py-1">
                <p className="text-sm font-semibold">Library Hours Extended</p>
                <p className="text-xs text-muted-foreground">
                  Open until 10 PM
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-1">
                <p className="text-sm font-semibold">Basketball Tryouts</p>
                <p className="text-xs text-muted-foreground">
                  Next week in Gym A
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4 py-1">
                <p className="text-sm font-semibold">
                  Science Fair Registration
                </p>
                <p className="text-xs text-muted-foreground">
                  Closes in 2 days
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4 py-1">
                <p className="text-sm font-semibold">Library Hours Extended</p>
                <p className="text-xs text-muted-foreground">
                  Open until 10 PM
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-1">
                <p className="text-sm font-semibold">Basketball Tryouts</p>
                <p className="text-xs text-muted-foreground">
                  Next week in Gym A
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4 py-1">
                <p className="text-sm font-semibold">
                  Science Fair Registration
                </p>
                <p className="text-xs text-muted-foreground">
                  Closes in 2 days
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4 py-1">
                <p className="text-sm font-semibold">Library Hours Extended</p>
                <p className="text-xs text-muted-foreground">
                  Open until 10 PM
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-1">
                <p className="text-sm font-semibold">Basketball Tryouts</p>
                <p className="text-xs text-muted-foreground">
                  Next week in Gym A
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4 py-1">
                <p className="text-sm font-semibold">
                  Science Fair Registration
                </p>
                <p className="text-xs text-muted-foreground">
                  Closes in 2 days
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4 py-1">
                <p className="text-sm font-semibold">Library Hours Extended</p>
                <p className="text-xs text-muted-foreground">
                  Open until 10 PM
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4 py-1">
                <p className="text-sm font-semibold">Basketball Tryouts</p>
                <p className="text-xs text-muted-foreground">
                  Next week in Gym A
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4 py-1">
                <p className="text-sm font-semibold">
                  Science Fair Registration
                </p>
                <p className="text-xs text-muted-foreground">
                  Closes in 2 days
                </p>
              </div>
            </CardContent>
            {/* </div> */}
          </Card>
        </div>

        {/* Upcoming Assignments / Tasks */}
        <div className="md:col-span-2 md:row-start-2">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Upcoming Assignments</CardTitle>
                  <CardDescription>
                    You have 3 tasks due this week
                  </CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Calculus Problem Set 4",
                    subject: "Math",
                    due: "Tomorrow, 11:59 PM",
                    status: "In Progress",
                  },
                  {
                    title: "Physics Lab Report",
                    subject: "Science",
                    due: "Friday, 5:00 PM",
                    status: "Not Started",
                  },
                  {
                    title: "History Essay Draft",
                    subject: "History",
                    due: "Sunday, 11:59 PM",
                    status: "Not Started",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg border bg-card text-card-foreground shadow-sm"
                  >
                    <div className="flex flex-col">
                      <span className="font-semibold">{item.title}</span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar size={12} /> {item.due}
                        <Dot size={12} /> {item.subject}
                      </span>
                    </div>
                    <Badge
                      variant={
                        item.status === "In Progress" ? "default" : "secondary"
                      }
                    >
                      {item.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* test */}
        <div className="md:col-span-2 md:col-start-3 md:row-start-2">
          <Card className="w-full h-full bg-linear-to-br from-blue-500 to-indigo-600 text-white shadow-lg overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <BookOpen size={120} />
            </div>
            <CardHeader className="relative z-10 pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl font-bold">test</CardTitle>
                <Badge
                  variant="secondary"
                  className="flex gap-2 justify-center items-center bg-white/20 hover:bg-white/30 text-white border-0"
                >
                  <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                  LIVE NOW
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="relative z-10 pt-4">
              <div>
                <h3 className="text-3xl font-extrabold mb-1">
                  Advanced Calculus
                </h3>
                <p className="flex items-center text-sm text-blue-100 mt-2">
                  <MapPin size={16} className="mr-1" />
                  Room 302
                  <Dot size={20} className="mx-1 text-blue-300" />
                  Dr. Aris
                </p>
                <p className="flex items-center text-sm text-blue-100 mt-1">
                  <Clock size={16} className="mr-1" />
                  10:00 AM - 11:30 AM
                </p>
              </div>
            </CardContent>
            <CardFooter className="relative z-10 mt-6 md:mt-10">
              <Button className="w-full bg-white text-indigo-700 hover:bg-gray-100 font-semibold shadow-md transition-all ease-in duration-200">
                Join Class
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="col-span-4 row-start-3">6</div>
      </div>
    </div>
  );
}

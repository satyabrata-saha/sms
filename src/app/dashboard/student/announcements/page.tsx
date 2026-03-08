import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Megaphone, Calendar, Pin, BellRing } from "lucide-react";

export default function AnnouncementsPage() {
  const announcements = [
    {
      id: 1,
      title: "End of Semester Examination Schedule Published",
      date: "May 15, 2026",
      author: "Admin Office",
      category: "Academic",
      isPinned: true,
      content: "The final examination schedule for the Spring 2026 semester has been officially published. Please review your portal to see the specific dates and times for your registered courses. Ensure you arrive at least 15 minutes early and bring your valid student ID.",
    },
    {
      id: 2,
      title: "Campus Library - Extended Hours for Finals Week",
      date: "May 12, 2026",
      author: "Library Services",
      category: "Facility",
      isPinned: true,
      content: "To support students during the upcoming finals week, the main campus library will be extending its operating hours. Starting next Monday, the library will be open 24/7 until the end of the examination period. Free coffee will be provided in the lobby from 10 PM to 2 AM daily.",
    },
    {
      id: 3,
      title: "Annual Tech Symposium Registration",
      date: "May 10, 2026",
      author: "Computer Science Dept",
      category: "Event",
      isPinned: false,
      content: "Registration is now open for the Annual Tech Symposium. This year's theme is 'AI and the Future of Web Development'. We have guest speakers from leading tech companies holding workshops. Students can register via the events portal. Early bird discount applies until Friday.",
    },
    {
      id: 4,
      title: "Scheduled Maintenance Notification",
      date: "May 08, 2026",
      author: "IT Support",
      category: "System",
      isPinned: false,
      content: "The student portal will undergo scheduled maintenance this coming Saturday from 2:00 AM to 6:00 AM. During this window, access to course materials, grades, and the payment gateway will be temporarily unavailable. We apologize for any inconvenience.",
    },
    {
      id: 5,
      title: "Call for Volunteers: Campus Tour Guides",
      date: "May 05, 2026",
      author: "Admissions Office",
      category: "General",
      isPinned: false,
      content: "The Admissions Office is looking for enthusiastic students to serve as volunteer tour guides for the upcoming Open House weekends in June. This is a great opportunity to build your resume and show your school spirit. Interested students should apply at the student center.",
    }
  ];

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'Academic': return 'bg-blue-100 text-blue-800 hover:bg-blue-200 border-blue-200';
      case 'Facility': return 'bg-purple-100 text-purple-800 hover:bg-purple-200 border-purple-200';
      case 'Event': return 'bg-amber-100 text-amber-800 hover:bg-amber-200 border-amber-200';
      case 'System': return 'bg-red-100 text-red-800 hover:bg-red-200 border-red-200';
      default: return 'bg-gray-100 text-gray-800 hover:bg-gray-200 border-gray-200';
    }
  };

  return (
    <div className="w-full p-6 space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between border-b pb-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
            <Megaphone className="text-indigo-600" size={32} />
            Announcements
          </h1>
          <p className="text-muted-foreground mt-1">
            Stay updated with the latest news, events, and important notices.
          </p>
        </div>
        <Button variant="outline" className="hidden md:flex gap-2">
          <BellRing size={16} /> Notification Settings
        </Button>
      </div>

      <div className="space-y-6 mt-6">
        {announcements.map((announcement) => (
          <Card key={announcement.id} className={`shadow-sm transition-all duration-200 hover:shadow-md ${announcement.isPinned ? 'border-indigo-200 shadow-indigo-100/50' : ''}`}>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className={getCategoryColor(announcement.category)}>
                      {announcement.category}
                    </Badge>
                    {announcement.isPinned && (
                      <Badge variant="secondary" className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border-indigo-200 flex gap-1 items-center">
                        <Pin size={12} className="fill-indigo-700" /> Pinned
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl leading-tight text-gray-900">{announcement.title}</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {announcement.content}
              </p>
            </CardContent>
            <CardFooter className="pt-0 flex justify-between items-center text-xs text-muted-foreground border-t border-gray-100 mt-4 px-6 pt-4">
              <div className="flex gap-4">
                <span className="flex items-center gap-1.5"><Calendar size={14} /> {announcement.date}</span>
                <span className="hidden sm:inline-block border-l border-gray-300 pl-4">{announcement.author}</span>
              </div>
              <Button variant="ghost" size="sm" className="h-8 px-2 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50">Read more</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

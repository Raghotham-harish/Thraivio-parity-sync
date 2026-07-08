import {
  Star,
  Users,
  IndianRupee,
  GraduationCap,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import type {
  TopMentorReport,
} from "@/types/admin-report";

interface TopMentorsCardProps {
  mentors: TopMentorReport[];
}

export default function TopMentorsCard({
  mentors,
}: TopMentorsCardProps) {
  return (
    <Card className="rounded-3xl shadow-sm">

      <CardHeader>

        <div className="flex items-center justify-between">

          <div>

            <CardTitle className="text-lg">
              Top Performing Mentors
            </CardTitle>

            <p className="mt-1 text-sm text-muted-foreground">
              Highest revenue generating mentors
            </p>

          </div>

          <div className="rounded-2xl bg-orange-500/10 p-3">

            <GraduationCap className="h-6 w-6 text-orange-600" />

          </div>

        </div>

      </CardHeader>

      <CardContent className="space-y-5">

        {mentors.map((mentor) => (

          <div
            key={mentor.id}
            className="flex items-center justify-between rounded-2xl border p-4 transition-all hover:bg-muted/40"
          >

            <div className="flex items-center gap-4">

              <Avatar className="h-14 w-14">

                <AvatarImage src={mentor.avatar} />

                <AvatarFallback>
                  {mentor.name.slice(0, 2)}
                </AvatarFallback>

              </Avatar>

              <div>

                <h4 className="font-semibold">
                  {mentor.name}
                </h4>

                <p className="text-sm text-muted-foreground">
                  {mentor.company}
                </p>

              </div>

            </div>

            <div className="text-right">
                              <div className="flex items-center justify-end gap-1">

                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

                <span className="font-semibold">
                  {mentor.rating.toFixed(1)}
                </span>

              </div>

              <div className="mt-3 space-y-2 text-sm">

                <div className="flex items-center justify-end gap-2">

                  <Users className="h-4 w-4 text-muted-foreground" />

                  <span>
                    {mentor.totalStudents.toLocaleString()} Students
                  </span>

                </div>

                <div className="flex items-center justify-end gap-2">

                  <IndianRupee className="h-4 w-4 text-emerald-600" />

                  <span className="font-semibold text-emerald-600">
                    ₹
                    {mentor.totalRevenue.toLocaleString("en-IN")}
                  </span>

                </div>

                <div className="text-xs text-muted-foreground">

                  {mentor.completedSessions.toLocaleString()}
                  {" "}
                  Sessions Completed

                </div>

              </div>

            </div>

          </div>

        ))}
              </CardContent>

    </Card>
  );
}
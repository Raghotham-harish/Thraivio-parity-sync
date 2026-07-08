import { mentors } from "@/data/mentors";

import type { UserProgram } from "@/types/userProgram";

export const userPrograms: UserProgram[] =
  mentors.flatMap((mentor) =>
    mentor.programs.map(
      (program, index) => ({
        id: `${mentor.id}-${index}`,

        mentorId: mentor.id,

        mentorName: mentor.name,

        mentorRole: mentor.role,

        mentorCompany: mentor.company,

        mentorImage: mentor.image,

        title: program.title,

        duration: program.duration,

        level: program.level,

        students: program.students,

        price: program.price,

        progress:
          Math.floor(
            Math.random() * 100
          ) + 1,

        totalLessons: 30,

        completedLessons:
          Math.floor(
            Math.random() * 30
          ),

        enrolledDate:
          "12 June 2026",

        nextSession:
          "28 June 2026 • 7:00 PM",

        status:
          index % 4 === 0
            ? "completed"
            : index % 3 === 0
            ? "paused"
            : "active",

        certificateAvailable:
          index % 2 === 0,
      })
    )
  );
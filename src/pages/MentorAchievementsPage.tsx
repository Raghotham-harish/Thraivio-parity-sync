import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Trophy } from "lucide-react";
import { mentors } from "@/data/mentors";

const achievementImages = [
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900",
];

const MentorAchievementsPage = () => {
  const { id } = useParams();

  const mentor = mentors.find(
    (item) => item.id === Number(id)
  );

  if (!mentor) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-4xl font-bold">
          Mentor Not Found
        </h1>
      </div>
    );
  }

  return (
    <section className="py-16 bg-slate-50 min-h-screen">

      <div className="max-w-7xl mx-auto px-4">

        <Link
          to={`/mentor/${mentor.id}`}
          className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Mentor
        </Link>

        <div className="text-center mt-8">

          <span className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            🏆 Career Milestones
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-5">
            Key Achievements
          </h1>

          <p className="mt-4 text-slate-500 max-w-3xl mx-auto">
            Discover the remarkable accomplishments and career highlights achieved by {mentor.name}.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-10 mb-12">

  <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-center">
    <h3 className="text-3xl font-bold text-blue-600">
      {mentor.achievements.length}
    </h3>
    <p className="text-slate-500">
      Achievements
    </p>
  </div>

  <div className="bg-green-50 border border-green-100 rounded-2xl p-5 text-center">
    <h3 className="text-3xl font-bold text-green-600">
      Expert
    </h3>
    <p className="text-slate-500">
      Industry Recognition
    </p>
  </div>

  <div className="bg-purple-50 border border-purple-100 rounded-2xl p-5 text-center">
    <h3 className="text-3xl font-bold text-purple-600">
      Proven
    </h3>
    <p className="text-slate-500">
      Track Record
    </p>
  </div>

</div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {mentor.achievements.map((item, index) => (

            <div
              key={item}
              className="
bg-white
rounded-3xl
border
border-slate-200
overflow-hidden
shadow-sm
hover:border-blue-200
hover:-translate-y-2
hover:shadow-xl
transition-all
duration-300
"
            >

              <img
                src={achievementImages[index % achievementImages.length]}
                alt={item}
                className="
w-full
h-64
object-cover
transition-transform
duration-500
hover:scale-105
"
              />

              <div className="p-6">

                <Trophy className="text-amber-500" size={28} />

                <h3 className="text-2xl font-bold leading-snug mt-4">
                  {item}
                </h3>

                <p className="text-slate-500 mt-3">
                This achievement reflects exceptional leadership,
                industry expertise, and a proven track record of
                delivering meaningful impact throughout the mentor's career.
                </p>

                <div className="mt-5 inline-flex bg-green-50 border border-green-100 text-green-700 px-3 py-2 rounded-xl text-sm font-medium">
                  🏆 Career Achievement
                </div>

              </div>

            </div>

          ))}

        </div>

        <div className="mt-16 border-t border-slate-200 pt-10 text-center">

  <div className="h-1 w-24 bg-blue-600 rounded-full mx-auto mb-6"></div>

  <h3 className="text-3xl font-bold">
    Career Achievements & Milestones
  </h3>

  <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
    Every milestone represents dedication, leadership, innovation,
    and years of professional excellence that inspire mentees to
    achieve their own career goals.
  </p>

</div>

      </div>

    </section>
  );
};

export default MentorAchievementsPage;
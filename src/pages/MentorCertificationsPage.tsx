import { Link, useParams } from "react-router-dom";
import { ArrowLeft, BadgeCheck } from "lucide-react";
import { mentors } from "@/data/mentors";

const certificateImages = [
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900",
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900",
];

const MentorCertificationsPage = () => {
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
            🏅 Verified Credentials
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-5">
            All Certifications
          </h1>

          <p className="mt-4 text-slate-500 max-w-3xl mx-auto">
            Explore every professional certification and industry credential earned by {mentor.name}.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-10 mb-12">

  <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-center">
    <h3 className="text-3xl font-bold text-blue-600">
      {mentor.certifications.length}
    </h3>
    <p className="text-slate-500">
      Certifications
    </p>
  </div>

  <div className="bg-green-50 border border-green-100 rounded-2xl p-5 text-center">
    <h3 className="text-3xl font-bold text-green-600">
      100%
    </h3>
    <p className="text-slate-500">
      Verified
    </p>
  </div>

  <div className="bg-purple-50 border border-purple-100 rounded-2xl p-5 text-center">
    <h3 className="text-3xl font-bold text-purple-600">
      Expert
    </h3>
    <p className="text-slate-500">
      Level
    </p>
  </div>

</div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {mentor.certifications.map((cert, index) => (

            <div
              key={cert}
              className="
              
bg-white
rounded-3xl
overflow-hidden
border
border-slate-200
shadow-sm
hover:border-blue-200
hover:-translate-y-2
hover:shadow-xl
transition-all
duration-300
"
            >

              <img
                src={certificateImages[index % certificateImages.length]}
                alt={cert}
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

                <BadgeCheck className="text-blue-600" size={26} />

                <h3 className="text-2xl font-bold mt-4">
                  {cert}
                </h3>

                <p className="text-slate-500 mt-3">
                  Verified industry-recognized certification demonstrating expertise and professional excellence.
                </p>

                <div className="mt-5 inline-flex items-center gap-2 bg-green-50 border border-green-100 text-green-700 px-3 py-2 rounded-xl text-sm font-medium">
                  ✓ Verified Credential
                </div>

              </div>

            </div>

          ))}

        </div>

        <div className="mt-16 border-t border-slate-200 pt-10 text-center">

  <div className="h-1 w-24 bg-blue-600 rounded-full mx-auto mb-6"></div>

  <h3 className="text-3xl font-bold">
    Verified Professional Credentials
  </h3>

  <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
    Every certification reflects continuous learning, industry expertise,
    and a commitment to delivering high-quality mentorship.
  </p>

</div>

      </div>

    </section>
  );
};

export default MentorCertificationsPage;
import {
  Award,
  BadgeCheck,
  ShieldCheck,
  Globe,
  Sparkles,
  Trophy,
} from "lucide-react";

interface MentorCertificationsProps {
  mentor: {
    certifications: string[];
  };
}

const MentorCertifications = ({
  mentor,
}: MentorCertificationsProps) => {

  return (

    <section className="pb-24">

      <div className="max-w-7xl mx-auto px-4">

        <div className="bg-white border border-slate-200 rounded-2xl p-10 shadow-sm">

          {/* Header */}

          <div className="flex flex-col xl:flex-row justify-between gap-10">

            {/* Left */}

            <div className="max-w-3xl">

              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  bg-blue-50
                  border
                  border-blue-200
                  text-blue-700
                  px-5
                  py-2
                  rounded-lg
                  text-sm
                  font-semibold
                "
              >

                <Sparkles size={16} />

                Professional Credentials

              </span>

              <h2 className="text-4xl font-semibold tracking-tight text-slate-900 mt-6 leading-tight">

                Certified Expertise
                That Builds Trust

              </h2>

              <p className="text-slate-600 mt-5 leading-7 max-w-2xl">

                Every certification represents years of
                practical experience, continuous learning,
                and industry recognition that strengthens
                the quality of mentorship delivered.

              </p>

            </div>

            {/* Right Hero Card */}

            <div
              className="
                xl:w-[360px]
                rounded-2xl
                bg-white
                border
                border-slate-200
                shadow-sm
                p-8
                text-slate-900
              "
            >

              <div className="flex items-center gap-3">

                <Award size={34} />

                <div>

                  <p className="text-slate-500">

                    Total Credentials

                  </p>

                  <h2 className="text-5xl font-bold mt-1">

                    {mentor.certifications.length}

                  </h2>

                </div>

              </div>

              <div className="mt-8 space-y-5">

                <div className="flex justify-between">

                  <span>Verification</span>

                  <span>100%</span>

                </div>

                <div className="h-2 bg-white border border-slate-200 rounded-full">

                  <div className="h-full w-full bg-blue-600 rounded-full"></div>

                </div>

                <div className="flex justify-between">

                  <span>Industry Recognition</span>

                  <span>98%</span>

                </div>

                <div className="h-2 bg-white border border-slate-200 rounded-full">

                  <div className="h-full w-[98%] bg-blue-600 rounded-full"></div>

                </div>

                <div className="flex justify-between">

                  <span>Mentorship Quality</span>

                  <span>99%</span>

                </div>

                <div className="h-2 bg-white border border-slate-200 rounded-full">

                  <div className="h-full w-[99%] bg-blue-600 rounded-full"></div>

                </div>

              </div>

            </div>

          </div>

          {/* Achievement Cards */}

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mt-12">

            <div className="rounded-2xl bg-blue-50 p-6">

              <Award
                className="text-blue-600"
                size={30}
              />

              <h3 className="text-3xl font-bold mt-5">

                {mentor.certifications.length}

              </h3>

              <p className="text-slate-500 mt-2">

                Professional Certifications

              </p>

            </div>

            <div className="rounded-2xl bg-blue-50 p-6">

              <BadgeCheck
                className="text-blue-600"
                size={30}
              />

              <h3 className="text-3xl font-bold mt-5">

                100%

              </h3>

              <p className="text-slate-500 mt-2">

                Verified Credentials

              </p>

            </div>

            <div className="rounded-2xl bg-blue-50 p-6">

              <ShieldCheck
                className="text-blue-600"
                size={30}
              />

              <h3 className="text-3xl font-bold mt-5">

                Lifetime

              </h3>

              <p className="text-slate-500 mt-2">

                Trusted Professional

              </p>

            </div>

            <div className="rounded-2xl bg-blue-50 p-6">

              <Globe
                className="text-blue-600"
                size={30}
              />

              <h3 className="text-3xl font-bold mt-5">

                Global

              </h3>

              <p className="text-slate-500 mt-2">

                Industry Standards

              </p>

            </div>

          </div>

          {/* Section Title */}

          <div className="mt-16 flex items-center gap-3">

            <Trophy
              size={26}
              className="text-blue-600"
            />

            <div>

              <h3 className="text-3xl font-bold">

                Credential Portfolio

              </h3>

              <p className="text-slate-500 mt-2">

                A collection of verified certifications
                demonstrating technical expertise,
                leadership capabilities and continuous
                professional development.

              </p>

            </div>

          </div>


          {/* Certifications Grid */}

<div className="grid lg:grid-cols-2 gap-7 mt-12">

  {mentor.certifications?.map((cert, index) => (

    <div
      key={cert}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-7
        hover:shadow-sm
        transition
        duration-300
      "
    >

      {/* Top Glow */}

       <div className="relative z-10">

        {/* Header */}

        <div className="flex items-start justify-between">

          <div className="flex gap-4">

            <div
              className="
                h-14
                w-14
                rounded-2xl
                bg-blue-100
                flex
                items-center
                justify-center
              "
            >

              <Award
                size={28}
                className="text-blue-600"
              />

            </div>

            <div>

              <h3 className="text-xl font-bold">

                {cert}

              </h3>

              <p className="text-slate-500 text-sm mt-2">

                Professional Digital Credential

              </p>

            </div>

          </div>

          <span
            className="
              bg-green-50
                border
              border-green-200
              text-green-700
              px-3
              py-1
              rounded-lg
              text-xs
              font-semibold
            "
          >

            Verified

          </span>

        </div>

        {/* Divider */}

        <div className="h-px bg-slate-200 my-6"></div>

        {/* Details */}

        <div className="grid grid-cols-2 gap-5">

          <div>

            <p className="text-xs text-slate-400">

              Credential ID

            </p>

            <p className="font-semibold mt-1">

              CRD-202{index + 3}

            </p>

          </div>

          <div>

            <p className="text-xs text-slate-400">

              Status

            </p>

            <p className="font-semibold text-green-600 mt-1">

              Active

            </p>

          </div>

          <div>

            <p className="text-xs text-slate-400">

              Validity

            </p>

            <p className="font-semibold mt-1">

              Lifetime

            </p>

          </div>

          <div>

            <p className="text-xs text-slate-400">

              Recognition

            </p>

            <p className="font-semibold mt-1">

              Global

            </p>

          </div>

        </div>

        {/* Footer */}

        <div className="flex flex-wrap gap-2 mt-7">

          <span
            className="
              bg-white
border
border-blue-200
              text-blue-700
              px-3
              py-1
              rounded-lg
              text-xs
            "
          >
            Digital Credential
          </span>

          <span
            className="
              bg-white
border
border-slate-200
              text-slate-700
              px-3
              py-1
              rounded-lg
              text-xs
            "
          >
            Industry Standard
          </span>

          <span
            className="
              bg-white
border
border-blue-200
              text-blue-700
              px-3
              py-1
              rounded-lg
              text-xs
            "
          >
            Secure Verification
          </span>

        </div>

      </div>

    </div>

  ))}

</div>

{/* Recognition Banner */}

<div
  className="
    mt-14
    rounded-2xl
    border
    border-slate-200
    bg-white
    p-8
  "
>

  <div className="grid md:grid-cols-3 gap-6">

    <div>

      <p className="text-slate-500 text-sm">

        Professional Recognition

      </p>

      <h3 className="text-3xl font-bold mt-2">

        15+

      </h3>

    </div>

    <div>

      <p className="text-slate-500 text-sm">

        Years of Learning

      </p>

      <h3 className="text-3xl font-bold mt-2">

        Continuous

      </h3>

    </div>

    <div>

      <p className="text-slate-500 text-sm">

        Industry Trust

      </p>

      <h3 className="text-3xl font-bold mt-2">

        Worldwide

      </h3>

    </div>

  </div>

</div>
         
          {/* Premium Trust Banner */}

<div
  className="
    mt-16
    relative
    overflow-hidden
    bg-white
border
border-slate-200
rounded-2xl
shadow-sm
    p-10
    text-slate-900
  "
>
  

  {/* Decorative Glow */}

  <div className="relative z-10">

    <div className="grid lg:grid-cols-2 gap-10 items-center">

      {/* Left */}

      <div>

        <span
          className="
            inline-flex
            items-center
            gap-2
            bg-blue-50
border
border-blue-200
            px-4
            py-2
            rounded-lg
            text-sm
          "
        >

          🛡️ Industry Recognized

        </span>

        <h2 className="text-4xl font-bold mt-6 leading-tight">

          Learn From
          Verified Professionals

        </h2>

        <p className="mt-5 text-slate-600 leading-7 max-w-2xl">

          Every certification reflects years of
          dedication, technical expertise and
          continuous learning, ensuring you
          receive mentorship backed by real
          industry experience.

        </p>

        <div className="flex flex-wrap gap-3 mt-8">

          <span className="bg-blue-50
border
border-blue-200 px-4 py-2 rounded-lg">

            🎓 Certified

          </span>

          <span className="bg-blue-50
border
border-blue-200 px-4 py-2 rounded-lg">

            🌍 Globally Recognized

          </span>

          <span className="bg-blue-50
border
border-blue-200 px-4 py-2 rounded-lg">

            ✔ Verified

          </span>

        </div>

      </div>

      {/* Right */}

      <div className="grid grid-cols-2 gap-5">

        <div
          className="
            rounded-2xl
            bg-blue-50
            border
            border-blue-200
            p-6
          "
        >

          <h3 className="text-4xl font-bold">

            100%

          </h3>

          <p className="text-slate-600 leading-7 mt-2">

            Credential Verification

          </p>

        </div>

        <div
          className="
            rounded-2xl
            bg-blue-50
            border
            border-blue-200
            p-6
          "
        >

          <h3 className="text-4xl font-bold">

            Lifetime

          </h3>

          <p className="text-slate-600 leading-7 mt-2">

            Professional Learning

          </p>

        </div>

        <div
          className="
            rounded-2xl
            bg-blue-50
            border
            border-blue-200
            p-6
          "
        >

          <h3 className="text-4xl font-bold">

            Global

          </h3>

          <p className="text-slate-600 leading-7 mt-2">

            Recognition

          </p>

        </div>

        <div
          className="
            rounded-2xl
            bg-blue-50
            border
            border-blue-200
            p-6
          "
        >

          <h3 className="text-4xl font-bold">

            Expert

          </h3>

          <p className="text-slate-600 leading-7 mt-2">

            Mentorship Quality

          </p>

        </div>

      </div>

    </div>


  </div>

</div>

        </div>

      </div>
    </section>
  );
};

export default MentorCertifications;
import SignupBanner from "@/components/auth/SignupBanner";
import SignupCard from "@/components/auth/SignupCard";

const SignupPage = () => {
  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-gradient-to-br
        from-slate-50
        via-blue-50
        to-indigo-50
        py-20
      "
    >
      {/* Background Blur Effects */}

      <div
        className="
          absolute
          -top-40
          -left-40
          h-96
          w-96
          rounded-full
          bg-blue-300
          opacity-20
          blur-3xl
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          h-96
          w-96
          rounded-full
          bg-indigo-300
          opacity-20
          blur-3xl
        "
      />

      {/* Main Container */}

      <div className="relative max-w-7xl mx-auto px-4">

        <div
          className="
            grid
            lg:grid-cols-2
            gap-16
            items-center
          "
        >

          {/* Left Side */}

          <SignupBanner />

          {/* Right Side */}

          <SignupCard />

        </div>

      </div>

    </section>
  );
};

export default SignupPage;
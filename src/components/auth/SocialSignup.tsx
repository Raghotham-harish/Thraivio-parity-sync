import { FcGoogle } from "react-icons/fc";
import { FaMicrosoft } from "react-icons/fa";

const SocialSignup = () => {
  return (
    <div className="space-y-4">

      <button
        type="button"
        className="
          w-full
          flex
          items-center
          justify-center
          gap-3
          border
          border-slate-200
          rounded-xl
          py-3
          hover:bg-slate-50
          hover:shadow-md
          transition-all
        "
      >
        <FcGoogle size={20} />
        Continue with Google
      </button>

      <button
        type="button"
        className="
          w-full
          flex
          items-center
          justify-center
          gap-3
          border
          border-slate-200
          rounded-xl
          py-3
          hover:bg-slate-50
          hover:shadow-md
          transition-all
        "
      >
        <FaMicrosoft size={18} />
        Continue with Microsoft
      </button>

    </div>
  );
};

export default SocialSignup;
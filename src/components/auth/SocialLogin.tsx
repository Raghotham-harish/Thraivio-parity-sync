import { FcGoogle } from "react-icons/fc";
import { FaMicrosoft } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="space-y-4">

      <button
        type="button"
        className="
          w-full
          border
          border-slate-200
          rounded-xl
          py-3
          flex
          items-center
          justify-center
          gap-3
          hover:bg-slate-50
          transition-all
        "
      >
        <FcGoogle size={22} />

        Continue with Google
      </button>

      <button
        type="button"
        className="
          w-full
          border
          border-slate-200
          rounded-xl
          py-3
          flex
          items-center
          justify-center
          gap-3
          hover:bg-slate-50
          transition-all
        "
      >
        <FaMicrosoft size={18} />

        Continue with Microsoft
      </button>

    </div>
  );
};

export default SocialLogin;
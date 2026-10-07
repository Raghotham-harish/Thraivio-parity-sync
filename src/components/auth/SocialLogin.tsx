import { FcGoogle } from "react-icons/fc";
import { FaMicrosoft } from "react-icons/fa";

// Google / Microsoft sign-in needs backend OAuth endpoints that don't exist
// yet (coaching-backend has email + password only). Shown disabled so the
// buttons don't look broken; enable once the backend routes ship.
const PROVIDERS = [
  { name: "Google", icon: <FcGoogle size={18} /> },
  { name: "Microsoft", icon: <FaMicrosoft size={16} className="text-muted-foreground" /> },
];

const SocialLogin = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {PROVIDERS.map(({ name, icon }) => (
        <button
          key={name}
          type="button"
          disabled
          title={`${name} sign-in is coming soon`}
          className="flex cursor-not-allowed flex-col items-center justify-center gap-0.5 rounded-xl border border-border py-2.5 text-sm font-semibold text-foreground opacity-70"
        >
          <span className="flex items-center gap-2">
            {icon}
            {name}
          </span>
          <span className="text-[11px] font-normal text-muted-foreground">Coming soon</span>
        </button>
      ))}
    </div>
  );
};

export default SocialLogin;

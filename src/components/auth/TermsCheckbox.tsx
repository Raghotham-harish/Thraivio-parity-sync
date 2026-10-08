import { Link } from "react-router-dom";
interface Props {
  checked: boolean;
  onChange: (
    value: boolean
  ) => void;
}

const TermsCheckbox = ({
  checked,
  onChange,
}: Props) => {
  return (
    <label className="flex items-start gap-3 cursor-pointer">

      <input
        type="checkbox"
        checked={checked}
        onChange={(e) =>
          onChange(
            e.target.checked
          )
        }
        className="mt-1 cursor-pointer accent-primary"
      />

      <span className="text-sm text-muted-foreground font-body">

        I agree to the{" "}
        <Link to="/terms" target="_blank" className="font-semibold text-primary hover:underline">Terms of Service</Link>{" "}
        and{" "}
        <Link to="/privacy" target="_blank" className="font-semibold text-primary hover:underline">Privacy Policy</Link>.

      </span>

    </label>
  );
};

export default TermsCheckbox;
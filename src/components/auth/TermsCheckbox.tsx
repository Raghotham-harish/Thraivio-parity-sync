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
    <label className="flex items-start gap-3">

      <input
        type="checkbox"
        checked={checked}
        onChange={(e) =>
          onChange(
            e.target.checked
          )
        }
        className="mt-1"
      />

      <span className="text-sm text-slate-600">

        I agree to the Terms of Service
        and Privacy Policy.

      </span>

    </label>
  );
};

export default TermsCheckbox;
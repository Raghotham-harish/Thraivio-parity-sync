interface Props {
  password: string;
}

const PasswordStrength = ({ password }: Props) => {
  const strength =
    password.length >= 8
      ? 100
      : password.length >= 6
      ? 70
      : password.length >= 4
      ? 40
      : 10;

  return (
    <div className="mt-3">
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <div
          style={{
            width: `${strength}%`,
          }}
          className="
            h-full
            bg-primary
            transition-all
          "
        />
      </div>

      <p className="text-xs text-muted-foreground mt-2">
        Password Strength
      </p>
    </div>
  );
};

export default PasswordStrength;
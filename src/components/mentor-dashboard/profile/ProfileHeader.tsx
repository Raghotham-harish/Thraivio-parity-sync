interface ProfileHeaderProps {
  mentorName: string;
}

const ProfileHeader = ({
  mentorName,
}: ProfileHeaderProps) => {
  return (
    <div>
      <div
        className="
          inline-flex
          items-center

          px-4
          py-2

          rounded-full

          bg-blue-50
          text-blue-700

          text-sm
          font-medium
        "
      >
        👤 Public Mentor Profile
      </div>

      <h1
        className="
          text-4xl
          font-bold
          mt-4
        "
      >
        {mentorName}
      </h1>

      <p
        className="
          text-slate-500
          mt-3
          max-w-2xl
        "
      >
        This is how students see your
        public mentor profile.
      </p>
    </div>
  );
};

export default ProfileHeader;
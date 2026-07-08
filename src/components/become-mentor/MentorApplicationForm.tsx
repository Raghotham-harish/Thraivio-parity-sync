import { useState } from "react";

const MentorApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
    company: "",
    location: "",
    experience: "",
    category: "",
    linkedin: "",
    portfolio: "",
    skills: "",
    bio: "",
  });

  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] =
  useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (
  e: React.FormEvent
) => {
  e.preventDefault();

  if (
    !formData.fullName ||
    !formData.email ||
    !formData.role ||
    !formData.category
  ) {
    alert(
      "Please fill all required fields."
    );
    return;
  }

  setIsSubmitting(true);

  try {
    console.log(
      "Mentor Application:",
      formData
    );

    await new Promise((resolve) =>
      setTimeout(resolve, 1500)
    );

    setSuccess(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      role: "",
      company: "",
      location: "",
      experience: "",
      category: "",
      linkedin: "",
      portfolio: "",
      skills: "",
      bio: "",
    });

    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section
      id="mentor-form"
      className="pb-20 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4">
  <div className="bg-white border border-slate-200 rounded-3xl p-8 lg:p-12 shadow-sm">

        <div className="text-center mb-12">

          <span
  className="
    bg-blue-50
border
border-blue-200
text-blue-700
    px-4
    py-2
    rounded-full
    text-sm
    font-semibold
  "
>
  Mentor Application
</span>

<h2 className="mt-5 text-3xl md:text-5xl font-bold">
  Apply To Become A Mentor
</h2>

<p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
  Join experienced mentors from top companies
  and help professionals accelerate their careers.
</p>

        </div>

        {success && (
          <div
            className="
              mb-8
              bg-green-50
border
border-green-200
              text-green-700
              p-4
              rounded-2xl
            "
          >
            Application submitted successfully. Our team will review your profile and contact you soon.
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-5 mb-8">

  <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-center">
    <h3 className="text-3xl font-bold text-blue-600">500+</h3>
    <p className="text-slate-500">Active Mentors</p>
  </div>

  <div className="bg-green-50 border border-green-100 rounded-2xl p-5 text-center">
    <h3 className="text-3xl font-bold text-green-600">48 Hrs</h3>
    <p className="text-slate-500">Review Time</p>
  </div>

  <div className="bg-purple-50 border border-purple-100 rounded-2xl p-5 text-center">
    <h3 className="text-3xl font-bold text-purple-600">10K+</h3>
    <p className="text-slate-500">Sessions Delivered</p>
  </div>

</div>
            
       <div className="flex flex-wrap justify-center gap-3 mb-8">

  <span
    className="
      bg-green-50
      text-green-700
      px-4
      py-2
      rounded-full
      text-sm
      font-medium
    "
  >
    ✓ 48 Hour Review
  </span>

  <span
    className="
      bg-blue-50
      text-blue-700
      px-4
      py-2
      rounded-full
      text-sm
      font-medium
    "
  >
    ✓ Flexible Schedule
  </span>

  <span
    className="
      bg-purple-50
      text-purple-700
      px-4
      py-2
      rounded-full
      text-sm
      font-medium
    "
  >
    ✓ Earn From Mentorship
  </span>

</div>
        <form
          onSubmit={handleSubmit}
          className="
            bg-white
              border
            border-slate-200
              rounded-3xl
              shadow-sm
              p-8
              hover:shadow-lg
              transition-all
              duration-300
              "
        >
          <div className="grid md:grid-cols-2 gap-8">

            <div>
              <label className="font-semibold text-slate-700">
                Full Name *
              </label>

                <input
                type="text"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="
w-full
mt-2
border
border-slate-200
bg-slate-50
rounded-xl
p-3
focus:outline-none
focus:ring-2
focus:ring-blue-500
focus:border-blue-500
transition
"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700">
                Email *
              </label>

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="
w-full
mt-2
border
border-slate-200
bg-slate-50
rounded-xl
p-3
focus:outline-none
focus:ring-2
focus:ring-blue-500
focus:border-blue-500
transition
"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700">
                Phone
              </label>

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="
w-full
mt-2
border
border-slate-200
bg-slate-50
rounded-xl
p-3
focus:outline-none
focus:ring-2
focus:ring-blue-500
focus:border-blue-500
transition
"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700">
                Current Role *
              </label>

              <input
                type="text"
                name="role"
                required
                value={formData.role}
                onChange={handleChange}
                className="
w-full
mt-2
border
border-slate-200
bg-slate-50
rounded-xl
p-3
focus:outline-none
focus:ring-2
focus:ring-blue-500
focus:border-blue-500
transition
"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700">
                Company
              </label>

              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="
w-full
mt-2
border
border-slate-200
bg-slate-50
rounded-xl
p-3
focus:outline-none
focus:ring-2
focus:ring-blue-500
focus:border-blue-500
transition
"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700">
                Location
              </label>

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="
w-full
mt-2
border
border-slate-200
bg-slate-50
rounded-xl
p-3
focus:outline-none
focus:ring-2
focus:ring-blue-500
focus:border-blue-500
transition
"
              />
            </div>

            <div>
              <label className="font-semibold text-slate-700">
                Experience
              </label>

              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="
w-full
mt-2
border
border-slate-200
bg-slate-50
rounded-xl
p-3
focus:outline-none
focus:ring-2
focus:ring-blue-500
focus:border-blue-500
transition
"
              >
                <option value="">
                  Select
                </option>

                <option>
                  0-2 Years
                </option>

                <option>
                  3-5 Years
                </option>

                <option>
                  5-10 Years
                </option>

                <option>
                  10+ Years
                </option>
              </select>
            </div>

            <div>
              <label className="font-semibold text-slate-700">
                Category *
              </label>

              <select
                name="category"
                required
                value={formData.category}
                onChange={handleChange}
                className="
w-full
mt-2
border
border-slate-200
bg-slate-50
rounded-xl
p-3
focus:outline-none
focus:ring-2
focus:ring-blue-500
focus:border-blue-500
transition
"
              >
                <option value="">
                  Select Category
                </option>

                <option>
                  Leadership
                </option>

                <option>
                  Product
                </option>

                <option>
                  Engineering
                </option>

                <option>
                  Startup
                </option>

                <option>
                  Career
                </option>

                <option>
                  Marketing
                </option>

                <option>
                  Design
                </option>

                <option>
                  AI & ML
                </option>
              </select>
            </div>

          </div>

          <div className="mt-6">

            <label className="font-semibold text-slate-700">
              Skills
            </label>

            <input
              type="text"
              name="skills"
              placeholder="Product Strategy, React, Leadership, AI, Marketing..."
              value={formData.skills}
              onChange={handleChange}
              className="
w-full
mt-2
border
border-slate-200
bg-slate-50
rounded-xl
p-3
focus:outline-none
focus:ring-2
focus:ring-blue-500
focus:border-blue-500
transition
"
            />

          </div>

          <div className="mt-6">

            <label className="font-semibold text-slate-700">
              LinkedIn Profile
            </label>

            <input
              type="url"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              className="
w-full
mt-2
border
border-slate-200
bg-slate-50
rounded-xl
p-3
focus:outline-none
focus:ring-2
focus:ring-blue-500
focus:border-blue-500
transition
"
            />

          </div>

          <div className="mt-6">

            <label className="font-semibold text-slate-700">
              Portfolio Website
            </label>

            <input
              type="url"
              name="portfolio"
              value={formData.portfolio}
              onChange={handleChange}
              className="
w-full
mt-2
border
border-slate-200
bg-slate-50
rounded-xl
p-3
focus:outline-none
focus:ring-2
focus:ring-blue-500
focus:border-blue-500
transition
"
            />

          </div>

          <div className="mt-6">

            <label className="font-semibold text-slate-700">
              Short Bio
            </label>

            <textarea
              rows={6}
              name="bio"
              placeholder="Tell us about your experience, achievements and how you can help mentees..."
              value={formData.bio}
              onChange={handleChange}
              className="
w-full
mt-2
border
border-slate-200
bg-slate-50
rounded-xl
p-3
focus:outline-none
focus:ring-2
focus:ring-blue-500
focus:border-blue-500
transition
"
            />

          </div>

          <button
  type="submit"
  disabled={isSubmitting}
  className="
    mt-8
    w-full
    bg-blue-600
    hover:bg-blue-700
    disabled:bg-blue-400
    text-white
    py-4
    rounded-xl
    font-semibold
    text-lg
    transition-all
duration-300
hover:-translate-y-1
hover:shadow-xl
  "
>
  {isSubmitting
    ? "Submitting Application..."
    : "Apply As Mentor"}

          </button>
        
          <p
  className="
    text-center
    text-sm
    text-slate-400
    mt-4
  "
>
  Our team typically reviews applications within
  48 hours.
</p>

<p className="text-center text-xs text-slate-400 mt-2">
  🔒 Your information is secure and will only be used for mentor verification.
</p>

        </form>

      </div>
      </div>
    </section>
  );
};

export default MentorApplicationForm;
import {
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
  Headphones,
} from "lucide-react";

import { useState } from "react";

const ContactSupport = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    field: keyof typeof form,
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(form);
  };

  return (
    <section className="mt-10">
      {/* Header */}

      <div
        className="
          flex
          flex-col

          gap-6

          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        <div>
          <div
            className="
              inline-flex
              items-center
              gap-2

              rounded-full

              bg-sky-50

              px-4
              py-2

              text-sm
              font-medium

              text-sky-700
            "
          >
            <Headphones size={16} />

            Contact Support
          </div>

          <h2
            className="
              mt-5

              text-3xl
              font-bold
            "
          >
            Get in Touch
          </h2>

          <p
            className="
              mt-3

              max-w-3xl

              text-slate-500
            "
          >
            Can't find the answer you're
            looking for? Send us a message
            and our support team will get
            back to you as soon as possible.
          </p>
        </div>
      </div>

      <div
        className="
          mt-8

          grid

          gap-8

          xl:grid-cols-3
        "
      >
        {/* Contact Form */}

        <div
          className="
            xl:col-span-2

            rounded-[32px]

            border
            border-slate-200

            bg-white

            p-8
          "
        >
          <h3
            className="
              text-2xl
              font-bold
            "
          >
            Send a Message
          </h3>

          <p
            className="
              mt-2

              text-slate-500
            "
          >
            Fill out the form below and our
            team will contact you shortly.
          </p>

          <div
            className="
              mt-8

              grid

              gap-6

              md:grid-cols-2
            "
          >
            <div>
              <label
                className="
                  mb-2

                  block

                  text-sm
                  font-medium
                "
              >
                Full Name
              </label>

              <input
                value={form.name}
                onChange={(e) =>
                  handleChange(
                    "name",
                    e.target.value
                  )
                }
                className="
                  w-full

                  rounded-2xl

                  border
                  border-slate-200

                  px-4
                  py-3.5

                  outline-none

                  focus:border-blue-500
                  focus:ring-2
                  focus:ring-blue-100
                "
              />
            </div>

            <div>
              <label
                className="
                  mb-2

                  block

                  text-sm
                  font-medium
                "
              >
                Email Address
              </label>

              <input
                type="email"
                value={form.email}
                onChange={(e) =>
                  handleChange(
                    "email",
                    e.target.value
                  )
                }
                className="
                  w-full

                  rounded-2xl

                  border
                  border-slate-200

                  px-4
                  py-3.5

                  outline-none

                  focus:border-blue-500
                  focus:ring-2
                  focus:ring-blue-100
                "
              />
            </div>

            <div className="md:col-span-2">
              <label
                className="
                  mb-2

                  block

                  text-sm
                  font-medium
                "
              >
                Subject
              </label>

              <input
                value={form.subject}
                onChange={(e) =>
                  handleChange(
                    "subject",
                    e.target.value
                  )
                }
                className="
                  w-full

                  rounded-2xl

                  border
                  border-slate-200

                  px-4
                  py-3.5

                  outline-none

                  focus:border-blue-500
                  focus:ring-2
                  focus:ring-blue-100
                "
              />
            </div>

            <div className="md:col-span-2">
              <label
                className="
                  mb-2

                  block

                  text-sm
                  font-medium
                "
              >
                Message
              </label>

              <textarea
                rows={7}
                value={form.message}
                onChange={(e) =>
                  handleChange(
                    "message",
                    e.target.value
                  )
                }
                className="
                  w-full

                  rounded-2xl

                  border
                  border-slate-200

                  px-4
                  py-4

                  outline-none

                  resize-none

                  focus:border-blue-500
                  focus:ring-2
                  focus:ring-blue-100
                "
              />
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="
              mt-8

              inline-flex
              items-center
              gap-2

              rounded-2xl

              bg-blue-600

              px-7
              py-3.5

              font-semibold

              text-white

              transition

              hover:bg-blue-700
            "
          >
            <Send size={18} />

            Send Message
          </button>
        </div>

        {/* Contact Info */}

        <div className="space-y-6">
          {/* Email */}

          <div
            className="
              rounded-[30px]

              border
              border-slate-200

              bg-white

              p-6
            "
          >
            <div
              className="
                flex

                h-14
                w-14

                items-center
                justify-center

                rounded-2xl

                bg-blue-50
              "
            >
              <Mail
                size={24}
                className="
                  text-blue-600
                "
              />
            </div>

            <h3
              className="
                mt-5

                text-xl
                font-bold
              "
            >
              Email Support
            </h3>

            <p
              className="
                mt-3

                text-slate-500
              "
            >
              support@coachcoaching.com
            </p>
          </div>

          {/* Phone */}

          <div
            className="
              rounded-[30px]

              border
              border-slate-200

              bg-white

              p-6
            "
          >
            <div
              className="
                flex

                h-14
                w-14

                items-center
                justify-center

                rounded-2xl

                bg-green-50
              "
            >
              <Phone
                size={24}
                className="
                  text-green-600
                "
              />
            </div>

            <h3
              className="
                mt-5

                text-xl
                font-bold
              "
            >
              Phone
            </h3>

            <p
              className="
                mt-3

                text-slate-500
              "
            >
              +91 98765 43210
            </p>
          </div>

          {/* Office */}

          <div
            className="
              rounded-[30px]

              border
              border-slate-200

              bg-white

              p-6
            "
          >
            <div
              className="
                flex

                h-14
                w-14

                items-center
                justify-center

                rounded-2xl

                bg-violet-50
              "
            >
              <MapPin
                size={24}
                className="
                  text-violet-600
                "
              />
            </div>

            <h3
              className="
                mt-5

                text-xl
                font-bold
              "
            >
              Office
            </h3>

            <p
              className="
                mt-3

                text-slate-500
              "
            >
              Bengaluru,
              Karnataka, India
            </p>
          </div>

          {/* Hours */}

          <div
            className="
              rounded-[30px]

              bg-gradient-to-r
              from-blue-600
              to-indigo-600

              p-6

              text-white
            "
          >
            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <Clock3 size={22} />

              <h3
                className="
                  text-xl
                  font-bold
                "
              >
                Support Hours
              </h3>
            </div>

            <div
              className="
                mt-6

                space-y-3
              "
            >
              <div className="flex justify-between">
                <span>Monday - Friday</span>

                <span>9:00 AM - 7:00 PM</span>
              </div>

              <div className="flex justify-between">
                <span>Saturday</span>

                <span>10:00 AM - 4:00 PM</span>
              </div>

              <div className="flex justify-between">
                <span>Sunday</span>

                <span>Closed</span>
              </div>
            </div>

            <div
              className="
                mt-6

                rounded-2xl

                bg-white/10

                p-4
              "
            >
              <p className="text-blue-100">
                Average response time
              </p>

              <h4
                className="
                  mt-2

                  text-2xl
                  font-bold
                "
              >
                Under 2 Hours
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSupport;
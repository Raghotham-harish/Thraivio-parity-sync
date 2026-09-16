import {
  Award,
  Building2,
  CalendarDays,
  GraduationCap,
  ShieldCheck,
  User,
  X,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import type {
  AdminSession,
} from "@/types/admin-session";

interface CertificateDialogProps {
  open: boolean;

  session: AdminSession | null;

  onClose: () => void;

  onIssue: (
    session: AdminSession
  ) => void;
}

const CertificateDialog = ({
  open,
  session,
  onClose,
  onIssue,
}: CertificateDialogProps) => {

  const [
    certificateId,
    setCertificateId,
  ] = useState("");

  useEffect(() => {

    if (!session) return;

    setCertificateId(
      session.certificateId ??
      `CERT-${session.id}`
    );

  }, [session]);

  if (!open || !session)
    return null;

  return (

    <div
      className="
        fixed
        inset-0
        z-50

        flex
        items-center
        justify-center

        bg-black/60
        backdrop-blur-sm

        p-5
      "
    >

      <div
        className="
          flex
          max-h-[92vh]
          w-full
          max-w-6xl
          flex-col

          overflow-hidden

          rounded-2xl

          bg-card
        "
      >

        {/* Header */}

        <div
          className="
            flex
            items-center
            justify-between

            bg-gradient-to-r
            from-amber-500
            via-yellow-500
            to-orange-500

            p-8

            text-white
          "
        >

          <div>

            <div
              className="
                mb-3

                inline-flex
                items-center
                gap-2

                rounded-full

                bg-card/20

                px-4
                py-2

                text-sm
              "
            >

              <Award size={18} />

              Certificate Manager

            </div>

            <h2
              className="
                text-3xl
                font-bold
              "
            >
              Issue Certificate
            </h2>

            <p
              className="
                mt-3

                text-yellow-100
              "
            >
              Generate completion certificates
              for successfully completed
              mentorship sessions.
            </p>

          </div>

          <button
            onClick={onClose}
            className="
              flex
              h-11
              w-11

              items-center
              justify-center

              rounded-full

              bg-card/20

              transition

              hover:bg-card/30
            "
          >
            <X size={20}/>
          </button>

        </div>

        {/* Body */}

        <div
          className="
            flex-1

            overflow-y-auto

            space-y-8

            p-8
          "
        >

          {/* Certificate Summary */}

          <div
            className="
              rounded-2xl

              border
              border-amber-100

              bg-amber-50

              p-6
            "
          >

            <h3
              className="
                mb-6

                text-xl
                font-bold
              "
            >
              Certificate Summary
            </h3>

            <div
              className="
                grid
                gap-6

                lg:grid-cols-2
              "
            >

              {/* Mentor */}

              <div
                className="
                  flex
                  items-center
                  gap-5

                  rounded-2xl

                  bg-card

                  p-5
                "
              >

                <img
                  src={session.mentorImage}
                  alt={session.mentorName}
                  className="
                    h-20
                    w-20

                    rounded-2xl

                    object-cover
                  "
                />

                <div>

                  <h4
                    className="
                      text-xl
                      font-bold
                    "
                  >
                    {session.mentorName}
                  </h4>

                  <p
                    className="
                      mt-1

                      text-muted-foreground
                    "
                  >
                    {session.mentorRole}
                  </p>

                  <div
                    className="
                      mt-2

                      flex
                      items-center
                      gap-2

                      text-sm
                      text-muted-foreground
                    "
                  >

                    <Building2 size={15}/>

                    {session.mentorCompany}

                  </div>

                </div>

              </div>

              {/* Student */}

              <div
                className="
                  flex
                  items-center
                  gap-5

                  rounded-2xl

                  bg-card

                  p-5
                "
              >

                <img
                  src={session.studentImage}
                  alt={session.studentName}
                  className="
                    h-20
                    w-20

                    rounded-2xl

                    object-cover
                  "
                />

                <div>

                  <h4
                    className="
                      text-xl
                      font-bold
                    "
                  >
                    {session.studentName}
                  </h4>

                  <p
                    className="
                      mt-1

                      text-muted-foreground
                    "
                  >
                    {session.studentEmail}
                  </p>

                </div>

              </div>

            </div>

            {/* Session Information */}

            <div
              className="
                mt-6

                grid
                gap-5

                md:grid-cols-4
              "
            >

              <InfoCard
                icon={
                  <GraduationCap
                    size={18}
                  />
                }
                title="Program"
                value={
                  session.programTitle
                }
              />

              <InfoCard
                icon={
                  <CalendarDays
                    size={18}
                  />
                }
                title="Completion Date"
                value={session.date}
              />

              <InfoCard
                icon={
                  <ShieldCheck
                    size={18}
                  />
                }
                title="Certificate ID"
                value={certificateId}
              />

              <InfoCard
                icon={
                  <User
                    size={18}
                  />
                }
                title="Student"
                value={
                  session.studentName
                }
              />

            </div>

          </div>
                    {/* Certificate Configuration */}

          <div
            className="
              grid
              gap-6

              xl:grid-cols-2
            "
          >

            {/* Left */}

            <div
              className="
                rounded-2xl

                border
                border-border

                bg-card

                p-6
              "
            >

              <h3
                className="
                  mb-6

                  text-xl
                  font-bold
                "
              >
                Certificate Settings
              </h3>

              {/* Certificate ID */}

              <div>

                <label
                  className="
                    mb-2

                    block

                    text-sm
                    font-semibold
                  "
                >
                  Certificate ID
                </label>

                <input
                  value={certificateId}
                  onChange={(e)=>
                    setCertificateId(
                      e.target.value
                    )
                  }
                  className="
                    h-12
                    w-full

                    rounded-2xl

                    border
                    border-border

                    px-4

                    outline-none

                    focus:border-amber-500
                    focus:ring-2
                    focus:ring-amber-100
                  "
                />

              </div>

              {/* Issue Status */}

              <div className="mt-6">

                <label
                  className="
                    mb-3

                    block

                    text-sm
                    font-semibold
                  "
                >
                  Certificate Status
                </label>

                <div
                  className="
                    grid
                    grid-cols-2

                    gap-4
                  "
                >

                  <button
                    type="button"
                    className="
                      rounded-2xl

                      border-2
                      border-amber-500

                      bg-amber-50

                      p-5

                      text-center
                    "
                  >

                    <Award
                      size={28}
                      className="
                        mx-auto

                        text-amber-600
                      "
                    />

                    <h4
                      className="
                        mt-3

                        font-bold
                      "
                    >
                      Ready To Issue
                    </h4>

                    <p
                      className="
                        mt-1

                        text-xs
                        text-muted-foreground
                      "
                    >
                      Student completed
                      session successfully
                    </p>

                  </button>

                  <button
                    type="button"
                    className="
                      rounded-2xl

                      border

                      border-border

                      p-5

                      text-center
                    "
                  >

                    <ShieldCheck
                      size={28}
                      className="
                        mx-auto

                        text-[#0F8F65]
                      "
                    />

                    <h4
                      className="
                        mt-3

                        font-bold
                      "
                    >
                      Issued
                    </h4>

                    <p
                      className="
                        mt-1

                        text-xs
                        text-muted-foreground
                      "
                    >
                      Already shared with
                      the student
                    </p>

                  </button>

                </div>

              </div>

              {/* Delivery */}

              <div className="mt-8">

                <label
                  className="
                    mb-3

                    block

                    text-sm
                    font-semibold
                  "
                >
                  Delivery Options
                </label>

                <div className="space-y-4">

                  <label
                    className="
                      flex
                      items-center
                      justify-between

                      rounded-2xl

                      border

                      p-4
                    "
                  >

                    <div>

                      <h4
                        className="
                          font-semibold
                        "
                      >
                        Email Certificate
                      </h4>

                      <p
                        className="
                          text-sm
                          text-muted-foreground
                        "
                      >
                        Send certificate
                        directly to student
                      </p>

                    </div>

                    <input
                      type="checkbox"
                      defaultChecked
                      className="
                        h-5
                        w-5
                      "
                    />

                  </label>

                  <label
                    className="
                      flex
                      items-center
                      justify-between

                      rounded-2xl

                      border

                      p-4
                    "
                  >

                    <div>

                      <h4
                        className="
                          font-semibold
                        "
                      >
                        Download PDF
                      </h4>

                      <p
                        className="
                          text-sm
                          text-muted-foreground
                        "
                      >
                        Generate printable
                        certificate copy
                      </p>

                    </div>

                    <input
                      type="checkbox"
                      defaultChecked
                      className="
                        h-5
                        w-5
                      "
                    />

                  </label>

                </div>

              </div>

            </div>

            {/* Right */}

            <div
              className="
                rounded-2xl

                border
                border-amber-200

                bg-gradient-to-br
                from-amber-50
                to-yellow-50

                p-8
              "
            >

              <div
                className="
                  rounded-[28px]

                  border-[10px]
                  border-amber-200

                  bg-card

                  p-8

                  text-center
                "
              >

                <Award
                  size={64}
                  className="
                    mx-auto

                    text-amber-500
                  "
                />

                <p
                  className="
                    mt-6

                    text-sm

                    uppercase

                    tracking-[6px]

                    text-muted-foreground
                  "
                >
                  Certificate of Completion
                </p>

                <h2
                  className="
                    mt-6

                    text-4xl
                    font-bold
                  "
                >
                  {session.studentName}
                </h2>

                <p
                  className="
                    mt-6

                    text-muted-foreground

                    leading-7
                  "
                >
                  has successfully completed

                  <span className="font-bold">
                    {" "}
                    {session.programTitle}
                  </span>

                  under the mentorship of

                  <span className="font-bold">
                    {" "}
                    {session.mentorName}
                  </span>.
                </p>

                <div
                  className="
                    mt-8

                    flex
                    justify-center
                    gap-10
                  "
                >

                  <div>

                    <p
                      className="
                        text-xs
                        text-muted-foreground
                      "
                    >
                      Date
                    </p>

                    <h4
                      className="
                        mt-2

                        font-bold
                      "
                    >
                      {session.date}
                    </h4>

                  </div>

                  <div>

                    <p
                      className="
                        text-xs
                        text-muted-foreground
                      "
                    >
                      Certificate ID
                    </p>

                    <h4
                      className="
                        mt-2

                        font-bold
                      "
                    >
                      {certificateId}
                    </h4>

                  </div>

                </div>

              </div>

            </div>

          </div>
                    {/* Certificate Verification */}

          <div
            className="
              grid
              gap-6

              xl:grid-cols-2
            "
          >

            {/* Left */}

            <div
              className="
                rounded-2xl

                border
                border-border

                bg-card

                p-6
              "
            >

              <h3
                className="
                  mb-6

                  text-xl
                  font-bold
                "
              >
                Verification Details
              </h3>

              {/* Verification URL */}

              <div>

                <label
                  className="
                    mb-2

                    block

                    text-sm
                    font-semibold
                  "
                >
                  Verification URL
                </label>

                <input
                  readOnly
                  value={`https://coachcoaching.com/verify/${certificateId}`}
                  className="
                    h-12

                    w-full

                    rounded-2xl

                    border
                    border-border

                    bg-secondary

                    px-4
                  "
                />

              </div>

              {/* QR */}

              <div
                className="
                  mt-8

                  rounded-2xl

                  border-2
                  border-dashed
                  border-border

                  bg-secondary

                  p-8

                  text-center
                "
              >

                <div
                  className="
                    mx-auto

                    flex
                    h-36
                    w-36

                    items-center
                    justify-center

                    rounded-2xl

                    bg-card

                    text-muted-foreground
                  "
                >
                  QR CODE
                </div>

                <h4
                  className="
                    mt-5

                    font-semibold
                  "
                >
                  Certificate QR Verification
                </h4>

                <p
                  className="
                    mt-2

                    text-sm
                    text-muted-foreground
                  "
                >
                  QR generation will be connected
                  with backend after Firebase/API
                  integration.
                </p>

              </div>

              {/* Security */}

              <div
                className="
                  mt-8

                  rounded-2xl

                  bg-green-50

                  p-5
                "
              >

                <h4
                  className="
                    font-semibold

                    text-[#065F46]
                  "
                >
                  Security Features
                </h4>

                <ul
                  className="
                    mt-4

                    space-y-3

                    text-sm
                    text-[#065F46]
                  "
                >
                  <li>
                    ✓ Unique Certificate ID
                  </li>

                  <li>
                    ✓ QR Verification
                  </li>

                  <li>
                    ✓ Digital Signature Ready
                  </li>

                  <li>
                    ✓ Blockchain Ready Structure
                  </li>

                </ul>

              </div>

            </div>

            {/* Right */}

            <div
              className="
                rounded-2xl

                border
                border-border

                bg-card

                p-6
              "
            >

              <h3
                className="
                  mb-6

                  text-xl
                  font-bold
                "
              >
                Admin Notes
              </h3>

              {/* Notes */}

              <textarea
                rows={8}
                placeholder="
Certificate remarks...

Completion verified
Attendance verified
Mentor approved
Additional internal notes..."
                className="
                  w-full

                  resize-none

                  rounded-2xl

                  border
                  border-border

                  p-4

                  outline-none

                  focus:border-amber-500
                  focus:ring-2
                  focus:ring-amber-100
                "
              />

              {/* Checklist */}

              <div
                className="
                  mt-8

                  rounded-2xl

                  bg-secondary

                  p-5
                "
              >

                <h4
                  className="
                    mb-4

                    font-semibold
                  "
                >
                  Certificate Checklist
                </h4>

                <div className="space-y-3">

                  <ChecklistItem
                    checked
                    title="Session Completed"
                  />

                  <ChecklistItem
                    checked
                    title="Attendance Verified"
                  />

                  <ChecklistItem
                    checked
                    title="Mentor Approved"
                  />

                  <ChecklistItem
                    checked={
                      certificateId !== ""
                    }
                    title="Certificate Generated"
                  />

                  <ChecklistItem
                    checked
                    title="Ready For Issue"
                  />

                </div>

              </div>

              {/* Info */}

              <div
                className="
                  mt-6

                  rounded-2xl

                  bg-amber-50

                  p-5
                "
              >

                <h4
                  className="
                    font-semibold

                    text-[#B45309]
                  "
                >
                  Certificate Workflow
                </h4>

                <p
                  className="
                    mt-3

                    text-sm

                    leading-6

                    text-[#B45309]
                  "
                >
                  After clicking
                  <strong>
                    {" "}Issue Certificate
                  </strong>
                  , the certificate can
                  automatically:

                  <br /><br />

                  • Generate PDF

                  <br />

                  • Upload to Firebase Storage

                  <br />

                  • Save certificate record

                  <br />

                  • Email student

                  <br />

                  • Enable QR verification

                  <br />

                  • Show inside Student Dashboard

                </p>

              </div>

            </div>

          </div>
                    {/* Footer */}

          <div
            className="
              sticky
              bottom-0

              border-t
              border-border

              bg-card

              pt-6
            "
          >
            <div
              className="
                flex
                flex-col-reverse

                gap-4

                sm:flex-row
                sm:justify-end
              "
            >

              <button
                onClick={onClose}
                className="
                  rounded-2xl

                  border
                  border-border

                  px-8
                  py-3.5

                  font-semibold

                  transition

                  hover:bg-secondary
                "
              >
                Cancel
              </button>

              <button
                onClick={() => {

                  if (
                    certificateId.trim() === ""
                  ) {

                    alert(
                      "Certificate ID is required."
                    );

                    return;

                  }

                  onIssue({
                    ...session,

                    certificateIssued: true,

                    certificateId,

                    updatedAt:
                      new Date()
                        .toISOString()
                        .split("T")[0],
                  });

                  onClose();

                }}
                className="
                  rounded-2xl

                  bg-gradient-to-r
                  from-amber-500
                  via-yellow-500
                  to-orange-500

                  px-10
                  py-3.5

                  font-semibold

                  text-white

                  shadow-lg

                  transition-all

                  hover:scale-[1.02]
                  hover:shadow-xl
                "
              >
                Issue Certificate
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

/* -------------------------------- */
/* Helper Components */
/* -------------------------------- */

function InfoCard({
  icon,
  title,
  value,
}:{
  icon: React.ReactNode;
  title:string;
  value:string;
}){

  return(

    <div
      className="
        rounded-2xl

        bg-card

        p-5
      "
    >

      <div className="text-amber-600">
        {icon}
      </div>

      <p
        className="
          mt-3

          text-sm
          text-muted-foreground
        "
      >
        {title}
      </p>

      <h4
        className="
          mt-1

          font-semibold
          break-all
        "
      >
        {value}
      </h4>

    </div>

  );

}

function ChecklistItem({
  checked,
  title,
}:{
  checked:boolean;
  title:string;
}){

  return(

    <div
      className="
        flex
        items-center
        justify-between

        rounded-xl

        bg-card

        p-3
      "
    >

      <span
        className="
          text-sm
          font-medium
        "
      >
        {title}
      </span>

      <div
        className={`
          flex
          h-8
          w-8

          items-center
          justify-center

          rounded-full

          ${
            checked
              ? "bg-[#ECFDF5] text-[#0F8F65]"
              : "bg-secondary text-muted-foreground"
          }
        `}
      >
        ✓
      </div>

    </div>

  );

}

export default CertificateDialog;
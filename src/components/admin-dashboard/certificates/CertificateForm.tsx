import {
  useEffect,
  useState,
} from "react";

import {
  Award,
  CalendarDays,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";

import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import type {
  AdminCertificate,
} from "@/types/admin-certificate";
import { Button } from "@/components/ui/button";

interface Option {
  label: string;

  value: string;
}

interface CertificateFormProps {
  certificate?: AdminCertificate | null;

  students: Option[];

  mentors: Option[];

  programs: Option[];

  onSubmit: (
    certificate: AdminCertificate
  ) => void;
}

const defaultForm: AdminCertificate = {
  id: "",

  title: "",

  category: "Program",

  programTitle: "",

  studentId: "",
  studentName: "",
  studentEmail: "",
  studentImage: "",

  mentorId: "",
  mentorName: "",
  mentorRole: "",
  mentorCompany: "",
  mentorImage: "",

  certificateNumber: "",
  credentialId: "",

  issueDate: "",
  completionDate: "",

  duration: "",

  grade: "",
  score: "",

  skills: [],

  verificationUrl: "",
  verificationStatus: "unverified",

  status: "pending",

  downloadCount: 0,
  viewCount: 0,

  updatedAt: "",

  notes: "",
  
  description: "",
  qrCode: "",
  certificateUrl: "",
  issuedBy: "",
  createdAt: "",
};

const CertificateForm = ({
  certificate,
  students,
  mentors,
  programs,
  onSubmit,
}: CertificateFormProps) => {
  const [formData, setFormData] =
    useState<AdminCertificate>(
      defaultForm
    );

  const [
    skillsInput,
    setSkillsInput,
  ] = useState("");

  useEffect(() => {
    if (certificate) {
      setFormData(certificate);

      setSkillsInput(
        certificate.skills.join(", ")
      );
    } else {
      setFormData(defaultForm);

      setSkillsInput("");
    }
  }, [certificate]);

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    onSubmit({
      ...formData,

      skills: skillsInput
        .split(",")
        .map((item) =>
          item.trim()
        )
        .filter(Boolean),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8"
    >
      {/* Student & Mentor */}

      <section className="grid gap-6 lg:grid-cols-2">
                {/* Student */}

        <div className="space-y-2">

          <Label>
            Student
          </Label>

          <Select
            value={formData.studentId}
            onValueChange={(value) =>
              setFormData({
                ...formData,
                studentId: value,
              })
            }
          >
            <SelectTrigger className="h-12 rounded-2xl">

              <SelectValue placeholder="Select Student" />

            </SelectTrigger>

            <SelectContent>

              {students.map(
                (student) => (
                  <SelectItem
                    key={student.value}
                    value={student.value}
                  >
                    {student.label}
                  </SelectItem>
                )
              )}

            </SelectContent>

          </Select>

        </div>

        {/* Mentor */}

        <div className="space-y-2">

          <Label>
            Mentor
          </Label>

          <Select
            value={formData.mentorId}
            onValueChange={(value) =>
              setFormData({
                ...formData,
                mentorId: value,
              })
            }
          >
            <SelectTrigger className="h-12 rounded-2xl">

              <SelectValue placeholder="Select Mentor" />

            </SelectTrigger>

            <SelectContent>

              {mentors.map(
                (mentor) => (
                  <SelectItem
                    key={mentor.value}
                    value={mentor.value}
                  >
                    {mentor.label}
                  </SelectItem>
                )
              )}

            </SelectContent>

          </Select>

        </div>

      </section>

      {/* Program Details */}

      <section className="grid gap-6 lg:grid-cols-2">

        {/* Program */}

        <div className="space-y-2">

          <Label>
            Program / Event / Session
          </Label>

          <Select
            value={formData.programTitle}
            onValueChange={(value) =>
              setFormData({
                ...formData,
                programTitle: value,
              })
            }
          >
            <SelectTrigger className="h-12 rounded-2xl">

              <SelectValue placeholder="Select Program" />

            </SelectTrigger>

            <SelectContent>

              {programs.map(
                (program) => (
                  <SelectItem
                    key={program.value}
                    value={program.value}
                  >
                    {program.label}
                  </SelectItem>
                )
              )}

            </SelectContent>

          </Select>

        </div>

        {/* Category */}

        <div className="space-y-2">

          <Label>
            Category
          </Label>

          <Select
            value={formData.category}
            onValueChange={(value) =>
              setFormData({
                ...formData,
                category:
                  value as AdminCertificate["category"],
              })
            }
          >
            <SelectTrigger className="h-12 rounded-2xl">

              <SelectValue />

            </SelectTrigger>

            <SelectContent>

              <SelectItem value="Program">
                Program
              </SelectItem>

              <SelectItem value="Event">
                Event
              </SelectItem>

              <SelectItem value="Session">
                Session
              </SelectItem>

            </SelectContent>

          </Select>

        </div>

      </section>

      {/* Certificate */}

      <section
        className="
          rounded-2xl
          border
          bg-card
          p-6
          shadow-sm
        "
      >
        <div className="mb-6 flex items-center gap-3">

          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-[#FFFBEB]
            "
          >
            <Award className="h-6 w-6 text-amber-600" />
          </div>

          <div>

            <h3 className="text-xl font-bold">
              Certificate Information
            </h3>

            <p className="text-sm text-muted-foreground">
              Basic certificate details.
            </p>

          </div>

        </div>

        <div className="grid gap-6 lg:grid-cols-2">

          <div className="space-y-2">

            <Label>
              Certificate Title
            </Label>

            <Input
              value={formData.title}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  title:
                    e.target.value,
                })
              }
              placeholder="Certificate Title"
              className="h-12 rounded-2xl"
            />

          </div>

          <div className="space-y-2">

            <Label>
              Certificate Number
            </Label>

            <Input
              value={
                formData.certificateNumber
              }
              onChange={(e) =>
                setFormData({
                  ...formData,
                  certificateNumber:
                    e.target.value,
                })
              }
              placeholder="CERT-2026-001"
              className="h-12 rounded-2xl"
            />

          </div>

        </div>

      </section>
            {/* Verification & Dates */}

      <section
        className="
          rounded-2xl
          border
          bg-card
          p-6
          shadow-sm
        "
      >
        <div className="mb-6 flex items-center gap-3">

          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-[#EFF6FF]
            "
          >
            <ShieldCheck className="h-6 w-6 text-primary" />
          </div>

          <div>

            <h3 className="text-xl font-bold">
              Verification Details
            </h3>

            <p className="text-sm text-muted-foreground">
              Configure verification, credential and completion information.
            </p>

          </div>

        </div>

        <div className="grid gap-6 lg:grid-cols-2">

          {/* Credential ID */}

          <div className="space-y-2">

            <Label>
              Credential ID
            </Label>

            <Input
              value={formData.credentialId}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  credentialId:
                    e.target.value,
                })
              }
              placeholder="CRD-9A82X-2026"
              className="h-12 rounded-2xl"
            />

          </div>

          {/* Verification URL */}

          <div className="space-y-2">

            <Label>
              Verification URL
            </Label>

            <Input
              value={formData.verificationUrl}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  verificationUrl:
                    e.target.value,
                })
              }
              placeholder="https://thraivio.com/verify/..."
              className="h-12 rounded-2xl"
            />

          </div>

          {/* Issue Date */}

          <div className="space-y-2">

            <Label>
              Issue Date
            </Label>

            <div className="relative">

              <CalendarDays
                className="
                  absolute
                  left-4
                  top-1/2
                  h-4
                  w-4
                  -translate-y-1/2
                  text-muted-foreground
                "
              />

              <Input
                type="date"
                value={formData.issueDate}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    issueDate:
                      e.target.value,
                  })
                }
                className="h-12 rounded-2xl pl-11"
              />

            </div>

          </div>

          {/* Completion Date */}

          <div className="space-y-2">

            <Label>
              Completion Date
            </Label>

            <div className="relative">

              <CalendarDays
                className="
                  absolute
                  left-4
                  top-1/2
                  h-4
                  w-4
                  -translate-y-1/2
                  text-muted-foreground
                "
              />

              <Input
                type="date"
                value={formData.completionDate}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    completionDate:
                      e.target.value,
                  })
                }
                className="h-12 rounded-2xl pl-11"
              />

            </div>

          </div>

          {/* Grade */}

          <div className="space-y-2">

            <Label>
              Grade
            </Label>

            <Input
              value={formData.grade}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  grade:
                    e.target.value,
                })
              }
              placeholder="A+"
              className="h-12 rounded-2xl"
            />

          </div>

          {/* Score */}

          <div className="space-y-2">

            <Label>
              Score
            </Label>

            <Input
              value={formData.score}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  score:
                    e.target.value,
                })
              }
              placeholder="98%"
              className="h-12 rounded-2xl"
            />

          </div>

        </div>

      </section>
            {/* Skills & Status */}

      <section
        className="
          rounded-2xl
          border
          bg-card
          p-6
          shadow-sm
        "
      >
        <div className="mb-6 flex items-center gap-3">

          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-[#ECFDF5]
            "
          >
            <GraduationCap className="h-6 w-6 text-[#0F8F65]" />
          </div>

          <div>

            <h3 className="text-xl font-bold">
              Skills & Certificate Status
            </h3>

            <p className="text-sm text-muted-foreground">
              Configure earned skills, certificate visibility and verification.
            </p>

          </div>

        </div>

        <div className="grid gap-6 lg:grid-cols-2">

          {/* Skills */}

          <div className="space-y-2 lg:col-span-2">

            <Label>
              Skills
            </Label>

            <Textarea
              rows={4}
              value={skillsInput}
              onChange={(e) =>
                setSkillsInput(
                  e.target.value
                )
              }
              placeholder="React, Leadership, Product Management, Communication"
              className="rounded-2xl resize-none"
            />

            <p className="text-xs text-muted-foreground">
              Separate multiple skills using commas (,)
            </p>

          </div>

          {/* Certificate Status */}

          <div className="space-y-2">

            <Label>
              Certificate Status
            </Label>

            <Select
              value={formData.status}
              onValueChange={(value) =>
                setFormData({
                  ...formData,
                  status:
                    value as AdminCertificate["status"],
                })
              }
            >
              <SelectTrigger className="h-12 rounded-2xl">

                <SelectValue />

              </SelectTrigger>

              <SelectContent>

                <SelectItem value="pending">
                  Pending
                </SelectItem>

                <SelectItem value="issued">
                  Issued
                </SelectItem>

                <SelectItem value="revoked">
                  Revoked
                </SelectItem>

                <SelectItem value="expired">
                  Expired
                </SelectItem>

              </SelectContent>

            </Select>

          </div>

          {/* Verification Status */}

          <div className="space-y-2">

            <Label>
              Verification Status
            </Label>

            <Select
              value={
                formData.verificationStatus
              }
              onValueChange={(value) =>
                setFormData({
                  ...formData,
                  verificationStatus:
                    value as AdminCertificate["verificationStatus"],
                })
              }
            >
              <SelectTrigger className="h-12 rounded-2xl">

                <SelectValue />

              </SelectTrigger>

              <SelectContent>

                <SelectItem value="verified">
                  Verified
                </SelectItem>

                <SelectItem value="unverified">
                  Unverified
                </SelectItem>

              </SelectContent>

            </Select>

          </div>

          {/* Notes */}

          <div className="space-y-2 lg:col-span-2">

            <Label>
              Admin Notes
            </Label>

            <Textarea
              rows={5}
              value={
                formData.notes ?? ""
              }
              onChange={(e) =>
                setFormData({
                  ...formData,
                  notes:
                    e.target.value,
                })
              }
              placeholder="Internal notes for administrators..."
              className="rounded-2xl resize-none"
            />

          </div>

        </div>

      </section>
            {/* Preview */}

      <section
        className="
          rounded-2xl
          border
          
          bg-[#F59E0B]
          
          
          p-8
          text-white
          shadow-lg
        "
      >
        <div
          className="
            flex
            flex-col
            gap-8

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

                bg-card/15

                px-4
                py-2

                text-sm

                backdrop-blur
              "
            >
              <Award className="h-4 w-4" />

              Certificate Preview

            </div>

            <h3 className="mt-5 text-3xl font-bold">
              {formData.title ||
                "Certificate Title"}
            </h3>

            <p
              className="
                mt-4
                max-w-2xl
                text-amber-100
                leading-8
              "
            >
              Review the certificate information
              before saving. Once issued, learners
              will be able to download and verify
              this certificate using its credential
              ID and verification URL.
            </p>

            <div
              className="
                mt-6
                flex
                flex-wrap
                gap-3
              "
            >
              <span
                className="
                  rounded-full
                  bg-card/15
                  px-4
                  py-2
                  text-sm
                "
              >
                {formData.category}
              </span>

              <span
                className="
                  rounded-full
                  bg-card/15
                  px-4
                  py-2
                  text-sm
                "
              >
                {formData.status}
              </span>

              <span
                className="
                  rounded-full
                  bg-card/15
                  px-4
                  py-2
                  text-sm
                "
              >
                {
                  formData.verificationStatus
                }
              </span>

            </div>

          </div>

          <div
            className="
              w-full
              max-w-sm

              rounded-2xl

              bg-card/10

              p-6

              backdrop-blur
            "
          >
            <div className="space-y-4">

              <div className="flex items-center justify-between">

                <span className="text-amber-100">
                  Student
                </span>

                <span className="font-semibold">
                  {formData.studentName ||
                    "Not Selected"}
                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-amber-100">
                  Mentor
                </span>

                <span className="font-semibold">
                  {formData.mentorName ||
                    "Not Selected"}
                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-amber-100">
                  Program
                </span>

                <span className="font-semibold">
                  {formData.programTitle ||
                    "Not Selected"}
                </span>

              </div>

              <div className="flex items-center justify-between">

                <span className="text-amber-100">
                  Score
                </span>

                <span className="font-semibold">
                  {formData.score || "--"}
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Footer */}

      <div
        className="
          sticky
          bottom-0

          flex
          flex-wrap
          items-center
          justify-end
          gap-4

          border-t

          bg-card

          py-6
        "
      >
        <Button
          type="button"
          variant="outline"
          className="
            h-12
            rounded-2xl
            px-8
          "
          onClick={() => {
            setFormData(
              certificate ??
                defaultForm
            );

            setSkillsInput(
              certificate
                ? certificate.skills.join(
                    ", "
                  )
                : ""
            );
          }}
        >
          Reset
        </Button>

        <Button
          type="submit"
          className="
            h-12
            rounded-2xl
            px-8
          "
        >
          {certificate
            ? "Update Certificate"
            : "Issue Certificate"}
        </Button>

      </div>

    </form>
  );
};

export default CertificateForm;
import { memo } from "react";

import {
  Search,
  RefreshCw,
  LayoutGrid,
  List,
  CalendarDays,
  Download,
} from "lucide-react";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import type {
  CertificateView,
} from "@/types/admin-certificate";

interface Option {
  label: string;

  value: string;
}

interface CertificatesToolbarProps {
  search: string;

  onSearchChange: (
    value: string
  ) => void;

  status: string;

  onStatusChange: (
    value: string
  ) => void;

  category: string;

  onCategoryChange: (
    value: string
  ) => void;

  mentor: string;

  onMentorChange: (
    value: string
  ) => void;

  student: string;

onStudentChange: (
  value: string
) => void;


  verification: string;

  onVerificationChange: (
    value: string
  ) => void;

  date: string;

  onDateChange: (
    value: string
  ) => void;

  statusOptions: Option[];

  categoryOptions: Option[];

  mentorOptions: Option[];

  studentOptions: Option[];

  verificationOptions: Option[];

  view: CertificateView;

  onViewChange: (
    view: CertificateView
  ) => void;

  onRefresh: () => void;

  onExport: () => void;
}

const SelectFilter = ({
  value,
  placeholder,
  options,
  onChange,
}: {
  value: string;

  placeholder: string;

  options: Option[];

  onChange: (
    value: string
  ) => void;
}) => (
  <Select
    value={value}
    onValueChange={onChange}
  >
    <SelectTrigger
      className="
        h-11
        rounded-xl
      "
    >
      <SelectValue
        placeholder={placeholder}
      />
    </SelectTrigger>

    <SelectContent>

      {options.map((item) => (
        <SelectItem
          key={item.value}
          value={item.value}
        >
          {item.label}
        </SelectItem>
      ))}

    </SelectContent>
  </Select>
);

const CertificatesToolbar = ({
  search,
  onSearchChange,

  status,
  onStatusChange,

  category,
  onCategoryChange,

  mentor,
  onMentorChange,

  student,
onStudentChange,

  verification,
  onVerificationChange,

  date,
  onDateChange,

  statusOptions,
  categoryOptions,
  mentorOptions,
  studentOptions,
  verificationOptions,

  view,
  onViewChange,

  onRefresh,
  onExport,
}: CertificatesToolbarProps) => {
      return (
    <section
      className="
        rounded-3xl
        border
        bg-white
        p-6
        shadow-sm
      "
    >
      <div
        className="
          grid
          gap-4
          xl:grid-cols-6
        "
      >
        {/* Search */}

        <div className="relative xl:col-span-2">

          <Search
            size={18}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-muted-foreground
            "
          />

          <Input
            value={search}
            onChange={(e) =>
              onSearchChange(
                e.target.value
              )
            }
            placeholder="Search certificate, student, mentor..."
            className="
              h-11
              rounded-xl
              pl-11
            "
          />

        </div>

        {/* Status */}

        <SelectFilter
          value={status}
          placeholder="Status"
          options={statusOptions}
          onChange={onStatusChange}
        />

        {/* Category */}

        <SelectFilter
          value={category}
          placeholder="Category"
          options={categoryOptions}
          onChange={
            onCategoryChange
          }
        />

        {/* Mentor */}

        <SelectFilter
          value={mentor}
          placeholder="Mentor"
          options={mentorOptions}
          onChange={
            onMentorChange
          }
        />

        {/* Student */}

        <SelectFilter
          value={student}
          placeholder="Student"
          options={studentOptions}
          onChange={
            onStudentChange
          }
        />
      </div>
            <div
        className="
          mt-5
          flex
          flex-wrap
          items-center
          justify-between
          gap-4
        "
      >
        {/* Left */}

        <div className="flex flex-wrap items-center gap-4">

          {/* Verification */}

          <div className="min-w-[220px]">

            <SelectFilter
              value={verification}
              placeholder="Verification"
              options={verificationOptions}
              onChange={
                onVerificationChange
              }
            />

          </div>

          {/* Date */}

          <div className="relative">

            <CalendarDays
              size={18}
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-muted-foreground
              "
            />

            <Input
              type="date"
              value={date}
              onChange={(e) =>
                onDateChange(
                  e.target.value
                )
              }
              className="
                h-11
                rounded-xl
                pl-11
              "
            />

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-3">

          <Button
            variant="outline"
            className="rounded-xl"
            onClick={onRefresh}
          >
            <RefreshCw
              className="mr-2 h-4 w-4"
            />

            Refresh

          </Button>

          <Button
            variant="outline"
            className="rounded-xl"
            onClick={onExport}
          >
            <Download
              className="mr-2 h-4 w-4"
            />

            Export

          </Button>

          <div
            className="
              flex
              overflow-hidden
              rounded-xl
              border
            "
          >
            <Button
              type="button"
              variant={
                view === "grid"
                  ? "default"
                  : "ghost"
              }
              className="rounded-none"
              onClick={() =>
                onViewChange(
                  "grid"
                )
              }
            >
              <LayoutGrid
                className="h-4 w-4"
              />
            </Button>

            <Button
              type="button"
              variant={
                view === "list"
                  ? "default"
                  : "ghost"
              }
              className="rounded-none"
              onClick={() =>
                onViewChange(
                  "list"
                )
              }
            >
              <List
                className="h-4 w-4"
              />
            </Button>

          </div>

        </div>

      </div>

    </section>

  );
};

export default memo(
  CertificatesToolbar
);
import { memo } from "react";

import {
  CalendarDays,
  ImagePlus,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import type { AdminEvent } from "@/types/admin-events";

interface EventFormProps {
  mode: "create" | "edit";

  event?: AdminEvent | null;

  loading?: boolean;

  onSubmit: () => void;
}

const EventForm = ({
  mode,
  event,
  loading = false,
  onSubmit,
}: EventFormProps) => {
  const isEdit = mode === "edit";

  return (
    <div className="space-y-10">

      {/* Hero */}

      <div
        className="
          rounded-3xl
          bg-gradient-to-r
          from-blue-600
          via-indigo-600
          to-violet-600
          p-8
          text-white
        "
      >

        <div className="flex items-center gap-3">

          <Sparkles className="h-6 w-6" />

          <span className="font-semibold">

            CoachCoaching Events

          </span>

        </div>

        <h2 className="mt-5 text-3xl font-bold">

          {isEdit
            ? "Edit Event"
            : "Create New Event"}

        </h2>

        <p className="mt-3 text-blue-100">

          {isEdit
            ? "Update your event information."
            : "Create a professional event for mentors and users."}

        </p>

      </div>

      {/* Banner */}

      <div
        className="
          rounded-3xl
          border
          border-dashed
          p-8
        "
      >

        <div className="flex flex-col items-center">

          {event?.banner ? (

            <img
              src={event.banner}
              alt={event.title}
              className="
                h-52
                w-full
                rounded-2xl
                object-cover
              "
            />

          ) : (

            <div
              className="
                flex
                h-24
                w-24
                items-center
                justify-center
                rounded-full
                bg-slate-100
              "
            >

              <ImagePlus className="h-12 w-12" />

            </div>

          )}

          <Button
            className="mt-6"
            variant="outline"
          >
            Change Banner
          </Button>

        </div>

      </div>

      {/* Basic Information */}

      <section>

        <div className="mb-6 flex items-center gap-3">

          <CalendarDays className="h-5 w-5" />

          <h3 className="text-xl font-bold">

            Basic Information

          </h3>

        </div>

        <div className="grid gap-6 md:grid-cols-2">

          <div>

            <Label>
              Event Title
            </Label>

            <Input
              defaultValue={event?.title}
              placeholder="Ultimate React Masterclass"
            />

          </div>

          <div>

            <Label>
              Slug
            </Label>

            <Input
              defaultValue={event?.slug}
              placeholder="ultimate-react-masterclass"
            />

          </div>

          <div className="md:col-span-2">

            <Label>
              Short Description
            </Label>

            <Textarea
              rows={3}
              defaultValue={event?.shortDescription}
            />

          </div>

          <div className="md:col-span-2">

            <Label>
              Description
            </Label>

            <Textarea
              rows={8}
              defaultValue={event?.description}
            />

          </div>
                  </div>

      </section>

      {/* Event Configuration */}

      <section>

        <h3 className="mb-6 text-xl font-bold">

          Event Configuration

        </h3>

        <div
          className="
            grid
            gap-6
            lg:grid-cols-2
          "
        >

          {/* Mentor */}

          <div>

            <Label>

              Mentor

            </Label>

            <select
              defaultValue={event?.mentorName}
              className="
                mt-2
                h-11
                w-full
                rounded-xl
                border
                bg-background
                px-4
                text-sm
              "
            >

              <option value="">
                Select Mentor
              </option>

              <option>
                John Anderson
              </option>

              <option>
                Sarah Wilson
              </option>

              <option>
                Emily Brown
              </option>

              <option>
                David Miller
              </option>

            </select>

          </div>

          {/* Category */}

          <div>

            <Label>

              Category

            </Label>

            <select
              defaultValue={event?.category}
              className="
                mt-2
                h-11
                w-full
                rounded-xl
                border
                bg-background
                px-4
                text-sm
              "
            >

              <option>
                Engineering
              </option>

              <option>
                Product
              </option>

              <option>
                Career
              </option>

              <option>
                Startup
              </option>

              <option>
                Leadership
              </option>

              <option>
                Marketing
              </option>

            </select>

          </div>

          {/* Event Type */}

          <div>

            <Label>

              Event Type

            </Label>

            <select
              defaultValue={event?.type}
              className="
                mt-2
                h-11
                w-full
                rounded-xl
                border
                bg-background
                px-4
              "
            >

              <option>
                Webinar
              </option>

              <option>
                Workshop
              </option>

              <option>
                Masterclass
              </option>

              <option>
                Bootcamp
              </option>

            </select>

          </div>

          {/* Mode */}

          <div>

            <Label>

              Event Mode

            </Label>

            <select
              defaultValue={event?.mode}
              className="
                mt-2
                h-11
                w-full
                rounded-xl
                border
                bg-background
                px-4
              "
            >

              <option>
                Online
              </option>

              <option>
                Offline
              </option>

              <option>
                Hybrid
              </option>

            </select>

          </div>

          {/* Capacity */}

          <div>

            <Label>

              Capacity

            </Label>

            <Input
              type="number"
              defaultValue={event?.capacity}
              placeholder="250"
            />

          </div>

          {/* Ticket */}

          <div>

            <Label>

              Ticket Price ($)

            </Label>

            <Input
              type="number"
              defaultValue={
                event?.revenue.ticketPrice
              }
              placeholder="49"
            />

          </div>

          {/* Timezone */}

          <div>

            <Label>

              Timezone

            </Label>

            <Input
              defaultValue={event?.timezone}
              placeholder="Asia/Kolkata"
            />

          </div>

          {/* Meeting Link */}

          <div>

            <Label>

              Meeting Link

            </Label>

            <Input
              defaultValue={event?.meetingLink}
              placeholder="https://zoom.us/..."
            />

          </div>

        </div>

      </section>

      {/* Publishing */}

      <section>

        <h3 className="mb-6 text-xl font-bold">

          Publishing

        </h3>

        <div
          className="
            grid
            gap-6
            lg:grid-cols-3
          "
        >

          <div
            className="
              rounded-2xl
              border
              p-6
            "
          >

            <div className="flex items-center justify-between">

              <div>

                <h4 className="font-semibold">

                  Featured Event

                </h4>

                <p className="mt-2 text-sm text-muted-foreground">

                  Display on homepage

                </p>

              </div>

              <input
                type="checkbox"
                defaultChecked={
                  event?.featured
                }
              />

            </div>

          </div>

          <div
            className="
              rounded-2xl
              border
              p-6
            "
          >

            <div className="flex items-center justify-between">

              <div>

                <h4 className="font-semibold">

                  Published

                </h4>

                <p className="mt-2 text-sm text-muted-foreground">

                  Visible to users

                </p>

              </div>

              <input
                type="checkbox"
                defaultChecked={
                  event?.published
                }
              />

            </div>

          </div>

          <div
            className="
              rounded-2xl
              border
              p-6
            "
          >

            <div className="flex items-center justify-between">

              <div>

                <h4 className="font-semibold">

                  Certificate

                </h4>

                <p className="mt-2 text-sm text-muted-foreground">

                  Auto issue certificates

                </p>

              </div>

              <input
                type="checkbox"
                defaultChecked={
                  event?.certificate.enabled
                }
              />

            </div>

          </div>

        </div>

      </section>
            {/* Schedule */}

      <section>

        <h3 className="mb-6 text-xl font-bold">

          Schedule & Venue

        </h3>

        <div
          className="
            grid
            gap-6
            lg:grid-cols-2
          "
        >

          {/* Date */}

          <div>

            <Label>

              Event Date

            </Label>

            <Input
              type="date"
              defaultValue={event?.date}
            />

          </div>

          {/* Registration Deadline */}

          <div>

            <Label>

              Registration Deadline

            </Label>

            <Input
              type="date"
            />

          </div>

          {/* Start Time */}

          <div>

            <Label>

              Start Time

            </Label>

            <Input
              type="time"
              defaultValue={event?.time}
            />

          </div>

          {/* Duration */}

          <div>

            <Label>

              Duration

            </Label>

            <select
              defaultValue={event?.duration}
              className="
                mt-2
                h-11
                w-full
                rounded-xl
                border
                bg-background
                px-4
              "
            >

              <option>

                30 Minutes

              </option>

              <option>

                60 Minutes

              </option>

              <option>

                90 Minutes

              </option>

              <option>

                120 Minutes

              </option>

              <option>

                180 Minutes

              </option>

            </select>

          </div>

          {/* Venue */}

          <div className="lg:col-span-2">

            <Label>

              Venue / Location

            </Label>

            <Input
              defaultValue={event?.location}
              placeholder="Zoom / Google Meet / Physical Address"
            />

          </div>

        </div>

      </section>

      {/* Revenue Preview */}

      <section>

        <div
          className="
            rounded-3xl
            border
            bg-gradient-to-r
            from-emerald-50
            via-green-50
            to-lime-50
            p-8
          "
        >

          <div className="flex items-center justify-between">

            <div>

              <h3 className="text-2xl font-bold">

                Revenue Preview

              </h3>

              <p className="mt-2 text-muted-foreground">

                Estimated revenue based on
                ticket price & capacity.

              </p>

            </div>

            <div
              className="
                rounded-2xl
                bg-emerald-100
                p-4
                text-3xl
              "
            >
              💰
            </div>

          </div>

          <div
            className="
              mt-8
              grid
              gap-6
              md:grid-cols-4
            "
          >

            <div>

              <p className="text-sm text-muted-foreground">

                Capacity

              </p>

              <h3 className="mt-2 text-3xl font-bold">

                {event?.capacity ?? 250}

              </h3>

            </div>

            <div>

              <p className="text-sm text-muted-foreground">

                Ticket

              </p>

              <h3 className="mt-2 text-3xl font-bold">

                $

                {event?.revenue.ticketPrice ?? 49}

              </h3>

            </div>

            <div>

              <p className="text-sm text-muted-foreground">

                Gross Revenue

              </p>

              <h3 className="mt-2 text-3xl font-bold text-emerald-700">

                $

                {event
                  ? event.revenue.grossRevenue.toLocaleString()
                  : "12,250"}

              </h3>

            </div>

            <div>

              <p className="text-sm text-muted-foreground">

                Mentor Payout

              </p>

              <h3 className="mt-2 text-3xl font-bold">

                $

                {event
                  ? event.revenue.mentorPayout.toLocaleString()
                  : "11,025"}

              </h3>

            </div>

          </div>

        </div>

      </section>

      {/* Registration */}

      <section>

        <h3 className="mb-6 text-xl font-bold">

          Registration

        </h3>

        <div
          className="
            grid
            gap-6
            lg:grid-cols-3
          "
        >

          <div>

            <Label>

              Maximum Capacity

            </Label>

            <Input
              type="number"
              defaultValue={event?.capacity}
            />

          </div>

          <div>

            <Label>

              Seats Left

            </Label>

            <Input
              type="number"
              defaultValue={event?.seatsLeft}
            />

          </div>

          <div>

            <Label>

              Registration Status

            </Label>

            <select
              defaultValue={event?.status}
              className="
                mt-2
                h-11
                w-full
                rounded-xl
                border
                px-4
              "
            >

              <option>
                Draft
              </option>

              <option>
                Published
              </option>

              <option>
                Upcoming
              </option>

              <option>
                Live
              </option>

              <option>
                Completed
              </option>

              <option>
                Cancelled
              </option>

            </select>

          </div>

        </div>

      </section>
            {/* Learning & Requirements */}

      <section>

        <h3 className="mb-6 text-xl font-bold">

          Learning & Requirements

        </h3>

        <div
          className="
            grid
            gap-8
            lg:grid-cols-2
          "
        >

          {/* Learning Outcomes */}

          <div
            className="
              rounded-3xl
              border
              bg-white
              p-6
            "
          >

            <h4 className="font-semibold">

              Learning Outcomes

            </h4>

            <p className="mt-2 text-sm text-muted-foreground">

              What attendees will learn from this event.

            </p>

            <Textarea
              rows={8}
              className="mt-5"
              defaultValue={
                event?.learningPoints.join("\n")
              }
              placeholder={`• Build Production React Apps

• Authentication

• API Integration

• Deployment`}
            />

          </div>

          {/* Requirements */}

          <div
            className="
              rounded-3xl
              border
              bg-white
              p-6
            "
          >

            <h4 className="font-semibold">

              Requirements

            </h4>

            <p className="mt-2 text-sm text-muted-foreground">

              Prerequisites before joining.

            </p>

            <Textarea
              rows={8}
              className="mt-5"
              defaultValue={
                event?.requirements.join("\n")
              }
              placeholder={`• Laptop

• Internet

• VS Code

• Basic React`}
            />

          </div>

        </div>

      </section>

      {/* Tags */}

      <section>

        <h3 className="mb-6 text-xl font-bold">

          Tags

        </h3>

        <div
          className="
            rounded-3xl
            border
            bg-white
            p-6
          "
        >

          <Input
            defaultValue={
              event?.tags.join(", ")
            }
            placeholder="React, Frontend, Career"
          />

          <div className="mt-6 flex flex-wrap gap-3">

            {(event?.tags ?? [
              "React",
              "Frontend",
              "Career",
            ]).map((tag) => (

              <span
                key={tag}
                className="
                  rounded-full
                  bg-blue-100
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  text-blue-700
                "
              >
                #{tag}
              </span>

            ))}

          </div>

        </div>

      </section>

      {/* Agenda */}

      <section>

        <h3 className="mb-6 text-xl font-bold">

          Event Agenda

        </h3>

        <div className="space-y-5">

          {(event?.agenda ?? []).map(
            (agenda) => (

              <div
                key={agenda.id}
                className="
                  rounded-3xl
                  border
                  p-6
                "
              >

                <div className="grid gap-5 lg:grid-cols-4">

                  <Input
                    defaultValue={agenda.title}
                    placeholder="Title"
                  />

                  <Input
                    type="time"
                    defaultValue={agenda.startTime}
                  />

                  <Input
                    type="time"
                    defaultValue={agenda.endTime}
                  />

                  <Button
                    variant="destructive"
                  >
                    Remove
                  </Button>

                </div>

                <Textarea
                  rows={3}
                  className="mt-5"
                  defaultValue={
                    agenda.description
                  }
                  placeholder="Agenda Description"
                />

              </div>

            )
          )}

          <Button
            variant="outline"
          >
            + Add Agenda Item
          </Button>

        </div>

      </section>

      {/* Certificate */}

      <section>

        <h3 className="mb-6 text-xl font-bold">

          Certificate

        </h3>

        <div
          className="
            rounded-3xl
            border
            bg-white
            p-6
          "
        >

          <div
            className="
              grid
              gap-6
              md:grid-cols-2
            "
          >

            <div>

              <Label>

                Template Name

              </Label>

              <Input
                defaultValue={
                  event?.certificate.template
                }
                placeholder="Premium Certificate"
              />

            </div>

            <div>

              <Label>

                Minimum Attendance %

              </Label>

              <Input
                type="number"
                placeholder="80"
              />

            </div>

          </div>

        </div>

      </section>

      {/* Analytics */}

      <section>

        <div
          className="
            rounded-3xl
            border
            bg-gradient-to-r
            from-slate-50
            to-blue-50
            p-8
          "
        >

          <h3 className="text-xl font-bold">

            Analytics

          </h3>

          <p className="mt-3 text-muted-foreground">

            Views, registrations,
            attendance, certificates,
            completion rate and revenue
            will be automatically
            calculated after backend
            integration.

          </p>

        </div>

      </section>
            {/* Footer */}

      <section
        className="
          sticky
          bottom-0
          z-20
          -mx-2
          border-t
          bg-background/95
          px-2
          py-6
          backdrop-blur
        "
      >

        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          {/* Info */}

          <div>

            <h3 className="text-lg font-semibold">

              {isEdit
                ? "Update Event"
                : "Create Event"}

            </h3>

            <p className="mt-2 max-w-xl text-sm text-muted-foreground">

              Please review all information before
              submitting. Validation, image upload,
              API integration and notifications will
              be connected during backend development.

            </p>

          </div>

          {/* Actions */}

          <div className="flex flex-wrap gap-3">

            <Button
              variant="outline"
              type="button"
            >
              Cancel
            </Button>

            <Button
              variant="secondary"
              type="button"
            >
              Save Draft
            </Button>

            <Button
              type="button"
              disabled={loading}
              onClick={onSubmit}
            >
              {loading ? (

                <>
                  Saving...
                </>

              ) : (

                <>
                  {isEdit
                    ? "Update Event"
                    : "Create Event"}
                </>

              )}

            </Button>

          </div>

        </div>

      </section>

      {/* Backend Integration Notes

          TODO:

          - React Hook Form
          - Zod Validation
          - Image Upload
          - Dynamic Agenda
          - Dynamic Learning Points
          - Dynamic Requirements
          - Mentor API
          - Categories API
          - Event Types API
          - Create Event API
          - Update Event API
          - Draft API
          - Autosave
          - Slug Generator
          - Revenue Calculation
          - File Upload
          - Banner Crop
          - Calendar Picker
          - Toast Notifications
          - Unsaved Changes Dialog

      */}

    </div>

  );
};

export default memo(EventForm);
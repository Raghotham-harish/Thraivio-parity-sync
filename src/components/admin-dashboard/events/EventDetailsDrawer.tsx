import { memo } from "react";

import {
  CalendarDays,
  Clock3,
  MapPin,
  Users,
  BadgeCheck,
  Star,
  X,
  Building2,
  Radio,
} from "lucide-react";

import type { AdminEvent } from "@/types/admin-events";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

interface EventDetailsDrawerProps {
  open: boolean;

  event: AdminEvent | null;

  onOpenChange: (open: boolean) => void;

  onEdit: (event: AdminEvent) => void;

  onPublish: (event: AdminEvent) => void;

  onCancel: (event: AdminEvent) => void;

  onDelete: (event: AdminEvent) => void;
}

const statusColor: Record<
  AdminEvent["status"],
  string
> = {
  draft:
    "bg-secondary text-foreground",

  published:
    "bg-[#EFF6FF] text-[#2563EB]",

  live:
    "bg-[#FFDAD6] text-[#BA1A1A]",

  upcoming:
    "bg-[#FFFBEB] text-[#B45309]",

  completed:
    "bg-[#ECFDF5] text-[#065F46]",

  cancelled:
    "bg-rose-100 text-rose-700",
};

const EventDetailsDrawer = ({
  open,
  event,
  onOpenChange,
  onEdit,
  onPublish,
  onCancel,
  onDelete,
}: EventDetailsDrawerProps) => {

  if (!event) return null;

  return (

    <Sheet
      open={open}
      onOpenChange={onOpenChange}
    >

      <SheetContent
        side="right"
        className="
          w-full
          overflow-y-auto
          p-0
          sm:max-w-[900px]
        "
      >

        {/* Hero */}

        <div className="relative h-72">

          <img
            src={event.banner}
            alt={event.title}
            className="
              h-full
              w-full
              object-cover
            "
          />

          <div
            className="
              absolute
              inset-0
              
              from-black/80
              via-black/30
              to-transparent
            "
          />

          {/* Top */}

          <div
            className="
              absolute
              left-8
              right-8
              top-8
              flex
              items-start
              justify-between
            "
          >

            <div className="flex gap-2">

              <span
                className={`
                  rounded-full
                  px-4
                  py-2
                  text-xs
                  font-semibold
                  capitalize
                  ${statusColor[event.status]}
                `}
              >
                {event.status}
              </span>

              {event.featured && (

                <span
                  className="
                    rounded-full
                    bg-yellow-400
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    text-foreground
                  "
                >
                  ⭐ Featured
                </span>

              )}

              {event.published && (

                <span
                  className="
                    rounded-full
                    bg-[#ECFDF5]
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    text-white
                  "
                >
                  Published
                </span>

              )}

            </div>

            <Button
              size="icon"
              variant="secondary"
              onClick={() =>
                onOpenChange(false)
              }
            >
              <X className="h-5 w-5" />
            </Button>

          </div>

          {/* Bottom */}

          <div
            className="
              absolute
              bottom-8
              left-8
              right-8
            "
          >

            <SheetHeader>

              <SheetTitle
                className="
                  text-4xl
                  font-bold
                  text-white
                "
              >
                {event.title}
              </SheetTitle>

            </SheetHeader>

            <p
              className="
                mt-4
                max-w-3xl
                text-blue-50
                leading-7
              "
            >
              {event.description}
            </p>

          </div>

        </div>

        {/* Body */}

        <div className="space-y-8 p-8">
                      {/* Mentor + Overview */}

          <div
            className="
              grid
              gap-8
              xl:grid-cols-[380px_1fr]
            "
          >

            {/* Mentor Card */}

            <div
              className="
                rounded-2xl
                border
                bg-card
                p-6
                shadow-sm
              "
            >

              <div className="flex items-center gap-5">

                <img
                  src={event.mentorAvatar}
                  alt={event.mentorName}
                  className="
                    h-20
                    w-20
                    rounded-full
                    object-cover
                    ring-4
                    ring-blue-100
                  "
                />

                <div>

                  <div className="flex items-center gap-2">

                    <h3 className="text-xl font-bold">

                      {event.mentorName}

                    </h3>

                    <BadgeCheck
                      className="
                        h-5
                        w-5
                        text-primary
                      "
                    />

                  </div>

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

                    <Building2 className="h-4 w-4" />

                    {event.mentorCompany}

                  </div>

                  <p className="mt-2 text-sm text-muted-foreground">

                    {event.mentorCategory}

                  </p>

                </div>

              </div>

              <div className="mt-8 space-y-5">

                <div className="flex items-center justify-between">

                  <span className="text-muted-foreground">

                    Rating

                  </span>

                  <div className="flex items-center gap-2">

                    <Star
                      className="
                        h-4
                        w-4
                        fill-yellow-400
                        text-yellow-400
                      "
                    />

                    <span className="font-semibold">

                      {event.feedback.averageRating}

                    </span>

                  </div>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-muted-foreground">

                    Reviews

                  </span>

                  <span className="font-semibold">

                    {event.feedback.totalReviews}

                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-muted-foreground">

                    Recommendation

                  </span>

                  <span className="font-semibold">

                    {event.feedback.recommendationRate}%

                  </span>

                </div>

              </div>

            </div>

            {/* Event Overview */}

            <div className="space-y-6">

              <div
                className="
                  grid
                  gap-5
                  sm:grid-cols-2
                "
              >

                <div
                  className="
                    rounded-2xl
                    border
                    bg-secondary
                    p-6
                  "
                >

                  <div className="flex items-center gap-3">

                    <CalendarDays
                      className="
                        h-5
                        w-5
                        text-primary
                      "
                    />

                    <span className="font-medium">

                      Date

                    </span>

                  </div>

                  <h4 className="mt-5 text-xl font-bold">

                    {event.date}

                  </h4>

                  <p className="mt-1 text-sm text-muted-foreground">

                    {event.weekday}

                  </p>

                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    bg-secondary
                    p-6
                  "
                >

                  <div className="flex items-center gap-3">

                    <Clock3
                      className="
                        h-5
                        w-5
                        text-primary
                      "
                    />

                    <span className="font-medium">

                      Time

                    </span>

                  </div>

                  <h4 className="mt-5 text-xl font-bold">

                    {event.time}

                  </h4>

                  <p className="mt-1 text-sm text-muted-foreground">

                    {event.duration}

                  </p>

                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    bg-secondary
                    p-6
                  "
                >

                  <div className="flex items-center gap-3">

                    <MapPin
                      className="
                        h-5
                        w-5
                        text-rose-600
                      "
                    />

                    <span className="font-medium">

                      Location

                    </span>

                  </div>

                  <h4 className="mt-5 text-lg font-bold">

                    {event.location}

                  </h4>

                  <p className="mt-1 text-sm text-muted-foreground">

                    {event.mode}

                  </p>

                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    bg-secondary
                    p-6
                  "
                >

                  <div className="flex items-center gap-3">

                    <Radio
                      className="
                        h-5
                        w-5
                        text-red-600
                      "
                    />

                    <span className="font-medium">

                      Event Type

                    </span>

                  </div>

                  <h4 className="mt-5 text-lg font-bold">

                    {event.type}

                  </h4>

                  <p className="mt-1 text-sm text-muted-foreground">

                    {event.category}

                  </p>

                </div>

              </div>

              {/* Quick Stats */}

              <div
                className="
                  grid
                  gap-5
                  md:grid-cols-3
                "
              >

                <div className="rounded-2xl border p-6">

                  <p className="text-sm text-muted-foreground">

                    Capacity

                  </p>

                  <h3 className="mt-3 text-3xl font-bold">

                    {event.capacity}

                  </h3>

                </div>

                <div className="rounded-2xl border p-6">

                  <div className="flex items-center gap-2">

                    <Users className="h-5 w-5 text-primary" />

                    <p className="text-sm text-muted-foreground">

                      Registered

                    </p>

                  </div>

                  <h3 className="mt-3 text-3xl font-bold">

                    {event.registered}

                  </h3>

                </div>

                <div className="rounded-2xl border p-6">

                  <p className="text-sm text-muted-foreground">

                    Seats Left

                  </p>

                  <h3 className="mt-3 text-3xl font-bold">

                    {event.seatsLeft}

                  </h3>

                </div>

              </div>
                            {/* Description */}

              <div
                className="
                  rounded-2xl
                  border
                  bg-card
                  p-8
                  shadow-sm
                "
              >

                <h3 className="text-2xl font-bold">

                  Event Overview

                </h3>

                <p
                  className="
                    mt-6
                    leading-8
                    text-muted-foreground
                  "
                >
                  {event.description}
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2">

                  <div>

                    <p className="text-sm text-muted-foreground">

                      Event Category

                    </p>

                    <h4 className="mt-2 font-semibold">

                      {event.category}

                    </h4>

                  </div>

                  <div>

                    <p className="text-sm text-muted-foreground">

                      Event Mode

                    </p>

                    <h4 className="mt-2 font-semibold">

                      {event.mode}

                    </h4>

                  </div>

                  <div>

                    <p className="text-sm text-muted-foreground">

                      Time Zone

                    </p>

                    <h4 className="mt-2 font-semibold">

                      {event.timezone}

                    </h4>

                  </div>

                  <div>

                    <p className="text-sm text-muted-foreground">

                      Meeting Link

                    </p>

                    <a
                      href={event.meetingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        mt-2
                        block
                        truncate
                        font-medium
                        text-primary
                        hover:underline
                      "
                    >
                      {event.meetingLink}
                    </a>

                  </div>

                </div>

              </div>

              {/* Tags */}

              <div
                className="
                  rounded-2xl
                  border
                  bg-card
                  p-8
                  shadow-sm
                "
              >

                <h3 className="text-2xl font-bold">

                  Tags

                </h3>

                <div className="mt-6 flex flex-wrap gap-3">

                  {event.tags.map((tag) => (

                    <span
                      key={tag}
                      className="
                        rounded-full
                        bg-blue-50
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-[#2563EB]
                      "
                    >
                      #{tag}
                    </span>

                  ))}

                </div>

              </div>

              {/* Learning Points */}

              <div
                className="
                  rounded-2xl
                  border
                  bg-card
                  p-8
                  shadow-sm
                "
              >

                <h3 className="text-2xl font-bold">

                  What Participants Will Learn

                </h3>

                <div
                  className="
                    mt-8
                    grid
                    gap-4
                    md:grid-cols-2
                  "
                >

                  {event.learningPoints.map(
                    (point, index) => (

                      <div
                        key={index}
                        className="
                          flex
                          items-start
                          gap-4
                          rounded-2xl
                          border
                          bg-secondary
                          p-5
                        "
                      >

                        <div
                          className="
                            mt-1
                            flex
                            h-8
                            w-8
                            items-center
                            justify-center
                            rounded-full
                            bg-[#ECFDF5]
                            font-semibold
                            text-[#065F46]
                          "
                        >
                          ✓
                        </div>

                        <p className="leading-7">

                          {point}

                        </p>

                      </div>

                    )
                  )}

                </div>

              </div>

              {/* Requirements */}

              <div
                className="
                  rounded-2xl
                  border
                  bg-card
                  p-8
                  shadow-sm
                "
              >

                <h3 className="text-2xl font-bold">

                  Requirements

                </h3>

                <div
                  className="
                    mt-8
                    grid
                    gap-4
                    md:grid-cols-2
                  "
                >

                  {event.requirements.map(
                    (item, index) => (

                      <div
                        key={index}
                        className="
                          flex
                          items-center
                          gap-4
                          rounded-2xl
                          border
                          bg-secondary
                          p-5
                        "
                      >

                        <div
                          className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            bg-[#EFF6FF]
                            font-bold
                            text-[#2563EB]
                          "
                        >

                          {index + 1}

                        </div>

                        <span className="font-medium">

                          {item}

                        </span>

                      </div>

                    )
                  )}

                </div>

              </div>
                            {/* Agenda & Schedule */}

              <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">

                {/* Agenda */}

                <div className="rounded-2xl border bg-card p-8 shadow-sm">

                  <div className="flex items-center justify-between">

                    <h3 className="text-2xl font-bold">
                      Event Agenda
                    </h3>

                    <span className="rounded-full bg-[#EFF6FF] px-4 py-2 text-sm font-medium text-[#2563EB]">
                      {event.agenda.length} Sessions
                    </span>

                  </div>

                  <div className="mt-8 space-y-6">

                    {event.agenda.map((item, index) => (

                      <div
                        key={item.id}
                        className="relative flex gap-5"
                      >

                        {/* Timeline */}

                        <div className="flex flex-col items-center">

                          <div
                            className="
                              flex
                              h-12
                              w-12
                              items-center
                              justify-center
                              rounded-full
                              
                              bg-primary
                              
                              text-sm
                              font-bold
                              text-white
                            "
                          >
                            {index + 1}
                          </div>

                          {index !== event.agenda.length - 1 && (
                            <div className="mt-2 h-full w-[2px] bg-secondary" />
                          )}

                        </div>

                        {/* Content */}

                        <div className="flex-1 rounded-2xl border bg-secondary p-5">

                          <div className="flex flex-wrap items-center justify-between gap-3">

                            <h4 className="text-lg font-semibold">
                              {item.title}
                            </h4>

                            <span className="rounded-full bg-card px-3 py-1 text-xs font-medium">
                              {item.startTime} - {item.endTime}
                            </span>

                          </div>

                          <p className="mt-3 leading-7 text-muted-foreground">
                            {item.description}
                          </p>

                        </div>

                      </div>

                    ))}

                  </div>

                </div>

                {/* Schedule */}

                <div className="space-y-6">

                  <div className="rounded-2xl border bg-card p-6 shadow-sm">

                    <h3 className="text-xl font-bold">
                      Event Schedule
                    </h3>

                    <div className="mt-6 space-y-5">

                      <div className="flex items-center justify-between">

                        <span className="text-muted-foreground">
                          Date
                        </span>

                        <span className="font-semibold">
                          {event.date}
                        </span>

                      </div>

                      <div className="flex items-center justify-between">

                        <span className="text-muted-foreground">
                          Time
                        </span>

                        <span className="font-semibold">
                          {event.time}
                        </span>

                      </div>

                      <div className="flex items-center justify-between">

                        <span className="text-muted-foreground">
                          Duration
                        </span>

                        <span className="font-semibold">
                          {event.duration}
                        </span>

                      </div>

                      <div className="flex items-center justify-between">

                        <span className="text-muted-foreground">
                          Timezone
                        </span>

                        <span className="font-semibold">
                          {event.timezone}
                        </span>

                      </div>

                      <div className="flex items-center justify-between">

                        <span className="text-muted-foreground">
                          Mode
                        </span>

                        <span className="font-semibold">
                          {event.mode}
                        </span>

                      </div>

                    </div>

                  </div>

                  {/* Registration */}

                  <div className="rounded-2xl border bg-card p-6 shadow-sm">

                    <div className="flex items-center justify-between">

                      <h3 className="text-xl font-bold">
                        Registrations
                      </h3>

                      <Users className="h-5 w-5 text-primary" />

                    </div>

                    <div className="mt-8">

                      <div className="flex items-center justify-between">

                        <span className="text-muted-foreground">
                          Registered
                        </span>

                        <span className="font-bold">
                          {event.registered} / {event.capacity}
                        </span>

                      </div>

                      <div className="mt-4 h-3 overflow-hidden rounded-full bg-secondary">

                        <div
                          className="
                            h-full
                            rounded-full
                            
                            bg-primary
                            
                            
                          "
                          style={{
                            width: `${Math.min(
                              100,
                              (event.registered / event.capacity) * 100
                            )}%`,
                          }}
                        />

                      </div>

                      <div className="mt-4 flex items-center justify-between text-sm">

                        <span className="text-[#0F8F65] font-medium">
                          {event.registered} Registered
                        </span>

                        <span className="text-[#B45309] font-medium">
                          {event.seatsLeft} Seats Left
                        </span>

                      </div>

                    </div>

                  </div>

                </div>

              </div>
                            {/* Revenue & Analytics */}

              <div
                className="
                  mt-8
                  grid
                  gap-6
                  xl:grid-cols-2
                "
              >

                {/* Revenue */}

                <div
                  className="
                    rounded-2xl
                    border
                    bg-card
                    p-8
                    shadow-sm
                  "
                >

                  <div className="flex items-center justify-between">

                    <h3 className="text-2xl font-bold">

                      Revenue Breakdown

                    </h3>

                    <div
                      className="
                        rounded-2xl
                        bg-[#ECFDF5]
                        p-3
                      "
                    >
                      💰
                    </div>

                  </div>

                  <div className="mt-8 space-y-5">

                    <div className="flex items-center justify-between">

                      <span className="text-muted-foreground">

                        Ticket Price

                      </span>

                      <span className="font-semibold">

                        $
                        {event.revenue.ticketPrice.toLocaleString()}

                      </span>

                    </div>

                    <div className="flex items-center justify-between">

                      <span className="text-muted-foreground">

                        Gross Revenue

                      </span>

                      <span className="text-lg font-bold text-[#065F46]">

                        $
                        {event.revenue.grossRevenue.toLocaleString()}

                      </span>

                    </div>

                    <div className="flex items-center justify-between">

                      <span className="text-muted-foreground">

                        Platform Fee

                      </span>

                      <span className="font-semibold">

                        $
                        {event.revenue.platformFee.toLocaleString()}

                      </span>

                    </div>

                    <div className="flex items-center justify-between">

                      <span className="text-muted-foreground">

                        Mentor Payout

                      </span>

                      <span className="font-semibold">

                        $
                        {event.revenue.mentorPayout.toLocaleString()}

                      </span>

                    </div>

                    <div className="flex items-center justify-between">

                      <span className="text-muted-foreground">

                        Refund Amount

                      </span>

                      <span className="font-semibold text-rose-600">

                        $
                        {event.revenue.refundAmount.toLocaleString()}

                      </span>

                    </div>

                  </div>

                </div>

                {/* Analytics */}

                <div
                  className="
                    rounded-2xl
                    border
                    bg-card
                    p-8
                    shadow-sm
                  "
                >

                  <h3 className="text-2xl font-bold">

                    Event Analytics

                  </h3>

                  <div
                    className="
                      mt-8
                      grid
                      gap-5
                      sm:grid-cols-2
                    "
                  >

                    <div className="rounded-2xl border bg-secondary p-5">

                      <p className="text-sm text-muted-foreground">

                        Views

                      </p>

                      <h4 className="mt-3 text-3xl font-bold">

                        {event.analytics.views}

                      </h4>

                    </div>

                    <div className="rounded-2xl border bg-secondary p-5">

                      <p className="text-sm text-muted-foreground">

                        Registrations

                      </p>

                      <h4 className="mt-3 text-3xl font-bold">

                        {event.analytics.registrations}

                      </h4>

                    </div>

                    <div className="rounded-2xl border bg-secondary p-5">

                      <p className="text-sm text-muted-foreground">

                        Attendance

                      </p>

                      <h4 className="mt-3 text-3xl font-bold">

                        {event.analytics.attendees}

                      </h4>

                      <p className="mt-2 text-xs text-[#0F8F65]">

                        {event.analytics.attendanceRate}% Present

                      </p>

                    </div>

                    <div className="rounded-2xl border bg-secondary p-5">

                      <p className="text-sm text-muted-foreground">

                        Completion

                      </p>

                      <h4 className="mt-3 text-3xl font-bold">

                        {event.analytics.completionRate}%

                      </h4>

                    </div>

                  </div>

                </div>

              </div>

              {/* Certificates & Feedback */}

              <div
                className="
                  mt-8
                  grid
                  gap-6
                  lg:grid-cols-2
                "
              >

                {/* Certificate */}

                <div
                  className="
                    rounded-2xl
                    border
                    bg-card
                    p-8
                    shadow-sm
                  "
                >

                  <h3 className="text-2xl font-bold">

                    Certificates

                  </h3>

                  <div className="mt-8 space-y-5">

                    <div className="flex items-center justify-between">

                      <span className="text-muted-foreground">

                        Status

                      </span>

                      <span className="font-semibold">

                        {event.certificate.enabled
                          ? "Enabled"
                          : "Disabled"}

                      </span>

                    </div>

                    <div className="flex items-center justify-between">

                      <span className="text-muted-foreground">

                        Template

                      </span>

                      <span className="font-semibold">

                        {event.certificate.template}

                      </span>

                    </div>

                    <div className="flex items-center justify-between">

                      <span className="text-muted-foreground">

                        Issued

                      </span>

                      <span className="font-semibold text-[#2563EB]">

                        {event.certificate.issued}

                      </span>

                    </div>

                  </div>

                </div>

                {/* Feedback */}

                <div
                  className="
                    rounded-2xl
                    border
                    bg-card
                    p-8
                    shadow-sm
                  "
                >

                  <h3 className="text-2xl font-bold">

                    Feedback Summary

                  </h3>

                  <div className="mt-8 space-y-5">

                    <div className="flex items-center justify-between">

                      <span className="text-muted-foreground">

                        Average Rating

                      </span>

                      <span className="font-bold">

                        ⭐ {event.feedback.averageRating}

                      </span>

                    </div>

                    <div className="flex items-center justify-between">

                      <span className="text-muted-foreground">

                        Reviews

                      </span>

                      <span className="font-semibold">

                        {event.feedback.totalReviews}

                      </span>

                    </div>

                    <div className="flex items-center justify-between">

                      <span className="text-muted-foreground">

                        Recommendation

                      </span>

                      <span className="font-semibold text-[#065F46]">

                        {event.feedback.recommendationRate}%

                      </span>

                    </div>

                  </div>

                </div>

              </div>
                            {/* Footer Actions */}

              <div
                className="
                  rounded-2xl
                  border
                  
                  bg-[#0A192F]
                  
                  p-8
                "
              >

                <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                  <div>

                    <h3 className="text-2xl font-bold">

                      Event Management

                    </h3>

                    <p className="mt-3 max-w-2xl text-muted-foreground leading-7">

                      Manage publishing, editing, cancellation and
                      deletion of this event. Backend integration
                      will be connected later.

                    </p>

                  </div>

                  <div className="flex flex-wrap gap-3">

                    <Button
                      variant="outline"
                      onClick={() => onEdit(event)}
                    >
                      ✏ Edit Event
                    </Button>

                    {event.published ? (

                      <Button
                        variant="destructive"
                        onClick={() => onCancel(event)}
                      >
                        Cancel Event
                      </Button>

                    ) : (

                      <Button
                        onClick={() => onPublish(event)}
                      >
                        Publish Event
                      </Button>

                    )}

                    <Button
                      variant="destructive"
                      onClick={() => onDelete(event)}
                    >
                      Delete Event
                    </Button>

                  </div>

                </div>

              </div>

              {/* Event Metadata */}

              <div
                className="
                  rounded-2xl
                  border
                  bg-card
                  p-6
                  shadow-sm
                "
              >

                <h3 className="text-xl font-bold">

                  Metadata

                </h3>

                <div
                  className="
                    mt-6
                    grid
                    gap-6
                    md:grid-cols-2
                  "
                >

                  <div>

                    <p className="text-sm text-muted-foreground">

                      Event ID

                    </p>

                    <p className="mt-2 font-medium break-all">

                      {event.id}

                    </p>

                  </div>

                  <div>

                    <p className="text-sm text-muted-foreground">

                      Slug

                    </p>

                    <p className="mt-2 font-medium break-all">

                      {event.slug}

                    </p>

                  </div>

                  <div>

                    <p className="text-sm text-muted-foreground">

                      Created At

                    </p>

                    <p className="mt-2 font-medium">

                      {event.createdAt}

                    </p>

                  </div>

                  <div>

                    <p className="text-sm text-muted-foreground">

                      Last Updated

                    </p>

                    <p className="mt-2 font-medium">

                      {event.updatedAt}

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </SheetContent>

    </Sheet>

  );

};

export default memo(EventDetailsDrawer);
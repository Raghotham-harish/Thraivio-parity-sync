import { useMemo, useState } from "react";

import type { Booking } from "@/types/booking";

import BookingsHeader from "@/components/mentor-dashboard/bookings/BookingsHearder";
import BookingsToolbar from "@/components/mentor-dashboard/bookings/BookingsToolbar";

import BookingGridCard from "@/components/mentor-dashboard/bookings/BookingGridCard";
import BookingListCard from "@/components/mentor-dashboard/bookings/BookingListCard";

import EmptyBookings from "@/components/mentor-dashboard/bookings/EmptyBookings";

import BookingFormModal from "@/components/mentor-dashboard/bookings/BookingFormModal";

import DeleteBookingDialog from "@/components/mentor-dashboard/bookings/DeleteBookingDialog";

const initialBookings: Booking[] = [
  {
    id: "1",
    studentName: "Rahul Sharma",
    studentEmail: "rahul@gmail.com",
    sessionType: "Mentorship Call",
    date: "2026-06-25",
    time: "10:00",
    duration: "60 Minutes",
    amount: 99,
    status: "confirmed",
  },

  {
    id: "2",
    studentName: "Priya Patel",
    studentEmail: "priya@gmail.com",
    sessionType: "Mock Interview",
    date: "2026-06-28",
    time: "14:00",
    duration: "90 Minutes",
    amount: 149,
    status: "pending",
  },
];

const Bookings = () => {
  const [bookings, setBookings] =
    useState(initialBookings);

  const [search, setSearch] =
    useState("");

  const [view, setView] =
    useState<"grid" | "list">(
      "grid"
    );

  const [
    selectedBooking,
    setSelectedBooking,
  ] = useState<Booking | null>(
    null
  );

  const [
    isFormOpen,
    setIsFormOpen,
  ] = useState(false);

  const [
    isDeleteOpen,
    setIsDeleteOpen,
  ] = useState(false);

  const filteredBookings =
    useMemo(() => {
      return bookings.filter(
        (booking) =>
          booking.studentName
            .toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||
          booking.studentEmail
            .toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||
          booking.sessionType
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );
    }, [bookings, search]);

  const handleAddBooking =
    () => {
      setSelectedBooking(
        null
      );

      setIsFormOpen(true);
    };

  const handleEditBooking =
    (
      booking: Booking
    ) => {
      setSelectedBooking(
        booking
      );

      setIsFormOpen(true);
    };

  const handleDeleteBooking =
    (
      booking: Booking
    ) => {
      setSelectedBooking(
        booking
      );

      setIsDeleteOpen(true);
    };

  const handleSaveBooking =
    (
      booking: Booking
    ) => {
      if (
        selectedBooking
      ) {
        setBookings(
          bookings.map((item) =>
            item.id === booking.id
              ? booking
              : item
          )
        );
      } else {
        setBookings([
          booking,
          ...bookings,
        ]);
      }

      setIsFormOpen(false);
    };

  const confirmDelete =
    () => {
      if (!selectedBooking)
        return;

      setBookings(
        bookings.filter(
          (item) =>
            item.id !==
            selectedBooking.id
        )
      );

      setIsDeleteOpen(false);
    };

  return (
    <div className="space-y-8">

      <BookingsHeader
        totalBookings={
          bookings.length
        }
        onAddBooking={
          handleAddBooking
        }
      />

      <BookingsToolbar
        search={search}
        setSearch={setSearch}
        view={view}
        setView={setView}
      />

      {filteredBookings.length ===
      0 ? (
        <EmptyBookings
          onAddBooking={
            handleAddBooking
          }
        />
      ) : (
        <>
          {view === "grid" && (
            <div
              className="
                grid
                lg:grid-cols-2
                gap-6
              "
            >
              {filteredBookings.map(
                (
                  booking
                ) => (
                  <BookingGridCard
                    key={
                      booking.id
                    }
                    booking={
                      booking
                    }
                    onEdit={
                      handleEditBooking
                    }
                    onDelete={
                      handleDeleteBooking
                    }
                  />
                )
              )}
            </div>
          )}

          {view === "list" && (
            <div className="space-y-6">

              {filteredBookings.map(
                (
                  booking
                ) => (
                  <BookingListCard
                    key={
                      booking.id
                    }
                    booking={
                      booking
                    }
                    onEdit={
                      handleEditBooking
                    }
                    onDelete={
                      handleDeleteBooking
                    }
                  />
                )
              )}

            </div>
          )}
        </>
      )}

      <BookingFormModal
        open={isFormOpen}
        booking={
          selectedBooking
        }
        onClose={() =>
          setIsFormOpen(false)
        }
        onSave={
          handleSaveBooking
        }
      />

      <DeleteBookingDialog
        open={isDeleteOpen}
        booking={
          selectedBooking
        }
        onClose={() =>
          setIsDeleteOpen(false)
        }
        onConfirm={
          confirmDelete
        }
      />

    </div>
  );
};

export default Bookings;
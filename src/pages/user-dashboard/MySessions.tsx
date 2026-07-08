import {
  useMemo,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import type { Session } from "@/types/session";

import { userSessions } from "@/data/userSessions";

import SessionsHeader from "@/components/user-dashboard/sessions/SessionsHeader";
import SessionsStats from "@/components/user-dashboard/sessions/SessionsStats";
import SessionsToolbar from "@/components/user-dashboard/sessions/SessionsToolbar";
import UpcomingSessionBanner from "@/components/user-dashboard/sessions/UpcomingSessionBanner";

import SessionGridCard from "@/components/user-dashboard/sessions/SessionGridCard";
import SessionListCard from "@/components/user-dashboard/sessions/SessionListCard";

import SessionDetailsModal from "@/components/user-dashboard/sessions/SessionDetailsModal";
import RescheduleSessionModal from "@/components/user-dashboard/sessions/RescheduleSessionModal";
import CancelSessionDialog from "@/components/user-dashboard/sessions/CancelSessionDialog";

import EmptySessions from "@/components/user-dashboard/sessions/EmptySessions";

const MySessions = () => {
  const navigate = useNavigate();

  const [search, setSearch] =
    useState("");

  const [view, setView] =
    useState<"grid" | "list">(
      "grid"
    );

  const [
    selectedFilter,
    setSelectedFilter,
  ] = useState("all");

  const [
    selectedSession,
    setSelectedSession,
  ] = useState<Session | null>(
    null
  );

  const [
    detailsOpen,
    setDetailsOpen,
  ] = useState(false);

  const [
    rescheduleOpen,
    setRescheduleOpen,
  ] = useState(false);

  const [
    cancelOpen,
    setCancelOpen,
  ] = useState(false);

  /* -------------------------------- */
  /* Stats                            */
  /* -------------------------------- */

  const upcomingSessions =
    userSessions.filter(
      (session) =>
        session.status ===
        "upcoming"
    ).length;

  const completedSessions =
    userSessions.filter(
      (session) =>
        session.status ===
        "completed"
    ).length;

  const cancelledSessions =
    userSessions.filter(
      (session) =>
        session.status ===
        "cancelled"
    ).length;

  const totalSpent =
    userSessions.reduce(
      (total, session) =>
        total + session.amount,
      0
    );

  const totalHours =
    userSessions.reduce(
      (total, session) => {
        const minutes =
          parseInt(
            session.duration
          ) || 0;

        return (
          total +
          Math.round(
            minutes / 60
          )
        );
      },
      0
    );

  /* -------------------------------- */
  /* Upcoming Session                 */
  /* -------------------------------- */

  const upcomingSession =
    useMemo(() => {
      return (
        userSessions.find(
          (session) =>
            session.status ===
            "upcoming"
        ) || null
      );
    }, []);

  /* -------------------------------- */
  /* Filtering                        */
  /* -------------------------------- */

  const filteredSessions =
    useMemo(() => {
      return userSessions.filter(
        (session) => {
          const matchesSearch =
            session.mentorName
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            session.mentorCompany
              .toLowerCase()
              .includes(
                search.toLowerCase()
              ) ||
            session.sessionType
              .toLowerCase()
              .includes(
                search.toLowerCase()
              );

          const matchesFilter =
            selectedFilter ===
            "all"
              ? true
              : session.status ===
                selectedFilter;

          return (
            matchesSearch &&
            matchesFilter
          );
        }
      );
    }, [
      search,
      selectedFilter,
    ]);

  /* -------------------------------- */
  /* Actions                          */
  /* -------------------------------- */

  const handleView = (
    session: Session
  ) => {
    setSelectedSession(
      session
    );

    setDetailsOpen(true);
  };

  const handleReschedule =
    (
      session: Session
    ) => {
      setSelectedSession(
        session
      );

      setRescheduleOpen(true);
    };

  const handleCancel = (
    session: Session
  ) => {
    setSelectedSession(
      session
    );

    setCancelOpen(true);
  };

  const handleJoin = (
    session: Session
  ) => {
    window.open(
      session.meetingLink,
      "_blank"
    );
  };

  const handleSaveReschedule =
    (
      sessionId: string,
      date: string,
      time: string
    ) => {
      console.log(
        "Reschedule:",
        sessionId,
        date,
        time
      );

      setRescheduleOpen(false);
    };

  const handleConfirmCancel =
    (
      sessionId: string
    ) => {
      console.log(
        "Cancel:",
        sessionId
      );

      setCancelOpen(false);
    };

  const handleBrowseMentors =
    () => {
      navigate("/mentors");
    };

  return (
    <div
      className="
        max-w-7xl
        mx-auto

        space-y-8
      "
    >
      {/* Header */}

      <SessionsHeader
        totalSessions={
          userSessions.length
        }
      />

      {/* Stats */}

      <SessionsStats
        upcomingSessions={
          upcomingSessions
        }
        completedSessions={
          completedSessions
        }
        cancelledSessions={
          cancelledSessions
        }
        totalSpent={
          totalSpent
        }
        totalHours={
          totalHours
        }
      />

      {/* Upcoming Banner */}

      <UpcomingSessionBanner
        session={
          upcomingSession
        }
        onJoin={handleJoin}
        onReschedule={
          handleReschedule
        }
      />

      {/* Toolbar */}

      <SessionsToolbar
        search={search}
        setSearch={setSearch}
        view={view}
        setView={setView}
        selectedFilter={
          selectedFilter
        }
        setSelectedFilter={
          setSelectedFilter
        }
      />

      {/* Empty */}

      {filteredSessions.length ===
      0 ? (
        <EmptySessions
          onBrowseMentors={
            handleBrowseMentors
          }
        />
      ) : (
        <>
          {/* Grid */}

          {view === "grid" && (
            <div
              className="
                grid

                md:grid-cols-2
                xl:grid-cols-3

                gap-6
              "
            >
              {filteredSessions.map(
                (session) => (
                  <SessionGridCard
                    key={
                      session.id
                    }
                    session={
                      session
                    }
                    onView={
                      handleView
                    }
                    onReschedule={
                      handleReschedule
                    }
                    onCancel={
                      handleCancel
                    }
                    onJoin={
                      handleJoin
                    }
                  />
                )
              )}
            </div>
          )}

          {/* List */}

          {view === "list" && (
            <div
              className="
                space-y-6
              "
            >
              {filteredSessions.map(
                (session) => (
                  <SessionListCard
                    key={
                      session.id
                    }
                    session={
                      session
                    }
                    onView={
                      handleView
                    }
                    onReschedule={
                      handleReschedule
                    }
                    onCancel={
                      handleCancel
                    }
                    onJoin={
                      handleJoin
                    }
                  />
                )
              )}
            </div>
          )}
        </>
      )}

      {/* Details */}

      <SessionDetailsModal
        open={detailsOpen}
        session={
          selectedSession
        }
        onClose={() =>
          setDetailsOpen(false)
        }
        onJoin={handleJoin}
      />

      {/* Reschedule */}

      <RescheduleSessionModal
        open={rescheduleOpen}
        session={
          selectedSession
        }
        onClose={() =>
          setRescheduleOpen(false)
        }
        onSave={
          handleSaveReschedule
        }
      />

      {/* Cancel */}

      <CancelSessionDialog
        open={cancelOpen}
        session={
          selectedSession
        }
        onClose={() =>
          setCancelOpen(false)
        }
        onConfirm={
          handleConfirmCancel
        }
      />
    </div>
  );
};

export default MySessions;
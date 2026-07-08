import type {
  AdminCMSPage,
} from "@/types/admin-cms";

import CMSGridCard from "./CMSGridCard";

interface CMSGridProps {
  pages: AdminCMSPage[];

  onView: (
    page: AdminCMSPage
  ) => void;

  onEdit: (
    page: AdminCMSPage
  ) => void;

  onDelete: (
    page: AdminCMSPage
  ) => void;
}

export default function CMSGrid({
  pages,
  onView,
  onEdit,
  onDelete,
}: CMSGridProps) {
  return (
    <section className="grid gap-6 md:grid-cols-2 2xl:grid-cols-3">

      {pages.map((page) => (

        <CMSGridCard
          key={page.id}
          page={page}
          onView={onView}
          onEdit={onEdit}
          onDelete={onDelete}
        />

      ))}

    </section>
  );
}
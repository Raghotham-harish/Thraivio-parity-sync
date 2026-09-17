import { useState } from "react";
import { ChevronDown, Pencil, Trash2 } from "lucide-react";

import type { FAQ } from "@/types/faq";

interface FAQListCardProps {
  faq: FAQ;

  onEdit: (faq: FAQ) => void;

  onDelete: (faq: FAQ) => void;
}

const FAQListCard = ({ faq, onEdit, onDelete }: FAQListCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-xl border border-border bg-card px-4 py-3 shadow-sm transition-colors hover:bg-secondary/40">
      <div className="flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex min-w-0 flex-1 items-center gap-2 text-left"
        >
          <ChevronDown
            className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
          <h3 className="min-w-0 truncate text-sm font-semibold text-foreground">
            {faq.question}
          </h3>
        </button>
        <div className="flex shrink-0 items-center gap-1.5">
          <button
            type="button"
            onClick={() => onEdit(faq)}
            aria-label="Edit FAQ"
            title="Edit"
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <Pencil className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => onDelete(faq)}
            aria-label="Delete FAQ"
            title="Delete"
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-[#FFDAD6] hover:text-red-600"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      {isOpen && (
        <p className="mt-2 pl-6 text-sm text-muted-foreground">{faq.answer}</p>
      )}
    </div>
  );
};

export default FAQListCard;

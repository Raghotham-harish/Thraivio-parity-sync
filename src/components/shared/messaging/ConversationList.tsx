import { Search } from "lucide-react";

import type { Conversation } from "@/types/message";

interface ConversationListProps {
  conversations: Conversation[];
  activeId: string | null;
  onSelect: (conversation: Conversation) => void;
  search: string;
  onSearchChange: (value: string) => void;
  /** Hides the list on mobile once a thread is open (single-pane behavior). */
  hiddenOnMobile?: boolean;
}

export function ConversationList({
  conversations,
  activeId,
  onSelect,
  search,
  onSearchChange,
  hiddenOnMobile = false,
}: ConversationListProps) {
  return (
    <div
      className={`flex w-full shrink-0 flex-col border-r border-border bg-card lg:w-80 ${
        hiddenOnMobile ? "hidden lg:flex" : "flex"
      }`}
    >
      <div className="border-b border-border p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search messages..."
            className="w-full rounded-lg border border-border bg-background py-2 pl-9 pr-3 text-sm outline-none focus:border-primary"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {conversations.map((conversation) => (
          <button
            key={conversation.id}
            type="button"
            onClick={() => onSelect(conversation)}
            className={`flex w-full items-start gap-3 border-b border-border px-4 py-3 text-left transition-colors hover:bg-secondary/60 ${
              activeId === conversation.id ? "bg-secondary" : ""
            }`}
          >
            <img
              src={conversation.participantAvatar}
              alt={conversation.participantName}
              className="h-10 w-10 shrink-0 rounded-full object-cover"
            />
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <p className="truncate text-sm font-semibold text-foreground">
                  {conversation.participantName}
                </p>
                <span className="shrink-0 text-[11px] text-muted-foreground">
                  {conversation.lastMessageAt}
                </span>
              </div>
              <p className="truncate text-xs text-muted-foreground">{conversation.participantSubtitle}</p>
              <div className="mt-1 flex items-center justify-between gap-2">
                <p className="truncate text-xs text-muted-foreground">{conversation.lastMessage}</p>
                {conversation.unreadCount > 0 && (
                  <span className="flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full bg-primary px-1.5 text-[10px] font-bold text-white">
                    {conversation.unreadCount}
                  </span>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ConversationList;

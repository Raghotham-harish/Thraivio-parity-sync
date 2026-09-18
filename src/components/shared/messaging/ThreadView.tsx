import { useState } from "react";
import { ArrowLeft, Send } from "lucide-react";

import type { Conversation, Message } from "@/types/message";

interface ThreadViewProps {
  conversation: Conversation;
  messages: Message[];
  onSend: (body: string) => void;
  onBack: () => void;
}

export function ThreadView({ conversation, messages, onSend, onBack }: ThreadViewProps) {
  const [draft, setDraft] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!draft.trim()) return;
    onSend(draft.trim());
    setDraft("");
  };

  return (
    <div className="flex h-full min-w-0 flex-1 flex-col bg-card">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-border p-4">
        <button
          type="button"
          onClick={onBack}
          aria-label="Back to conversations"
          className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-secondary lg:hidden"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <img
          src={conversation.participantAvatar}
          alt={conversation.participantName}
          className="h-9 w-9 rounded-full object-cover"
        />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">
            {conversation.participantName}
          </p>
          <p className="truncate text-xs text-muted-foreground">{conversation.participantSubtitle}</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex flex-1 flex-col justify-end gap-3 overflow-y-auto p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm ${
                message.sender === "me"
                  ? "rounded-br-sm bg-primary text-white"
                  : "rounded-bl-sm bg-secondary text-foreground"
              }`}
            >
              <p className="leading-6">{message.body}</p>
              <p
                className={`mt-1 text-[10px] ${
                  message.sender === "me" ? "text-white/70" : "text-muted-foreground"
                }`}
              >
                {message.sentAt}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Composer */}
      <form onSubmit={handleSend} className="flex items-center gap-2 border-t border-border p-3">
        <input
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
        />
        <button
          type="submit"
          disabled={!draft.trim()}
          aria-label="Send message"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}

export default ThreadView;

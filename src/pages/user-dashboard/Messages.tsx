import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import type { Conversation, Message } from "@/types/message";

import { ConversationList } from "@/components/shared/messaging/ConversationList";
import { ThreadView } from "@/components/shared/messaging/ThreadView";
import { EmptyThread } from "@/components/shared/messaging/EmptyThread";

const initialConversations: Conversation[] = [
  {
    id: "c1",
    participantName: "Sarah Johnson",
    participantAvatar: "https://i.pravatar.cc/150?img=47",
    participantSubtitle: "Senior Product Mentor · Google",
    lastMessage: "Great progress on the mock interview!",
    lastMessageAt: "9:15 AM",
    unreadCount: 1,
  },
  {
    id: "c2",
    participantName: "Michael Lee",
    participantAvatar: "https://i.pravatar.cc/150?img=51",
    participantSubtitle: "Engineering Mentor · Microsoft",
    lastMessage: "Sounds good, see you Thursday.",
    lastMessageAt: "Mon",
    unreadCount: 0,
  },
];

const initialMessages: Message[] = [
  { id: "m1", conversationId: "c1", sender: "me", body: "Hi Sarah, thanks again for the session yesterday!", sentAt: "9:02 AM" },
  { id: "m2", conversationId: "c1", sender: "them", body: "Great progress on the mock interview!", sentAt: "9:15 AM" },
  { id: "m3", conversationId: "c2", sender: "them", body: "Sounds good, see you Thursday.", sentAt: "Mon" },
];

const UserMessages = () => {
  const [searchParams] = useSearchParams();
  const [conversations, setConversations] = useState(initialConversations);
  const [messages, setMessages] = useState(initialMessages);
  const [search, setSearch] = useState("");
  const [activeId, setActiveId] = useState<string | null>(null);

  const filteredConversations = useMemo(
    () =>
      conversations.filter((c) =>
        c.participantName.toLowerCase().includes(search.toLowerCase()),
      ),
    [conversations, search],
  );

  const activeConversation = conversations.find((c) => c.id === activeId) ?? null;
  const activeMessages = messages.filter((m) => m.conversationId === activeId);

  const handleSelect = (conversation: Conversation) => {
    setActiveId(conversation.id);
    setConversations((prev) =>
      prev.map((c) => (c.id === conversation.id ? { ...c, unreadCount: 0 } : c)),
    );
  };

  // If arriving via a "Message" button elsewhere (e.g. Saved Mentors), preselect that mentor's thread.
  useEffect(() => {
    const withName = searchParams.get("with");
    if (!withName) return;
    const match = conversations.find(
      (c) => c.participantName.toLowerCase() === withName.toLowerCase(),
    );
    if (match) handleSelect(match);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handleSend = (body: string) => {
    if (!activeId) return;
    const newMessage: Message = {
      id: Date.now().toString(),
      conversationId: activeId,
      sender: "me",
      body,
      sentAt: "Just now",
    };
    setMessages((prev) => [...prev, newMessage]);
    setConversations((prev) =>
      prev.map((c) => (c.id === activeId ? { ...c, lastMessage: body, lastMessageAt: "Just now" } : c)),
    );
  };

  return (
    <div className="-m-4 flex h-[calc(100vh-5rem)] overflow-hidden rounded-none border border-border lg:-m-8 lg:h-[calc(100vh-5rem)] lg:rounded-2xl">
      <ConversationList
        conversations={filteredConversations}
        activeId={activeId}
        onSelect={handleSelect}
        search={search}
        onSearchChange={setSearch}
        hiddenOnMobile={activeConversation !== null}
      />

      {activeConversation ? (
        <ThreadView
          conversation={activeConversation}
          messages={activeMessages}
          onSend={handleSend}
          onBack={() => setActiveId(null)}
        />
      ) : (
        <EmptyThread />
      )}
    </div>
  );
};

export default UserMessages;

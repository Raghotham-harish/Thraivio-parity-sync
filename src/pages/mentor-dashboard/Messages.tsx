import { useMemo, useState } from "react";

import type { Conversation, Message } from "@/types/message";

import { ConversationList } from "@/components/shared/messaging/ConversationList";
import { ThreadView } from "@/components/shared/messaging/ThreadView";
import { EmptyThread } from "@/components/shared/messaging/EmptyThread";

const initialConversations: Conversation[] = [
  {
    id: "c1",
    participantName: "Rahul Sharma",
    participantAvatar: "https://i.pravatar.cc/150?img=13",
    participantSubtitle: "Student",
    lastMessage: "Thanks for the feedback on my resume!",
    lastMessageAt: "10:24 AM",
    unreadCount: 2,
  },
  {
    id: "c2",
    participantName: "Priya Patel",
    participantAvatar: "https://i.pravatar.cc/150?img=32",
    participantSubtitle: "Student",
    lastMessage: "Can we move Thursday's session to Friday?",
    lastMessageAt: "Yesterday",
    unreadCount: 0,
  },
];

const initialMessages: Message[] = [
  { id: "m1", conversationId: "c1", sender: "them", body: "Hi! Just wanted to say thanks for the mock interview session.", sentAt: "10:02 AM" },
  { id: "m2", conversationId: "c1", sender: "me", body: "Glad it was useful! You did really well on the system design part.", sentAt: "10:10 AM" },
  { id: "m3", conversationId: "c1", sender: "them", body: "Thanks for the feedback on my resume!", sentAt: "10:24 AM" },
  { id: "m4", conversationId: "c2", sender: "them", body: "Can we move Thursday's session to Friday?", sentAt: "Yesterday" },
];

const MentorMessages = () => {
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

export default MentorMessages;

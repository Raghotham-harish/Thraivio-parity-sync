export interface Conversation {
  id: string;

  participantName: string;

  participantAvatar: string;

  /** Role/company line shown under the name, e.g. "Senior PM at Google" or "Student". */
  participantSubtitle: string;

  lastMessage: string;

  lastMessageAt: string;

  unreadCount: number;
}

export interface Message {
  id: string;

  conversationId: string;

  sender: "me" | "them";

  body: string;

  sentAt: string;
}

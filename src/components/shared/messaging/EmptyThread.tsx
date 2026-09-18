import chatIllustration from "@/assets/illustrations/chat.svg";

/** Shown on desktop's right pane when no conversation is selected yet. */
export function EmptyThread() {
  return (
    <div className="hidden flex-1 flex-col items-center justify-center gap-3 bg-card p-8 text-center lg:flex">
      <img src={chatIllustration} alt="" className="h-40 w-auto" />
      <h3 className="text-lg font-semibold text-foreground">Select a conversation</h3>
      <p className="max-w-xs text-sm text-muted-foreground">
        Choose a conversation from the list to view messages.
      </p>
    </div>
  );
}

export default EmptyThread;

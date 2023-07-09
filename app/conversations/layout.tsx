import getConversations from "../actions/getConversations";
import ConversationList from "../components/ConversationList";
import Sidebar from "../components/sidebar/Sidebar";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const covnersations = await getConversations();

  return (
    // @ts-expect-error
    <Sidebar>
      <div className="h-full">
        <ConversationList initialItems={covnersations} />
        {children}
      </div>
    </Sidebar>
  );
}

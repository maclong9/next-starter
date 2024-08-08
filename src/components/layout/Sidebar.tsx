import { getUserAuth } from "@/lib/auth/utils";
import { NavigationContent } from "./NavigationContent";

const Sidebar = async () => {
  const session = await getUserAuth();

  return (
    <aside className="h-screen min-w-52 bg-card hidden md:block p-4 pt-8 border-r border-border shadow-inner">
      <div className="flex flex-col justify-between h-full">
        <NavigationContent session={session} />
      </div>
    </aside>
  );
};

export default Sidebar;
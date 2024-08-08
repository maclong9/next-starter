import { getUserAuth } from "@/lib/auth/utils";
import SidebarItems from "./SidebarItems";
import UserDetails from "./UserDetails";

const Sidebar = async () => {
  const session = await getUserAuth();

  return (
    <aside className="h-screen min-w-52 bg-card hidden md:block p-4 pt-8 border-r border-border shadow-inner">
      <div className="flex flex-col justify-between h-full">
        <div className="space-y-4">
          <h3 className="text-lg border-b w-full pb-2 font-semibold">Logo</h3>
          <SidebarItems />
        </div>
        <UserDetails session={session} />
      </div>
    </aside>
  );
};

export default Sidebar;
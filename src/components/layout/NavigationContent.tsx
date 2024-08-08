import { AuthSession } from "@/lib/auth/utils"
import SidebarItems from "./SidebarItems"
import UserDetails from "./UserDetails"

export const NavigationContent = ({ session, setOpen }: { session: AuthSession, setOpen?: (open: boolean) => void }) => (
  <>
    <div className="flex-grow space-y-4 mt-8">
      <SidebarItems closeSheet={setOpen} />
      {/* {session.role === "admin" && (
        <Link href="/admin/users" className="block text-sm font-medium text-gray-700">
          Manage Users
        </Link>
      )} */}
    </div>
    <UserDetails session={session} closeSheet={setOpen} />
  </>
)
import { getUserAuth } from "@/lib/auth/utils";
import NavbarSheet from "./NavbarSheet";

export default async function Navbar() {
  const session = await getUserAuth();

  return (
    <div className="md:hidden border-b mb-4 pb-2 w-full">
      <nav className="flex justify-between w-full items-center">
        <div className="font-semibold text-lg">Logo</div>
        <NavbarSheet session={session} />
      </nav>
    </div>
  );
}

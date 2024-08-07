import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function Modal({
  title,
  open,
  setOpen,
  children,
}: {
  title?: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader className="px-5 pt-5">
            <DialogTitle>{title ?? "Modal"}</DialogTitle>
          </DialogHeader>
          <div className="px-5 pb-5">{children}</div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent>
        <DrawerHeader className="px-5 pt-5">
          <DrawerTitle>{title ?? "Modal"}</DrawerTitle>
        </DrawerHeader>
        <div className="px-5 pb-5">{children}</div>
      </DrawerContent>
    </Drawer>
  );
}

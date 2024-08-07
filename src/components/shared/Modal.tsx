import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

export default function Modal({
  title,
  open,
  setOpen,
  children,
  full = false,
  headerContent,
}: {
  title?: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  full?: boolean;
  headerContent?: React.ReactNode;
}) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const renderHeader = () => (
    <>
      {title && <DialogTitle>{title}</DialogTitle>}
      {headerContent}
    </>
  );

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className={cn(
          "flex",
          full ? "w-[95vw] h-[95vh] max-w-[95vw]" : "flex-col"
        )}>
          {full ? (
            <>
              <DialogHeader className="w-64 p-5 border-r">
                {renderHeader()}
              </DialogHeader>
              <div className="flex-1 p-5 overflow-auto">{children}</div>
            </>
          ) : (
            <>
              <DialogHeader className="px-5 pt-5">
                {renderHeader()}
              </DialogHeader>
              <div className="px-5 pb-5 overflow-y-scroll">{children}</div>
            </>
          )}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent className={cn("flex flex-col", full && "h-[95vh]")}>
        <DrawerHeader className={cn("px-5 pt-5", full && "border-b")}>
          {renderHeader()}
        </DrawerHeader>
        <div className={cn("px-5 py-5", full && "flex-1 overflow-auto")}>
          {children}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
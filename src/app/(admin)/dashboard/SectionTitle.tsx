import { BackButton } from "@/components/shared/BackButton";

export const SectionTitle = ({
  title,
  currentResource,
}: {
  title: string;
  currentResource: string;
}) => {
  return (
    <h1 className="font-semibold my-4 flex items-center gap-1">
      <BackButton currentResource={currentResource} />
      {title}
    </h1>
  );
};
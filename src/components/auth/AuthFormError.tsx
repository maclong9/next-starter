import { useToast } from "@/components/ui/use-toast";

export default function AuthFormError({ state }: { state: { error: string } }) {
  const { toast } = useToast();
  console.log(state.error);


  return null;
}
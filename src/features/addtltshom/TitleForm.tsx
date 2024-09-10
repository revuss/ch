import { useForm } from "@tanstack/react-form";

export interface TitleFormValues {
  title: string;
  section: {
    heading: string;
    subheading: string;
    questions: string[];
  }[];
}

export function useTitleForm() {
  const form = useForm<TitleFormValues>({
    defaultValues: {
      title: "",
      section: [{ heading: "", subheading: "", questions: [] }],
    },

    onSubmit: async ({ value }) => {
      console.log("val:", value);
    },
  });
  return { form };
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormApi, useForm } from "@tanstack/react-form";
import { useUserLogin } from "./loginHook";

interface LoginValues {
  email: string;
  password: string;
}

export const useLoginForm = (): {
  form: FormApi<LoginValues>;
  gettingUser: boolean;
} => {
  const { gettingUser, getUser } = useUserLogin();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },

    onSubmit: async ({ value }) => {
      getUser(value);
    },
  });

  return { form, gettingUser };
};

export default useLoginForm;

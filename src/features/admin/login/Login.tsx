import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Container } from "@/ui/sidenav/Container";
import { CREATEACCOUNT, LOGIN, REGISTER } from "@/utils/appConstants";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import useLoginForm from "./loginForm";
import { Field } from "@tanstack/react-form";
import AppLoader from "@/ui/AppLoader";
import { PageTransition } from "@/ui/transition/PageTransition";

function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { form, gettingUser } = useLoginForm();
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  if (gettingUser) {
    return <AppLoader />;
  }

  return (
    <>
      <PageTransition>
        <Container>
          <div className="px-4  min-h-[80vh] justify-center flex flex-col">
            <h1 className="text-3xl font-semibold py-5 flex flex-col ">
              Secure Access to Your Payments Hub
            </h1>
            <p className="text-lg py-5 tracking-wider">
              Log in to application to manage payments, view transactions, and
              handle financial tasks with ease. Our secure platform ensures that
              your financial information remains protected while providing a
              seamless experience for all your banking needs.
            </p>
            <div className="w-full md:w-[40%] flex flex-col justify-center py-10 mx-auto">
              <CardContent>
                <form
                  onSubmit={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                  }}
                >
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-2">
                      <Field
                        form={form}
                        name="email"
                        validators={{
                          onChange: ({ value }) => {
                            if (!/\S+@\S+\.\S+/.test(value)) {
                              return "Invalid email";
                            }
                          },
                        }}
                        children={(field) => (
                          <>
                            <Input
                              id="email"
                              placeholder="Email"
                              value={field.state.value}
                              onChange={(e) =>
                                field.handleChange(e.target.value)
                              }
                              className="w-full py-6"
                            />{" "}
                            {field.state.meta.errors && (
                              <div className="text-sm mx-1 mt-1 mb-5 text-red-500">
                                {field.state.meta.errors}
                              </div>
                            )}
                          </>
                        )}
                      />
                    </div>
                    <div className="flex flex-col space-y-2 ">
                      <Field
                        form={form}
                        name="password"
                        validators={{
                          onChange: ({ value }) => {
                            if (value.length < 8) {
                              return "Too short";
                            }
                          },
                        }}
                        children={(field) => (
                          <>
                            <div className="relative flex items-center w-full">
                              <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                value={field.state.value}
                                onChange={(e) =>
                                  field.handleChange(e.target.value)
                                }
                                placeholder="password"
                                className="py-6 pr-10 w-full "
                              />{" "}
                              <button
                                type="button"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                onClick={togglePasswordVisibility}
                              >
                                {showPassword ? <EyeOff /> : <Eye />}
                              </button>
                            </div>

                            {field.state.meta.errors && (
                              <div className="relative text-sm mx-1 mt-1 mb-5 text-red-500">
                                {field.state.meta.errors}
                              </div>
                            )}
                          </>
                        )}
                      />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full font-bold py-6"
                  onClick={form.handleSubmit}
                  type="button"
                >
                  {LOGIN}
                </Button>
              </CardFooter>
              <p className=" mx-auto text-sm">
                {CREATEACCOUNT},{" "}
                <span className="font-bold cursor-pointer">{REGISTER}</span>
              </p>
            </div>
          </div>
        </Container>
      </PageTransition>
    </>
  );
}

export default Login;

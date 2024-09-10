import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useAddService } from "../addtltshom/titleHook";
import { useEffect } from "react";

interface ServiceFormData {
  service: string;
}
function ServiceForm() {
  const { addService, isSuccess, error, isError } = useAddService();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ServiceFormData>();

  function onSubmit(data: ServiceFormData) {
    const payload = { serviceName: data.service };
    console.log("Payload being sent:", payload);
    addService(payload);
  }

  useEffect(() => {
    if (isSuccess) {
      console.log("Service added successfully!");
      reset();
    }
    if (isError) {
      console.log("Error:", error);
    }
  }, [isSuccess, isError, error, reset]);

  return (
    <div className="w-full p-5 border-2 rounded-lg mt-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label className="mx-2 font-medium">Service</Label>
        <Input
          type="text"
          autoComplete="off"
          id="service"
          {...register("service", { required: "Service name is required" })}
        />
        {errors.service && (
          <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
        )}
        <Button className="w-[90%] flex justify-center mx-auto mt-5">
          Add
        </Button>
      </form>
    </div>
  );
}

export default ServiceForm;

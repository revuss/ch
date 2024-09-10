/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormData } from "@/types/typeData";
import { useForm, useFieldArray } from "react-hook-form";
import { useAddTitle } from "./titleHook";
import { useEffect } from "react";

function FormTitle() {
  const { control, handleSubmit, register, reset } = useForm<FormData>({
    defaultValues: {
      title: "",
      sections: [
        {
          heading: "",
          sub_heading: "",
          questions: [""],
        },
      ],
    },
  });

  const {
    fields: sectionFields,
    append: appendSection,
    remove: removeSection,
  } = useFieldArray({
    control,
    name: "sections",
  });

  const { addTitle, isSuccess, isError, error } = useAddTitle();

  const onSubmit = (data: any) => {
    console.log("Submitted data:", data);
    addTitle(data);
    console.log();
  };

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
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full space-y-5 border-2 px-10 py-10 rounded-lg mt-10"
      >
        <div>
          <Label htmlFor="title">Title</Label>
          <Input {...register("title")} id="title" placeholder="Enter title" />
        </div>

        {sectionFields.map((section, sectionIndex) => (
          <div key={section.id} className="section space-y-2">
            {/* Heading */}
            <div>
              <Label htmlFor={`sections.${sectionIndex}.heading`}>
                Heading
              </Label>
              <Input
                {...register(`sections.${sectionIndex}.heading`)}
                placeholder="Enter heading"
              />
            </div>

            <div>
              <Label htmlFor={`sections.${sectionIndex}.sub_heading`}>
                Sub Heading
              </Label>
              <Input
                {...register(`sections.${sectionIndex}.sub_heading`)}
                placeholder="Enter subheading"
              />
            </div>

            <div>
              <h4 className="font-semibold">Links</h4>
              <QuestionsFieldArray
                sectionIndex={sectionIndex}
                control={control}
                register={register}
              />
            </div>

            <Button type="button" onClick={() => removeSection(sectionIndex)}>
              Remove Section
            </Button>
          </div>
        ))}

        {/* Add Section */}
        <div className="flex justify-between">
          <Button
            type="button"
            onClick={() =>
              appendSection({
                heading: "",
                sub_heading: "",
                questions: [""],
              })
            }
          >
            Add Section
          </Button>

          <Button type="submit">Submit</Button>
        </div>
      </form>
    </>
  );
}

export default FormTitle;
interface QuestionsFieldArrayProps {
  sectionIndex: number;
  control: any;
  register: any;
}

const QuestionsFieldArray: React.FC<QuestionsFieldArrayProps> = ({
  sectionIndex,
  control,
  register,
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `sections.${sectionIndex}.questions`,
  });

  return (
    <div>
      {fields.map((field, index) => (
        <div key={field.id} className="question space-y-3 mb-5">
          <Label htmlFor={`sections.${sectionIndex}.questions.${index}`}>
            Link {index + 1}
          </Label>
          <div className="flex space-x-5">
            <Input
              {...register(`sections.${sectionIndex}.questions.${index}`)}
              placeholder="Enter question"
            />
            <Button
              className="bg-red-600 hover:bg-red-400"
              type="button"
              onClick={() => remove(index)}
            >
              Remove Link
            </Button>
          </div>
        </div>
      ))}

      <Button type="button" onClick={() => append("")}>
        Add Link
      </Button>
    </div>
  );
};

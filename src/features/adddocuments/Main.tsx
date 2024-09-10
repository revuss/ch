/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm, useFieldArray } from "react-hook-form";

type KeyValue = {
  key: string;
  value: string;
};

type FormValues = {
  titleHeading: string;
  type: string;
  heading: string;
  paragraphs: any[];
  request: {
    URL: string;
    Method: string;
  };
  body: {
    text: string;
    details: {
      username: string;
      password: string;
      email: string;
    };
  };
  headers?: KeyValue[];
  params?: KeyValue[];
  response: { [key: string]: any };
};

function Main() {
  const { register, handleSubmit, control, reset, getValues } =
    useForm<FormValues>({
      defaultValues: {
        titleHeading: "",
        type: "",
        heading: "",
        paragraphs: [""],
        request: {
          URL: "",
          Method: "",
        },
        body: {
          text: "",
          details: {
            username: "",
            password: "",
            email: "",
          },
        },
        headers: [{ key: "", value: "" }],
        params: [{ key: "", value: "" }],
        response: {},
      },
    });

  const {
    fields: paragraphFields,
    append: appendParagraph,
    remove: removeParagraph,
  } = useFieldArray({
    control,
    name: "paragraphs",
  });
  const { fields: headerFields, append: appendHeader } = useFieldArray({
    control,
    name: "headers",
  });

  const { fields: paramFields, append: appendParam } = useFieldArray({
    control,
    name: "params",
  });

  const handleAddResponseKey = (key: string, value: any) => {
    const newResponse = { ...getValues("response"), [key]: value };
    reset({ ...getValues(), response: newResponse });
  };
  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label>Main Heading</Label>
          <Input {...register("titleHeading")} />
        </div>

        <div>
          <Label>Category</Label>
          <Input {...register("type")} />
        </div>

        <div>
          <Label>Nav Name</Label>
          <Input {...register("heading")} />
        </div>

        <div>
          <Label>Paragraphs</Label>

          {paragraphFields.map((item, index) => (
            <div key={item.id} style={{ display: "flex", gap: "10px" }}>
              <Textarea
                {...register(`paragraphs.${index}`)}
                placeholder={`Paragraph ${index + 1}`}
              />
              <Button type="button" onClick={() => removeParagraph(index)}>
                Remove
              </Button>
            </div>
          ))}
          <Button type="button" onClick={() => appendParagraph("")}>
            Add Paragraph
          </Button>
        </div>

        <div>
          <Label>Request URL</Label>
          <Input {...register("request.URL")} />
        </div>

        <div>
          <Label>Request Method</Label>
          <Input {...register("request.Method")} />
        </div>

        <div>
          <Label>Body</Label>
          <Textarea {...register("body.text")} />
          <label>Username</label>
          <input {...register("body.details.username")} />
          <label>Password</label>
          <input {...register("body.details.password")} />
          <label>Email</label>
          <input {...register("body.details.email")} />
        </div>

        <div>
          <label>Headers</label>
          {headerFields.map((item, index) => (
            <div key={item.id}>
              <input {...register(`headers.${index}.key`)} placeholder="Key" />
              <input
                {...register(`headers.${index}.value`)}
                placeholder="Value"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() => appendHeader({ key: "", value: "" })}
          >
            Add Header
          </button>
        </div>

        <div>
          <label>Params</label>
          {paramFields.map((item, index) => (
            <div key={item.id}>
              <input {...register(`params.${index}.key`)} placeholder="Key" />
              <input
                {...register(`params.${index}.value`)}
                placeholder="Value"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() => appendParam({ key: "", value: "" })}
          >
            Add Param
          </button>
        </div>

        <div>
          <label>Response (Status Code)</label>
          <input
            type="text"
            placeholder="Status Code"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const statusCode = e.currentTarget.value;
                handleAddResponseKey(statusCode, { description: "", data: {} });
              }
            }}
          />
          <div>
            {Object.keys(getValues("response")).map((key) => (
              <div key={key}>
                <label>{key}</label>
                <textarea
                  placeholder="Response Data"
                  onChange={(e) => handleAddResponseKey(key, e.target.value)}
                />
              </div>
            ))}
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Main;

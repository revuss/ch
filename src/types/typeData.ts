export type Respons = {
  _id: number;
  status: number;
  response: string;
  description: string;
};

export interface DocumentationItem {
  _id: string;
  type: string;
  required: boolean;
  definition: string;
  value: string;
}

export interface Section {
  heading: string;
  sub_heading: string;
  questions: string[];
}

export interface FormData {
  title: string;
  sections: Section[];
}

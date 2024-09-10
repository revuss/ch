export interface Question {
  question: string;
}

export interface Section {
  heading: string;
  sub_heading: string;
  questions: Question[];
}

export interface Title {
  title: string;
  sections: Section[];
}

export interface FormValues {
  titles: Title[];
}

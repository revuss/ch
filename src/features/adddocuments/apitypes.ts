/* eslint-disable @typescript-eslint/no-explicit-any */

export interface Response {
  [statusCode: string]: {
    status: number;
    [key: string]: any;
  };
}

export interface FormValues {
  titleHeading: string;
  type: string;
  heading: string;
  paragraphs: string[];
  request?: {
    URL: string;
    Method: string;
  };
  body?: { [key: string]: any };
  headers?: {
    [key: string]: {
      required: boolean;
      type: string;
      value: string;
      definition: string;
    };
  };
  params?: {
    [key: string]: {
      required: boolean;
      type: string;
      value: string;
      definition: string;
    };
  };
  requestH?: {
    CURL_Request: {
      request: string;
    };
  };
  response?: Response;
}

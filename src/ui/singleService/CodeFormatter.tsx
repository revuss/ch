// import SyntaxHighlighter from "react-syntax-highlighter";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface CodeFormatterProps {
  code: string;
  showLineNumbers?: boolean;
  theme?: string;
  language?: string;
}

function CodeFormatter({ code, language = "json" }: CodeFormatterProps) {
  return (
    <div>
      <SyntaxHighlighter
        customStyle={{
          padding: "16px",
          borderRadius: "5px",
          overflowY: "auto",
          overflowX: "hidden",
          maxHeight: "25vh",
        }}
        language={language}
        style={atomOneDark}
        wrapLongLines={true}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeFormatter;

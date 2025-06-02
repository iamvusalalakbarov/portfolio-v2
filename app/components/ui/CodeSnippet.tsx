import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import style from "react-syntax-highlighter/dist/esm/styles/prism/one-dark";

interface ICodeSnippetProps {
  codeString: string;
  showLineNumbers?: boolean;
}

const customStyle = {
  ...style,
  'pre[class*="language-"]': {
    ...style['pre[class*="language-"]'],
    margin: 0,
    padding: 0,
    background: "transparent",
  },
  'code[class*="language-"]': {
    ...style['code[class*="language-"]'],
    background: "transparent",
  },
};

const CodeSnippet: React.FC<ICodeSnippetProps> = (props) => {
  return (
    <SyntaxHighlighter
      language="javascript"
      style={customStyle}
      showLineNumbers={props.showLineNumbers}
    >
      {props.codeString}
    </SyntaxHighlighter>
  );
};

export default CodeSnippet;

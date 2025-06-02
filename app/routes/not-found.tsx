import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import style from "react-syntax-highlighter/dist/esm/styles/prism/one-dark";

export default function NotFound() {
  const codeString = `const page = findPage('you-were-looking-for');

if (!page) {
  console.log("Oops! Looks like you took a wrong turn in the codebase.");
  console.log("But hey, since you're here...");
  console.log("🔍 Go back to the homepage and explore more cool stuff!");
  throw new Error("404: PageNotFoundError 😢");
}

/* Suggestions:
 * - Check the URL for typos
 * - Use the site navigation
 * - Or hit CMD+Z in real life 😅
 */

redirect('home');`;

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

  return (
    <div className="h-full flex justify-center items-center">
      <div className="flex justify-center items-start gap-x-[146px]">
        <img src="/images/404.svg" alt="404" />

        <SyntaxHighlighter
          language="javascript"
          style={customStyle}
          showLineNumbers
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}

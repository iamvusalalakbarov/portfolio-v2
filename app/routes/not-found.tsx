import CodeSnippet from "~/components/ui/CodeSnippet";

const codeStringDesktop = `const page = findPage('you-were-looking-for');

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

const codeStringMobile = `throw new Error(
"404: PageNotFoundError 😢"
);

goBack() || goHome();`;

export default function NotFound() {
  return (
    <div className="h-full flex px-6 lg:px-0 lg:justify-center items-center">
      {/* Desktop */}
      <div className="hidden lg:flex justify-center items-start gap-x-[146px]">
        <img src="/images/404.svg" alt="404" />

        <CodeSnippet codeString={codeStringDesktop} showLineNumbers />
      </div>

      {/* Mobile */}
      <div className="space-y-10 lg:hidden">
        <img src="/images/404-mobile.svg" alt="404" />

        <CodeSnippet codeString={codeStringMobile} />
      </div>
    </div>
  );
}

export default function Hello() {
  return (
    <div className="flex justify-center items-center h-full gap-x-2.5 max-w-[1293px] mx-auto px-6 lg:px-0 max-md:bg-[url('/images/hello-bg-blur.png')] max-md:bg-cover max-md:bg-center max-md:bg-no-repeat">
      <div className="space-y-[75px]">
        <div className="space-y-1">
          <div className="text-lg">Hi all. I am</div>

          <div className="space-y-2">
            <h1 className="text-5xl lg:text-6xl text-slate-50">
              Micheal Weaver
            </h1>
            <h4 className="text-xl lg:text-3xl text-indigo-500">
              {">"} Front-end developer
            </h4>
          </div>
        </div>

        <code className="space-y-2">
          <div className="hidden lg:block">
            // complete the game to continue
          </div>
          <div>// find my profile on Github:</div>
          <div className="text-sm lg:text-base">
            <span className="text-indigo-500">const</span>{" "}
            <span className="text-teal-400">githubLink</span>{" "}
            <span className="text-slate-50">=</span>{" "}
            <span className="text-rose-300">
              “https://github.com/example/url”
            </span>
          </div>
        </code>
      </div>

      <div className="hidden bg-[url('/images/hello-bg-blur.png')] bg-contain bg-center bg-no-repeat h-full w-full flex-1 lg:flex justify-center items-center">
        <img src="/images/snake-game.png" alt="snake game" className="w-1/2" />
      </div>
    </div>
  );
}

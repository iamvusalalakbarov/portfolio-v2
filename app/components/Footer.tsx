import { RiGithubFill, RiTwitterXFill, RiLinkedinFill } from "@remixicon/react";

const socials = [
  {
    icon: RiTwitterXFill,
    link: "#",
  },
  {
    icon: RiLinkedinFill,
    link: "#",
  },
];

const Footer = () => {
  return (
    <footer className="mt-auto flex w-full border-t border-slate-700">
      <div className="flex justify-between w-full lg:w-fit">
        <div className="py-4 px-6 border-r border-slate-700 grow lg:grow-0">
          find me in:
        </div>

        <div className="flex">
          {socials.map((social, index) => (
            <a
              key={index}
              href="#"
              className="p-4 text-slate-500 border-r border-slate-700 hover:text-slate-300 custom-transition"
            >
              <social.icon />
            </a>
          ))}
        </div>
      </div>

      <div className="lg:border-l border-slate-700 lg:ml-auto">
        <a
          href="#"
          className="flex justify-center items-center gap-x-2 p-4 lg:px-8 hover:text-slate-300 custom-transition group"
        >
          <span className="hidden lg:inline">@username</span>
          <RiGithubFill className="text-slate-500 group-hover:text-slate-300 custom-transition" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

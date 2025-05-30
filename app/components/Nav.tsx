import MenuItem from "~/components/ui/MenuItem";

const navMenuItems = [
  {
    title: "_hello",
    link: "/",
  },
  {
    title: "_about-me",
    link: "/about-me",
  },
  {
    title: "_projects",
    link: "/projects",
  },
];

const Nav = () => {
  return (
    <nav className="flex border-x border-slate-700 divide-x divide-slate-700">
      {navMenuItems.map((navMenuItem, index) => (
        <MenuItem key={index} link={navMenuItem.link}>
          {navMenuItem.title}
        </MenuItem>
      ))}
    </nav>
  );
};

export default Nav;

import useNavigation from "../hooks/useNavigation";
import Link from "./Link";

function Sidebar() {
  const links = [
    { label: "Dropdown", path: "/" },
    { label: "Accordion", path: "/accordion" },
    { label: "Button", path: "/button" },
    { label: "Modal", path: "/modal" },
    { label: "Table", path: "/table" },
    { label: "Counter", path: "/counter" },
  ];

  const { currentPath } = useNavigation();

  const renderedLinks = links.map((link) => {
    let activeStyles = "";
    if (currentPath === link.path) {
      activeStyles = "font-bold border-l-4 border-blue-500 pl-2";
    }
    return (
      <Link key={link.label} to={link.path} className={`mb-3 ${activeStyles}`}>
        {link.label}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 flex flex-col items-start">
      {renderedLinks}
    </div>
  );
}

export default Sidebar;

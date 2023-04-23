import useNavigation from "../hooks/useNavigation";

function Link({ to, children, className }) {
  const { navigate } = useNavigation();
  const handleClick = (e) => {
    if(e.metaKey || e.crtlKey) {
      return;
    }
    e.preventDefault();

    navigate(to);
  };



  return <a className={`${className} text-blue-500`} href={to} onClick={handleClick}>{children}</a>;
}

export default Link;

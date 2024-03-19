import logo from "../imgs/omur.svg";
export const Logo = (props) => {
  return (
    <>
      <a href="/" aria-label="main-page-link" className="flex items-center">
        {props.type === "footer" ? (
          <img src={logo} className="h-[150px]" alt="" />
        ) : (
          <img src={logo} className="h-20" alt="" />
        )}
      </a>
    </>
  );
};

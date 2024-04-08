import { HeaderProps } from "../../models/components/Header";
import "./Header.css";

const Header = ({ text }: HeaderProps) => {
  return <h1 className="header-margin-top header-styling">{text}</h1>;
};

export default Header;

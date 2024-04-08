import { ButtonProps } from "../../models/components/Button";

const Button = ({ func, text, cssClasses }: ButtonProps) => {
  return (
    <>
      <button className={cssClasses?.join(" ")} onClick={func}>
        {text}
      </button>
    </>
  );
};

export default Button;

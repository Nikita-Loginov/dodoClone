import "./index.scss"

interface ButtonProps {
  type: "button" | "submit" | "reset";
  ariaLabel: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type, children, ariaLabel }) => {
  return (
    <button className="button" type={type} aria-label={ariaLabel}>
      {children}
    </button>
  );
};

export default Button;

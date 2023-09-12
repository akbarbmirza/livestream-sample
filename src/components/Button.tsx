import { FC, ReactNode } from "react";
type ButtonPropsVariant = "inverse" | "positive" | "primary" | "secondary";
interface ButtonProps {
  variant?: ButtonPropsVariant;
  iconEnd?: ReactNode;
  iconStart?: ReactNode;
}
const Button: FC<ButtonProps> = ({
  variant = "primary",
  iconEnd,
  iconStart,
  children,
}) => (
  <button>
    {children}
    {iconEnd}
    {iconStart}
  </button>
);

export default Button;

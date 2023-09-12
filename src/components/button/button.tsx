import { FC, ReactNode } from "react";
type ButtonPropsVariant = "inverse" | "positive" | "primary" | "secondary";
interface ButtonProps {
  variant?: ButtonPropsVariant;
  iconEnd?: ReactNode;
  iconStart?: ReactNode;
}
const Button: FC<ButtonProps> = ({
  variant = "primary",
  iconEnd = <Placeholder />,
  iconStart = <Placeholder />,
  children,
}) => (
  <>
    {children}
    {iconEnd}
    {iconStart}
  </>
);

export default Button;

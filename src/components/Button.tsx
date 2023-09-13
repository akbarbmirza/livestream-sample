import React, { ReactEventHandler } from "react";
import { FC, ReactNode } from "react";

type ButtonPropsVariant = "inverse" | "positive" | "primary" | "secondary";
interface ButtonProps {
  children?: ReactNode;
  iconEnd?: string;
  iconStart?: string;
  onClick: ReactEventHandler;
  variant?: ButtonPropsVariant;
}

const Button: FC<ButtonProps> = ({
  variant = "primary",
  iconEnd,
  iconStart,
  children,
  onClick,
}) => (
  <button className={`variant-${variant}`} onClick={onClick}>
    {iconStart}
    {children}
    {iconEnd}
  </button>
);

export default Button;

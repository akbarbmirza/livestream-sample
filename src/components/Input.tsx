import { FC, ReactNode } from "react";

interface InputProps {
  errorText?: ReactNode;
  label?: ReactNode;
  value?: ReactNode;
  iconEnd?: ReactNode;
  iconStart?: ReactNode;
}

const Input: FC<InputProps> = ({
  errorText,
  label,
  value,
  iconEnd = <Placeholder />,
  iconStart = <Placeholder />,
}) => (
  <>
    {errorText}
    {label}
    {value}
    {iconEnd}
    {iconStart}
  </>
);

export default Input;

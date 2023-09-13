import React, { ChangeEventHandler, ReactNode } from "react";
import { FC } from "react";

interface InputProps {
  errorText?: string;
  label?: string;
  value?: string;
  iconEnd?: ReactNode;
  iconStart?: ReactNode;
  id: string;
  onChange?: ChangeEventHandler;
}

const Input: FC<InputProps> = ({
  errorText,
  iconEnd,
  iconStart,
  id,
  label,
  onChange,
  value,
}) => (
  <div className="field">
    <label htmlFor={id}>{label}</label>
    {iconStart}
    <input type="text" value={value} onChange={onChange} />
    {iconEnd}
    <span className="error">{errorText}</span>
  </div>
);

export default Input;

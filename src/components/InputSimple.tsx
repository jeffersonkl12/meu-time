import { ChangeEvent, ChangeEventHandler } from "react";
import "./InputSimple.css";

interface InputSimpleProps {
  id?: string;
  classes?: string;
  type?: string;
  placeHolder?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onChangeValue?: ChangeEventHandler;
  value?: any;
}

const InputSimple = ({
  id,
  classes,
  type,
  placeHolder,
  style,
  onChangeValue,
  value,
}: InputSimpleProps) => {
  return (
    <input
      id={id}
      className={`inputSimple ${classes}`}
      type={type}
      placeholder={placeHolder}
      style={style}
      value={value}
      onChange={onChangeValue}
      required
    />
  );
};

export default InputSimple;

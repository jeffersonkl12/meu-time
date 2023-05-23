import { IconBaseProps, IconType } from "react-icons";
import "./InputIcon.css";
import { ChangeEventHandler } from "react";

interface InputIconProps {
  id?: string;
  classes?: string;
  type?: string;
  placeHolder?: string;
  style?: React.CSSProperties;
  Icon?: any;
  name?: string;
  value?: any;
  onChancgeValue?: ChangeEventHandler;
}

const InputIcon: React.FunctionComponent<InputIconProps> = ({
  id,
  classes,
  type,
  placeHolder,
  style,
  Icon,
  name,
  value,
  onChancgeValue,
}: InputIconProps) => {
  return (
    <div className="inputIcon__container">
      {Icon ? (
        <div className="inputIcon__icon">
          <Icon />
          <span></span>
        </div>
      ) : null}
      <input
        id={id}
        className={`inputIcon__content ${classes}`}
        type={type}
        placeholder={placeHolder}
        style={style}
        name={name}
        value={value}
        onChange={onChancgeValue}
      />
    </div>
  );
};

export default InputIcon;

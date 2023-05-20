import "./InputSimple.css";


type InputSimpleProps = {
    id?: string;
    classes?: string;
    type?: string;
    placeHolder?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

const InputSimple = ({id,classes,type,placeHolder,style}: InputSimpleProps) => {

    return <input id={id} 
    className={`inputSimple ${classes}`} 
    type={type} placeholder={placeHolder}
    style={style} 
    required/>
}

export default InputSimple;
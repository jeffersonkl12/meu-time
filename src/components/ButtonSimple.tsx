import { type } from "os";
import "./ButtonSimple.css";

type ButtonSimpleProps = {
    id?: string;
    classes?: string;
    type?: string;
    value?: string;
    style?: React.CSSProperties;
}


const ButtonSimple = ({id,classes,type,value,style}: ButtonSimpleProps) =>{

    return <input 
    id={id} 
    className={`buttonSimple ${classes}`} 
    type="submit"
    value={value}
    style={style}/> 

}

export default ButtonSimple;
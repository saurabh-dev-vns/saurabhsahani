import "./Mail.css";
import { IoMailOpenOutline } from "react-icons/io5";
const Mail = () =>{
    return (
        <div className="mail-me">
        <a href="mailto:saurabhsahani0001@yahoo.com">
           <IoMailOpenOutline />
        </a>
    </div>
    );
}

export default Mail
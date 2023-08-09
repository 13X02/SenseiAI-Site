'use client'
import {AiFillGithub,AiFillLinkedin,AiFillInstagram} from "react-icons/ai";
const FootBarComponent = (props) =>{
    const {text,insta,linkedin,github} = props;
    return(
        <div className="flex gap-5">
            <p className="orange_gradient text-lg font-bold">{text}</p>
            <div className="flex gap-0">
            <AiFillGithub onClick={()=>{window.open(github)}} size={30} className="mr-5"/>
            <AiFillLinkedin onClick={()=>{window.open(linkedin)}} size={30} className="mr-5"/>
            <AiFillInstagram onClick={()=>{window.open(insta)}} size={30} className="mr-5"/>
            </div>
        </div>
    )


}

export default FootBarComponent;
'use client'
import Image from "next/image";
const StepComponent =(props) =>{
    const {text,url} = props;
    return(
        <>
        <div className="flex flex-col items-center gap-10">
            <span className="text-black	underline underline-offset-2	font-extrabold	 text-center text-md">{text}</span>
            <Image
          src={url}
          alt='logo'
          width={400}
          height={400}
          className='object-contain rounded-3xl'
        />
        </div>
        </>
    )
}
export default StepComponent;
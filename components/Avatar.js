// Next Image
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image 
      src={"/avatar.png"} 
      width={697} 
      height={600} 
      alt="" 
      className='translate-z-0 w-full h-[90%]'/>
    </div>
  );
};

export default Avatar;

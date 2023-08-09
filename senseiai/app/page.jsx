'use client'
import FootBarComponent from "@components/FootBarComponent";
import StepComponent from "@components/StepComponent";
import Image from "next/image";
const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Extending
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Simplicity & Productivity</span>
    </h1>
    <p className='desc text-center'>
    SenseiAI is a browser extension utilizing AI to enhance productivity by generating content like images, text, and code from selected text, making it valuable for efficient online work and learning.
    </p>
    <button onClick={openLink} radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg w-40 h-10 rounded-2xl mt-10 font-bold">
      Download
    </button>

    <h1 className="orange_gradient text-7xl font-bold text-center mt-36">Steps to Install</h1>
    <div className="flex mt-20 mb-20 flex-col gap-9  h-full">
        <div className="flex gap-5 h-full">
        <StepComponent text="Click Download" url="/assets/images/1.png"/>
        <StepComponent text="Open the Zip" url="/assets/images/2.png"/>
        <StepComponent text="Extract the Zip" url="/assets/images/3.png"/>
        </div>
        <div className="flex gap-5">
        <StepComponent text="Open Chrome Extensions & Click 'Load Unpacked'" url="/assets/images/4.png"/>
        <StepComponent text="Select the Extracted Folder" url="/assets/images/5.png"/>
        <StepComponent text="Right click on Selected text" url="/assets/images/6.png"/>
        </div>
    </div>

    <h1 className="head_text text-lg	mb-10">The Team </h1>
    <div className="flex  space-x-5  gap-5">
        <div className="flex  flex-start">
        <FootBarComponent text="Abhijith H" insta="https://www.instagram.com/13x.02/" linkedin="https://www.linkedin.com/in/13x02/" github="https://github.com/13X02"/>
        <FootBarComponent text="Anagha N" insta="https://www.instagram.com/ianagha_/" linkedin="https://www.linkedin.com/in/anu-anagha-a1a319214/" github="https://github.com/AnaghaN15"/>
        </div>
        <div className="flex  flex-end">
        <FootBarComponent text="Mishal" insta="https://www.instagram.com/me_queen_dude/" linkedin="https://www.linkedin.com/in/mizhal-kathungal-3994a9210/" github="https://github.com/mishalkathungal"/>
        <FootBarComponent text="Yethu Krishnan" insta="https://www.instagram.com/_.y_eth_u._/" linkedin="https://www.linkedin.com/in/yethu-krishnan-597b2821b/" github="https://github.com/yethu-KL29"/>
        </div>

    </div>
    <div className="my-10">
        <p>Developed with ❤️ by Team <span className="orange_gradient font-bold"> SenseiAI</span> </p>
    </div>


  </section>
);

const openLink = () => {
    window.open("https://drive.google.com/uc?export=download&id=1u4IidWA1-eVNhi6uKdECmORUuVD7J5vF")
}


export default Home;
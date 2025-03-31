
import { CornerRightDown } from "lucide-react";
import headerLogo from "/headerLogo.png"

const Header = () => {
  return <>
    <header className="p-4">
      <div className="bg-[url(/header2.svg)] h-[90vh] bg-contain bg-no-repeat m-auto aspect-7/5 p-[1.2vh]">
        <ul className="flex space-x-4 ml-[0.5vw]">
          <li><a href="#home" className="hover:text-gray-600 text-xl text-(--foreground) font-semibold">Products</a></li>
          <li><a href="#home" className="hover:text-gray-600 text-xl text-(--foreground) font-semibold">Services</a></li>
          <li><a href="#home" className="hover:text-gray-600 text-xl text-(--foreground) font-semibold">Our Blog</a></li>
          <li><a href="#home" className="hover:text-gray-600 text-xl text-(--foreground) font-semibold">Contact Us</a></li>
          
          <li className="ml-auto mr-3"><a href="#home" className="hover:text-gray-600 text-xl text-(--background) font-semibold">Get in touch</a></li>

        </ul>
        <div className="flex">
          <div className="m-10 flex flex-col">
            <h1 className="text-(--foreground) text-8xl font-semibold">Why</h1>
            <h1 className="text-(--foreground) text-8xl font-semibold">Handle</h1>
            <h1 className="text-(--destructive) text-8xl font-semibold">Everything</h1>
            <h1 className="text-(--foreground) text-8xl font-semibold">When AI</h1>
            <h1 className="text-(--foreground) text-8xl font-semibold">Can Help</h1>
          </div>
          <img className="aspect-5/7 h-[100vh] mt-[3vh] ml-[-7vh]" src={headerLogo} alt="" />
        </div>
        <div className="flex mt-[-25vh] "><h1 className="text-6xl">Discover more </h1> <CornerRightDown className="mt-5 ml-3" size={40}/></div>
        
      </div>


    </header>
  </>
}

export default Header;

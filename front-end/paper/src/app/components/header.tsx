import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegPaperPlane } from "react-icons/fa";


export default function Header() {
    return (
        <header className="flex flex-row justify-between items-center pt-3 mb-2 w-full sticky bg-white">
            <FaRegPaperPlane className="ml-8" style={{strokeWidth: '1', width: "25", height: "22px"}} />
            <p className="text-3xl lg:text-4xl font-times items-center ">paper</p>
            <RxHamburgerMenu className="mr-8" style={{strokeWidth: '0.35', width: "25px", height: "25px" }} />
        </header>
    )
}
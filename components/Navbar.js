import Image from "next/image";
import circle from "../public/profile_circle.png";

const Navbar = () => {
    return (
        <div className="mx-auto">
            <nav className="border-gray-200 px-2 mb-10">
                <div className="container mx-auto flex flex-wrap items-center justify-start">
                    <span className="self-center text-white text-3248 font-semibold whitespace-nowrap mr-10">PcariMovie</span>
                    <div className="flex ml-24 md:order-2">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" ><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </div>
                    <div className="flex ml-3 md:order-3">
                        <Image src={circle} width={50} height={50} className="" />
                        <span className="ml-3 self-center text-white text-base font-semibold">John Glitch</span>
                    </div>
                    <div className="hidden md:flex justify-space items-center w-658 md:w-auto md:order-1">
                        <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <a href="#" className="text-white text-base block pl-3 pr-4 py-2 md:text-white md:p-0 rounded">Home</a>
                                <hr className="bg-secondary-gold h-1 w-10 border-0" />
                            </li>
                            <li>
                                <a href="#" className="text-nav-link text-1632 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-white md:p-0">Movies</a>
                            </li>
                            <li>
                                <a href="#" className="text-nav-link text-1632 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-white md:p-0">TV Show</a>
                            </li>
                            <li>
                                <a href="#" className="text-nav-link text-1632 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-white md:p-0">Video</a>
                            </li>
                            <li>
                                <a href="#" className="text-nav-link text-1632 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-white md:p-0">FAQ</a>
                            </li>
                            <li>
                                <a href="#" className="text-nav-link text-1632 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-white md:p-0">Pricing</a>
                            </li>
                            <li>
                                <a href="#" className="text-nav-link text-1632 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-white md:p-0">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> 
        </div>
        
    );
}

export default Navbar;
import Image from "next/image";
import arrow from "../public/right-arrow.png";
import location from "../public/location.png";
import email from "../public/email.png";
import telephone from "../public/telephone.png";

const Footer = () => {
    return (
        <div className="flex justify-start">
            <div className="bg-lightGray h-560 w-560 flex justify-center items-center">
                <div className="w-349 h-369">
                    <h1 className="text-white text-6488 pb-8">PcariMovie</h1>
                    <p className="text-nav-link text-base/[32px] w-320 pb-10">Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                    <p className="text-white pb-6"><b>Join Newsletters</b></p>          
                    <form>   
                        <div className="relative">
                            <input type="text" id="search" className="block w-282 p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-primary/black focus:ring-primary/black focus:border-blue-500 dark:bg-primary/black dark:border-primary/black dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Insert your mail here" required />
                            <button type="submit" className="text-white w-12 h-12 absolute end-20 bottom-1.5 items-center bg-secondary/yellow hover:bg-secondary/yellow-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "><Image src={arrow} width={24} height={24} /></button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="bg-other/gray w-880">
                <table className="mt-133 ml-16">
                    <tr>
                        <th className="w-16 text-white">Product</th>
                        <td className="w-160"></td>
                        <th className="w-100 text-white">Media Group</th>
                        <td className="w-160"></td>
                        <th className="w-65 text-white">Sitemap</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="h-6"></td>
                        <td></td>
                        <td className="h-6"></td>
                        <td></td>
                        <td className="h-6"></td>
                    </tr>
                    <tr>
                        <td className="w-16 text-nav-link">Movies</td>
                        <td className="w-160"></td>
                        <td className="w-100 text-nav-link">Nice Studio</td>
                        <td className="w-160"></td>
                        <td className="w-65 text-nav-link">About</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className="h-6"></td>
                        <td></td>
                        <td className="h-6"></td>
                        <td></td>
                        <td className="h-6"></td>
                    </tr>
                    <tr>
                        <td className="w-16 text-nav-link">TV Show</td>
                        <td className="w-160"></td>
                        <td className="w-100 text-nav-link">Nice News</td>
                        <td className="w-160"></td>
                        <td className="w-65 text-nav-link">Careers</td>                        
                    </tr>
                    <tr>
                        <td></td>
                        <td className="h-6"></td>
                        <td></td>
                        <td className="h-6"></td>
                        <td></td>
                        <td className="h-6"></td>
                    </tr>
                    <tr>
                        <td className="w-16 text-nav-link">Videos</td>
                        <td className="w-160"></td>
                        <td className="w-100 text-nav-link">Nice TV</td>
                        <td className="w-160"></td>
                        <td className="w-65 text-nav-link">Press</td>                        
                    </tr>
                </table>
                <div className="flex justify-start text-white text-sm mt-99 ml-61">
                    <Image src={location} width={24} height={24} />
                    <p className="ml-2 mr-6">8819 Ohio St. South Gate, California 90280</p>
                    <Image src={email} width={24} height={24} />
                    <p className="ml-2 mr-6">ourstudio@hello.com</p>
                    <Image src={telephone} width={24} height={24} />
                    <p className="ml-2">+271 386-647-3637</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
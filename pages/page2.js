import Image from "next/image";
import play from "../public/play-button.png";
import clock from "../public/clock.png";
import view from "../public/view.png";
import Navbar from '../components/Navbar'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div>
      <div className='bg-gradient-to-r from-header-left to-header-right h-714 pt-8'>
        <Navbar />
        <div className="flex justify-center mt-153">
          <Image src={play} width={274} height={274} />
          <div className="ml-120">
            <p className="text-4864 text-white text-wrap whitespace-normal w-600 font-semibold font-dm font-sans">Search your movies here!</p>

            <form>
              <div className="flex">
                <div className="relative mt-4">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="search" className="block w-399 p-4 ps-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 rounded-full" placeholder="Search by theatre..." required />
                </div>
                <div className="relative mt-4 pl-4">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none ml-4">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                  </div>
                  <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-176 h-54 ps-10 p-2.5" placeholder="23/12/2021" />
                </div>
              </div>  
              <button className="bg-secondary/yellow w-161 h-54 rounded-full text-2124 font-bold mt-19">Search</button>
          </form>

          </div>
        </div>
      </div>
      <div className="bg-gray h-1553">
        <div className="flex">
          <p className="text-4864 font-medium text-white ml-103 pt-133 w-608">Search Results</p>
        </div>
        <div className="flex justify-center">
          <div className="bg-gradient-to-b from-header-left to-header-right h-560 w-365 mt-14">
            <div className="bg-secondary/yellow ml-6 mt-26 w-77 text-center rounded-full">
              <span className="">Fantasy</span>
            </div>
            <div className="flex mt-401 ml-6">
              <Image src={clock} />
              <p className="text-text/infield ml-2">1hr 24mins</p>
              <div className=" flex ml-6">
                <Image src={view} />
                <p className="text-text/infield ml-2">21.3K views</p>
              </div>
            </div>
            <p className="text-white text-4864 font-bold ml-6">Interspace</p>
          </div>
          <div className="bg-gradient-to-b from-header-left to-header-right h-560 w-365 mt-14 ml-4">
            <div className="bg-secondary/yellow ml-6 mt-26 w-77 text-center rounded-full">
              <span className="">Fantasy</span>
            </div>
            <div className="flex mt-401 ml-6">
              <Image src={clock} />
              <p className="text-text/infield ml-2">1hr 24mins</p>
              <div className=" flex ml-6">
                <Image src={view} />
                <p className="text-text/infield ml-2">21.3K views</p>
              </div>
            </div>
            <p className="text-white text-4864 font-bold ml-6">Her & Him</p>
          </div>
          <div className="bg-gradient-to-b from-header-left to-header-right h-560 w-365 mt-14 ml-4">
            <div className="bg-secondary/yellow ml-6 mt-26 w-77 text-center rounded-full">
              <span className="">Fantasy</span>
            </div>
            <div className="flex mt-401 ml-6">
              <Image src={clock} />
              <p className="text-text/infield ml-2">1hr 24mins</p>
              <div className=" flex ml-6">
                <Image src={view} />
                <p className="text-text/infield ml-2">21.3K views</p>
              </div>
            </div>
            <p className="text-white text-4864 font-bold ml-6">Lo Lo Land</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="bg-gradient-to-b from-header-left to-header-right h-560 w-365 mt-14">
            <div className="bg-secondary/yellow ml-6 mt-26 w-77 text-center rounded-full">
              <span className="">Fantasy</span>
            </div>
            <div className="flex mt-401 ml-6">
              <Image src={clock} />
              <p className="text-text/infield ml-2">1hr 24mins</p>
              <div className=" flex ml-6">
                <Image src={view} />
                <p className="text-text/infield ml-2">21.3K views</p>
              </div>
            </div>
            <p className="text-white text-4864 font-bold ml-6">Interspace</p>
          </div>
          <div className="bg-gradient-to-b from-header-left to-header-right h-560 w-365 mt-14 ml-4">
            <div className="bg-secondary/yellow ml-6 mt-26 w-77 text-center rounded-full">
              <span className="">Fantasy</span>
            </div>
            <div className="flex mt-401 ml-6">
              <Image src={clock} />
              <p className="text-text/infield ml-2">1hr 24mins</p>
              <div className=" flex ml-6">
                <Image src={view} />
                <p className="text-text/infield ml-2">21.3K views</p>
              </div>
            </div>
            <p className="text-white text-4864 font-bold ml-6">Her & Him</p>
          </div>
          <div className="bg-gradient-to-b from-header-left to-header-right h-560 w-365 mt-14 ml-4">
            <div className="bg-secondary/yellow ml-6 mt-26 w-77 text-center rounded-full">
              <span className="">Fantasy</span>
            </div>
            <div className="flex mt-401 ml-6">
              <Image src={clock} />
              <p className="text-text/infield ml-2">1hr 24mins</p>
              <div className=" flex ml-6">
                <Image src={view} />
                <p className="text-text/infield ml-2">21.3K views</p>
              </div>
            </div>
            <p className="text-white text-4864 font-bold ml-6">Lo Lo Land</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

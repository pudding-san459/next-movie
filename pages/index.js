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
          <div className="ml-148">
            <p className="text-7296 text-white text-wrap whitespace-normal w-600 font-semibold font-dm font-sans">Find your movies here!</p>
            <p className="text-wrap whitespace-normal w-502 text-nav-link font-dm pt-6">Explore our gallery full of exciting films from all around the globe only your yor entertainments. No hidden charges or disturbing ads.</p>
          </div>
        </div>
      </div>
      <div className="bg-gray h-1553">
        <div className="flex">
          <p className="text-4864 font-medium text-white ml-103 pt-133 w-608">New Releases</p>
          <p className="text-2432 font-bold text-secondary/yellow pt-133 self-center mr-105 ml-368 w-229 text-right">View More</p>
        </div>
        <div className="flex">
          <div className="bg-gradient-to-b from-header-left to-header-right h-560 w-757 mt-14 ml-103">
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
            <p className="text-white text-4864 font-bold ml-6">The Ring's Lord</p>
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
            <p className="text-white text-4864 font-bold ml-6">Interspace</p>
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

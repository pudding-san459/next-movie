import Image from "next/image";
import play from "../public/play-button.png";
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
      <div className="bg-gray">
        <p>qwertyuivcfcg</p>
      </div>
      
      <Footer />
    </div>
  )
}

import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <section className="max-container">
      <div className="flex justify-between items-start flex-wrap gap-20 max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="Nike Logo" width={150} height={46} className="m-0"/>
          </a>
          <p className="text-gray-200 mt-6 text-base font-montserrat leading-7 sm:max-w-sm">Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((item)=> (
              <div className="flex bg-white rounded-full w-12 h-12 items-center justify-center">
                <img src={item.src} alt={item.alt} height={24} width={24}/>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 lg:gap-10 gap-20 justify-between flex-wrap">
          {footerLinks.map((item)=> (
            <div key={item.title}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">{item.title}</h4>
              <ul>
                {item.links.map((link) => (
                  <li className="text-gray-200 text-l mt-3 font-montserrat text-base leading-normal hover:text-gray-500 cursor-pointer">
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div> 
      </div>

      <div className="flex mt-24 justify-between max-sm:items-center max-sm:flex-col">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img src={copyrightSign} alt="Copyright Sign" width={20} height={20} className="rounded-full m-0"/>
          <p className="text-gray-200">Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat text-gray-200">Terms & Conditions</p>
      </div>
    </section>
  )
}

export default Footer
import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-5xl lg:max-w-lg capitalize font-bold leading-normal">We Provide You <span className="text-coralRed">Super</span> <span className="text-coralRed">Quality</span> Shoes</h2>
        <p className="mt-6 lg:max-w-lg info-text">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
        <p className="mt-6 lg:max-w-lg info-text">Our dedication to detail and excellence ensures your satisfaction</p>
        <div className="mt-10">
          <Button label="View Details"/>
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="Shoe Collection" />
      </div>
    </section>
  )
}

export default SuperQuality
import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffers = () => {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="Offer" width={773} height={687} />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-5xl lg:max-w-lg capitalize font-bold leading-normal"><span className="text-coralRed">Special</span> Offer</h2>
        <p className="mt-6 info-text">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
        <p className="mt-6 info-text">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight}/>
          <Button label="Learn more" backgroundColor="bg-white" textColor="text-gray-500" borderColor="border-gray-500" />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers
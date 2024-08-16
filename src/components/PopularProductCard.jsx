import { star } from "../assets/icons";

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img src={imgURL} alt={name} className="w-[280px] h-[280px]"/>
        <div className="mt-8 flex gap-2.5 justify-start">
            <img src={star} alt="star" />
            <p className="font-montserrat text-xl leading-normal text-gray-500">(4.5)</p>
        </div>
        <h2 className="font-palanquin leading-normal font-semibold text-2xl mt-2">{name}</h2>
        <p className="mt-2 font-semibold font-montserrat text-coralRed leading-normal text-2xl">{price}</p>
    </div>
  )
}

export default PopularProductCard
import { star } from "../assets/icons"

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img src={imgURL} alt={customerName} className="rounded-full h-[120px] w-[120px] object-cover"/>
        <p className="info-text mt-6 text-center max-w-sm">{feedback}</p>
        <div className="flex mt-3 justify-center items-center gap-2.5">
            <img src={star} alt="Star" width={24} height={24} className="object-contain m-0" />
            <p className="text-xl font-montserrat text-gray-500">({rating})</p>
        </div>
        <h3 className="text-3xl mt-3 font-palanquin font-bold">{customerName}</h3>
    </div>
  )
}

export default ReviewCard
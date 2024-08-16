const ServiceCard = ({imgURL, label, subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full shadow-2xl rounded-[20px] px-10 py-16">
        <div className="bg-coralRed w-11 h-11 justify-center items-center rounded-full flex">
            <img src={imgURL} alt={label} width={24} height={24} />
        </div>
        <h2 className="mt-5 text-3xl font-palanquin font-bold leading-normal">{label}</h2>
        <p className="text-lg mt-3 break-words font-montserrat text-gray-500 leading-normal">{subtext}</p>
    </div>
  )
}

export default ServiceCard
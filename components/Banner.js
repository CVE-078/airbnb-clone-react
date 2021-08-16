import Image from 'next/image'

function Banner({ image, title, description, buttonText, buttonBgColor = 'bg-gray-900', buttonTextColor = 'text-white', textColor = 'bg-gray-900' }) {
    return (
        <div className="group relative cursor-pointer flex items-center justify-start h-[400px] xl:h-[500px] min-w-[300px] rounded-2xl overflow-hidden">
            <Image
                src={image}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="group-hover:scale-105 transition-all duration-300"
            />

            <div className="z-40 pl-10 md:pl-20 h-full flex flex-col items-start justify-center">
                <h3 className={"text-3xl md:text-5xl font-semibold mb-3 w-3/4 " + textColor}>{title}</h3>
                <p className={"w-1/2 text-lg " + textColor}>{description}</p>

                <button
                    className={
                        "text-base font-semibold px-6 py-3 rounded-lg mt-5 transition-all active:scale-90 shadow-md hover:shadow-xl " + buttonBgColor + " " + buttonTextColor
                    }
                >
                    {buttonText}
                </button>
            </div>
        </div>
    )
}

export default Banner
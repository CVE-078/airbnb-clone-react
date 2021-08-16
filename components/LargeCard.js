import Image from 'next/image'

function LargeCard({ image, title, description }) {
    return (
        <div className="flex flex-col flex-grow-0 flex-shrink-0 w-[50%] lg:w-[33.33%] rounded-xl cursor-pointer">

            <div className="group relative h-[100%] pb-[100%] w-full mb-2 transition-all duration-300 ease-out rounded-lg overflow-hidden">
                <Image
                    src={image}
                    layout="fill"
                    className="hover:scale-105 transition-all duration-300"
                />
            </div>

            <div className="flex flex-col">
                <h3 className={"font-medium text-xl"}>{title}</h3>
                <p className={"text-base"}>{description}</p>
            </div>
        </div>
    )
}

export default LargeCard
import Image from 'next/image'

function MediumCard({ image, title }) {
    return (
        <div className="flex flex-col flex-grow-0 flex-shrink-0 lg:flex-shrink w-[50%] lg:w-[33.33%] 2xl:w-[25%] rounded-xl cursor-pointer">

            <div className="group relative h-[100%] pb-[100%] w-full mb-1 transition-all duration-300 ease-out rounded-lg overflow-hidden">
                <Image
                    src={image}
                    layout="fill"
                    className="hover:scale-105 transition-all duration-300"
                />
            </div>

            <h3 className="font-medium text-xl">{title}</h3>
        </div>
    )
}

export default MediumCard
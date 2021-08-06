import Image from 'next/image'

function MediumCard({ image, title }) {
    return (
        <div class="flex flex-col flex-grow-0 flex-shrink-0 w-[50%] lg:w-[33.33%] 2xl:w-[25%] rounded-xl cursor-pointer">

            <div className="relative h-[100%] pb-[100%] w-full mb-1 transition-all duration-300 ease-out">
                <Image
                    src={image}
                    layout="fill"
                    className="rounded-lg"
                />
            </div>

            <h3 className="font-medium text-xl">{title}</h3>
        </div>
    )
}

export default MediumCard
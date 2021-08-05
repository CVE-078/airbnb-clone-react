import Image from 'next/image'

function MediumCard({ image, title }) {
    return (
        <div class="flex flex-col rounded-xl cursor-pointer">

            <div className="relative h-80 w-80 mb-3 hover:scale-105 transition-all duration-300 ease-out">
                <Image
                    src={image}
                    layout="fill"
                    className="rounded-lg"
                />
            </div>

            <h3 className="font-medium text-2xl">{title}</h3>
        </div>
    )
}

export default MediumCard
import Image from 'next/image'

function SmallCard({ image, location, distance }) {
    return (
        <div className="flex flex-row items-center mr-10 mb-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition-all duration-300 ease-out">

            <div className="relative h-20 w-20">
                <Image
                    src={image}
                    layout="fill"
                    className="rounded-lg"
                />
            </div>

            <div>
                <h2 className="font-medium">{location}</h2>
                <h2 className="text-gray-500">{distance}</h2>
            </div>
        </div>
    )
}

export default SmallCard
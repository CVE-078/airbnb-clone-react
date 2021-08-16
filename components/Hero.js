import Image from 'next/image';

function Hero() {
    return (
        <section className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[1100px] transition-all flex items-center justify-start">
            <Image
                src="https://a0.muscache.com/im/pictures/e4a2a61c-589f-4e49-b3b8-968a6bc23389.jpg?im_w=2560"
                layout="fill"
                objectFit="cover"
                objectPosition="bottom"
            />

            <div className="z-10 flex flex-col items-start justify-center pl-10 md:pl-20 max-w-[1760px] mx-auto w-full">
                <p className="text-xl sm:text-4xl lg:text-7xl font-bold mb-2 text-white w-1/4">Olympian & Paralympian Online Experiences</p>

                <button className="text-base font-semibold px-5 py-2 rounded-lg mt-5 transition-all active:scale-90 shadow-md hover:shadow-xl bg-white">
                    Explore now
                </button>
            </div>
        </section>
    )
}

export default Hero

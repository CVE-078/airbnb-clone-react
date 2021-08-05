import Image from 'next/image';

function Hero() {
    return (
        <section className="hero relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px] transition-all flex items-center justify-center">
            <Image
                src="https://links.papareact.com/0fm"
                layout="fill"
                objectFit="cover"
                objectPosition="bottom"
            />

            <div className="hero__content z-10 flex flex-col items-start justify-center">
                <p className="hero__text text-md sm:text-3xl font-semibold mb-8">Not sure where to go? Perfect.</p>

                <button
                    className="hero__cta text-purple-500 bg-white rounded-full px-10 py-3 shadow-md hover:shadow-lg active:scale-90 transition-all font-semibold"
                >
                    I'm flexible
                </button>
            </div>
        </section>
    )
}

export default Hero

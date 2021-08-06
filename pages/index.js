import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'

export default function Home({ exploreData, cardsData }) {
    return (
        <div className="min-h-screen">
            <Head>
                <title>Airbnb Clone</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <Hero />

            <main className="main max-w-[1760px] mx-auto py-20 px-8 xl:px-20">

                <section className="mb-20">
                    <h2 className="text-4xl font-bold mb-4">Explore nearby</h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 transition-all mt-6">
                        {exploreData?.map(({ img, distance, location }) => (
                            <SmallCard
                                key={img}
                                image={img}
                                location={location}
                                distance={distance}
                            />
                        ))}
                    </div>
                </section>

                <section className="mb-20">
                    <LargeCard
                        img="https://a0.muscache.com/im/pictures/258b129d-d1cd-48b5-86d4-86206c13ebf7.jpg?im_w=1440"
                        title="Not sure where to go? Perfect."
                        buttonText="I'm flexible"
                        buttonBgColor="bg-gray-900"
                        buttonTextColor="text-white"
                        textColor="text-black"
                    />
                </section>

                <section className="mb-20">
                    <h2 className="text-4xl font-bold mb-4">Live anywhere</h2>

                    <div className="flex space-x-4 transition-all overflow-scroll scrollbar-hide p-3 -ml-3">
                        {cardsData?.map(({ img, title }) => (
                            <MediumCard
                                key={img}
                                image={img}
                                title={title}
                            />
                        ))}
                    </div>
                </section>

                <section className="mb-20">
                    <LargeCard
                        img="https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=1440"
                        title="Try hosting"
                        description="Earn extra income and unlock new opportunities by sharing your space."
                        buttonText="Learn more"
                        buttonBgColor="bg-white"
                        buttonTextColor="text-black"
                        textColor="text-white"
                    />
                </section>

            </main>

            <Footer />

        </div>
    )
}

export async function getStaticProps() {
    const exploreData = await fetch('https://links.papareact.com/pyp').then((res) => res.json());
    const cardsData = await fetch('https://links.papareact.com/zp1').then((res) => res.json());

    return {
        props: {
            exploreData,
            cardsData
        }
    }
}
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

            <main className="main max-w-screen-2xl mx-auto py-20 px-8 xl:px-px">

                <section className="mb-20">
                    <h2 className="text-4xl font-semibold mb-10">Explore nearby</h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 transition-all">
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
                    <h2 className="text-4xl font-semibold mb-10">Live anywhere</h2>

                    <div className="flex space-x-3 transition-all overflow-scroll scrollbar-hide p-3 -ml-3">
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
                        img="https://links.papareact.com/4cj"
                        title="The Greatest Outdoors"
                        description="Wishlists curated by Airbnb."
                        buttonText="Get inspired"
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
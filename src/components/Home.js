import image from "../tech.jpg"

import React from 'react'

function Home() {
    return (

        <main>
            <img
                src={image} alt="Italy" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text 6xl text-white-100 font-bold cursive leading-none lg:leading-snug home-name" >
                    Hello I'm Joe!! </h1>


            </section>
            <div className="relative flex justify-center">

                <h2 className="text 6xl text-black-600 justify-center font-bold cursive">A little About Me </h2>
            </div>

        </main>

    )
}

export default Home



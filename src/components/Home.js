import React from 'react';
import image from "../KH_III_Shadow_6★_KHUX.png";


export default function Home() {
    return (
        <main>
            <img
                src={image}
                alt="KH monster"
                className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
                    Hello My Name Is Joe
                </h1>
            </section>
        </main>
    )
}


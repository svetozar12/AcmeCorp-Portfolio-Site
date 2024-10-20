import "../styles/global.css";

import type {AppProps} from "next/app";
import Head from "next/head";
import {Montserrat} from 'next/font/google'
import Header from "@/components/Header/Header";
import "@/styles/global.css"

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({subsets: ["latin"]})
export default function App({Component, pageProps}: AppProps) {
    return (
        <div className={montserrat.className}>
            <Head>
                <title>Svetozar Gospodinov</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico" sizes="any"/>
            </Head>
            <Header/>
            <Component {...pageProps} />
        </div>
    );
}
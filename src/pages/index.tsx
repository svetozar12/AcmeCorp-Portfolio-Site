import Head from 'next/head';
import Home from "@/components/Home";

export default function HomePage() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Home/>
        </div>
    );
}

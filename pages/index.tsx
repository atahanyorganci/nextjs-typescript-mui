import React from "react";
import Head from "next/head";
import Header from "@components/header";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
        </div>
    );
}

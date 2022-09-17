import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Script from "next/script";


export default function Meta({ children, KEY, ...customMeta }) {
    const router = useRouter();

    const meta = {
        title: "Christopher Rolke - Developer, Visionary and Creatror",
        description: "I'm a developer, visionary and creator. I'm a full stack developer with a passion for building beautiful, responsive websites and applications.",
        image: "./images/Profilbild.jpg",
        type: "website",
        ...customMeta,
    };
    const noNav = ["/", ""];
    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index" />
                <meta name="description" content={meta.description} />
                <meta
                    proptery="og:url"
                    content={`https://rolke.net${router.asPath}`}
                />
                <link
                    rel="canonical"
                    href={`https://rolke.net${router.asPath}`}
                />
                <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet"/>
                <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet"/>
                
                <meta property="og:type" content={meta.type} />
                <meta property="og:site_name" content="Christopher Rolke" />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.image} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@rolkef" />
                <meta name = "twitter:title" content={meta.title} /> 
                <meta name = "twitter:description" content={meta.description} />
                <meta name = "twitter:image" content={meta.image} />
                {meta.date && (
                    <meta property = "article:published_time" content={meta.date} />
                )}
                <Script data-goatcounter={KEY} src="//gc.zgo.at/count.js" async>
                </Script>
            </Head>
            <main>{children}</main>
            
        </>
    );
}

export async function getStaticProps() {
    const key = process.env.Goat;
    return {
        props: {
            KEY: key,
        },
    };
}
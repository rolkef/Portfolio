import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import next from "next";


export default function ContainerBlock({ children, ...customMeta }) {
    const router = useRouter();

    const meta = {
        title: "Christopher Rolke - Developer, Visionary and Creatror",
        description: "I'm a developer, visionary and creator. I'm a full stack developer with a passion for building beautiful, responsive websites and applications.",
        image: "./images/Profilbild.jpg",
        type: "website",
        ...customMeta,
    };
    return (
        <div>
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
            </Head>
            
            <main className="relative">
                <div>{children}</div>

                
            </main>
        </div>
    );
}
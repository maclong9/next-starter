import { Metadata, Viewport } from "next";
import process from "process";

export const AppConfig = {
    name: "Your App Name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do",
    url: process.env.NEXT_PUBLIC_URL,
    keywords: ["app", "nextjs", "react"],
    author: "Your Name",
    creator: "Your Name or Company",
    publisher: "Your Name or Company",
    twitterHandle: "@yourtwitterhandle",
};

export const MetadataConfig: Metadata = {
    title: {
        default: AppConfig.name,
        template: `%s | ${AppConfig.name}`,
    },
    description: AppConfig.description,
    keywords: AppConfig.keywords,
    authors: [{ name: AppConfig.author }],
    creator: AppConfig.creator,
    publisher: AppConfig.publisher,
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: AppConfig.name,
        description: AppConfig.description,
        url: AppConfig.url,
        siteName: AppConfig.name,
        images: [
            {
                url: `${AppConfig.url}/og-image.jpg`,
                width: 1200,
                height: 630,
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: AppConfig.name,
        description: AppConfig.description,
        creator: AppConfig.twitterHandle,
        images: [`${AppConfig.url}/twitter-image.jpg`],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: AppConfig.url,
    },
};

export const ViewportConfig: Viewport = {
    width: "device-width",
    initialScale: 1,
    colorScheme: "normal",
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#000000" },
    ],
};

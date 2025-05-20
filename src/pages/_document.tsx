import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <title>
          GlobeGoExpress Home - Global Logistics and International Shipping
        </title>
        <meta
          name="description"
          content="Discover GlobeGoExpress —the unrivaled global leader in international express shipping."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Best logistics company in the world"
        />
        <meta
          property="og:description"
          content="Providing quality, swift and reliable logistics for all"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dvzdavdtc/image/upload/v1747726895/glogegoexpress_hatedl.png"
        />
        <meta property="og:type" content="/website" />
      </Head>
      <body style={{ fontFamily: "RobotoSerif" }} className="font-Merriweather">
        <Main />
        <NextScript />
        <div id="modalSlot" />
      </body>
    </Html>
  );
}

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <title>
          GLOBEGOEXPRESS Home - Global Logistics and International Shipping
        </title>
        <meta
          name="description"
          content="Discover GLOBEGOEXPRESS —the unrivaled global leader in international express shipping."
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
        <meta property="og:image" content="/globegoexpress.png" />
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

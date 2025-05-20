import Head from "next/head";

function LocalBusinessSchema(): JSX.Element {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "GlobeGo Express",
    image:
      "https://res.cloudinary.com/dvzdavdtc/image/upload/v1747726895/glogegoexpress_hatedl.png",
    "@id": "https://globegoexpress.com",
    url: "https://globegoexpress.com",
    telephone: "+495636543897",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mainzer Strasse 77",
      addressLocality: "Darmstadt",
      addressRegion: "Hessen",
      postalCode: "64293",
      addressCountry: "DE",
    },
  };

  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </Head>
  );
}

export default LocalBusinessSchema;

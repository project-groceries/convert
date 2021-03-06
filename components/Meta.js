import Head from "next/head";

const Meta = () => (
  <Head>
    {/* Primary Meta Tags */}
    <title>
      Convert - A conversion tool for common ingredient measurements
    </title>
    <link rel="icon" href="/favicon.svg" />
    <meta
      name="title"
      content="Convert - A conversion tool for common ingredient measurements"
    />
    <meta
      name="description"
      content="Brought to you by the folks at Project Groceries, this converter is a handy tool that converts between Kilograms, Grams, Litres, Cups, Tablespoons, Teaspoons, Milligrams, and Millilitres."
    />

    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://convert.projectgroceries.com/" />
    <meta
      property="og:title"
      content="Convert - A conversion tool for common ingredient measurements"
    />
    <meta
      property="og:description"
      content="Brought to you by the folks at Project Groceries, this converter is a handy tool that converts between Kilograms, Grams, Litres, Cups, Tablespoons, Teaspoons, Milligrams, and Millilitres."
    />
    <meta
      property="og:image"
      content="https://res.cloudinary.com/projectgroceries/image/upload/v1601877136/Convert_Meta_Image_xzs3x2.png"
    />

    {/* Twitter */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta
      property="twitter:url"
      content="https://convert.projectgroceries.com/"
    />
    <meta
      property="twitter:title"
      content="Convert - A conversion tool for common ingredient measurements"
    />
    <meta
      property="twitter:description"
      content="Brought to you by the folks at Project Groceries, this converter is a handy tool that converts between Kilograms, Grams, Litres, Cups, Tablespoons, Teaspoons, Milligrams, and Millilitres."
    />
    <meta
      property="twitter:image"
      content="https://res.cloudinary.com/projectgroceries/image/upload/v1601877136/Convert_Meta_Image_xzs3x2.png"
    ></meta>
  </Head>
);

export default Meta;

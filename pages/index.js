import Head from "next/head";
import UndrawUnderConstruction from "../components/svg/UndrawUnderConstruction";

export default function Home() {
  return (
    <div
      className="grid h-screen text-center"
      style={{ gridTemplateRows: "1fr 100px" }}
    >
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
          content="Brought to you by the folks at Project Groceries, this converter is a handy tool for whenever you are cooking or just looking to convert ingredient units."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://projectgroceries.com/" />
        <meta
          property="og:title"
          content="Convert - A conversion tool for common ingredient measurements"
        />
        <meta
          property="og:description"
          content="Brought to you by the folks at Project Groceries, this converter is a handy tool for whenever you are cooking or just looking to convert ingredient units."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/projectgroceries/image/upload/v1599364438/Project_Groceries_Card_Image_jjm3gs.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://projectgroceries.com/" />
        <meta
          property="twitter:title"
          content="Convert - A conversion tool for common ingredient measurements"
        />
        <meta
          property="twitter:description"
          content="Brought to you by the folks at Project Groceries, this converter is a handy tool for whenever you are cooking or just looking to convert ingredient units."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/projectgroceries/image/upload/v1599364438/Project_Groceries_Card_Image_jjm3gs.png"
        ></meta>
      </Head>

      <main className="flex flex-col items-center justify-center">
        <h1>Convert</h1>

        <p>A conversion tool for common ingredient measurements</p>

        <div className="my-12">
          <UndrawUnderConstruction className="w-96 mb-8" />
          <h2>Coming Soon</h2>
        </div>
      </main>

      <footer className="flex items-center justify-center border-t border-solid border-gray-400">
        <a
          href="https://projectgroceries.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with ❤️ by <span className="sm:hidden">the team at </span>
          <img
            src="/favicon.svg"
            alt="Project Groceries Logo"
            className="inline-block w-5"
          />{" "}
          Project Groceries
        </a>
      </footer>
    </div>
  );
}

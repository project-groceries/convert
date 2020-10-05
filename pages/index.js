import Head from "next/head";
import UndrawUnderConstruction from "../components/svg/UndrawUnderConstruction";

export default function Home() {
  return (
    <div
      className="grid h-screen text-center"
      style={{ gridTemplateRows: "1fr 100px" }}
    >
      <Head>
        <title>Convert App by Project Groceries</title>
        <link rel="icon" href="/favicon.svg" />
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

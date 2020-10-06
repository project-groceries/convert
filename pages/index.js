import Convert from "../components/Convert";
import Meta from "../components/Meta";
import ShareButtons from "../components/ShareButtons";

export default function Home() {
  return (
    <div
      className="grid h-screen text-center"
      style={{ gridTemplateRows: "1fr 100px" }}
    >
      <Meta />

      <main className="flex flex-col items-center justify-center">
        <h1>Convert</h1>

        <p>A conversion tool for common ingredient measurements</p>

        <Convert />

        <ShareButtons />
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

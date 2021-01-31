import Convert from "../components/Convert";
import Feedback from "../components/Feedback";
import Meta from "../components/Meta";
import ShareButtons from "../components/ShareButtons";

export default function Home() {
  return (
    <div
      className="grid h-screen text-center bg-cover bg-bottom"
      style={{
        gridTemplateRows: "1fr 100px",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3150&q=80)",
        // "url(https://images.unsplash.com/photo-1543353071-873f17a7a088?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80)",
        // "url(https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=4047&q=80)",
        // "url(https://images.unsplash.com/photo-1509358271058-acd22cc93898?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=4050&q=80)",
        // "url(https://images.unsplash.com/photo-1606914469633-bd39206ea739?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=4050&q=80)",
      }}
    >
      <Meta />

      <main className="flex flex-col items-center justify-center">
        <h1>Convert</h1>

        <p
          className="text-2xl text-gray-800"
          style={{ textShadow: "1px 1px 2px white" }}
        >
          A conversion tool for <br className="hidden md:block" /> common
          ingredient measurements
        </p>

        <Convert />

        <div>
          <ShareButtons />

          <Feedback />
        </div>
      </main>

      <footer
        className="flex items-center justify-center border-t border-solid border-gray-400"
        style={{
          backgroundColor: "rgba(240, 240, 240, 0.5)",
          backdropFilter: "saturate(180%) blur(20px)",
        }}
      >
        <a href="https://projectgroceries.com" target="_blank">
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

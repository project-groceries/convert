import Link from "next/link";
import Meta from "../components/Meta";

const FeedbackReceived = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <Meta />
      <h1>Thank You</h1>
      <p>Your feedback has been received.</p>
      <Link href="/">
        <a className="text-6xl">🏡</a>
      </Link>
    </div>
  );
};

export default FeedbackReceived;

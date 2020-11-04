import Dialog from "@reach/dialog";
import { useState } from "react";

const Feedback = () => {
  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  return (
    <>
      <button
        className="p-2 mx-3 bg-blue-400 hover:bg-blue-500 transition-colors ease-in-out duration-300 rounded relative text-white"
        onClick={open}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 mr-2 inline-block"
        >
          <path
            fillRule="evenodd"
            d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
            clipRule="evenodd"
          />
        </svg>
        Feedback
        <span className="absolute flex right-0 top-0 transform translate-x-5 -translate-y-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-lg bg-green-500 text-sm p-1">
            New
          </span>
        </span>
      </button>
      <Dialog
        isOpen={showDialog}
        onDismiss={close}
        aria-label="Provide feedback"
      >
        <h1>Feedback</h1>
        <p>
          Couldn't find the density for an ingredient? Let us know and we'll add
          it to the list. Got a feature request? We're all ears. Any and all
          feedback is welcome!
        </p>
        <form action="/api/feedback" method="POST" className="p-3 space-y-3">
          <label htmlFor="email" className="block">
            Email (optional)
            <small className="block">
              So we can follow up and notify you of relevant developments.
            </small>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-solid border-gray-400 hover:border-gray-600 focus:border-gray-600 transition-colors ease-in-out duration-150 block w-72 p-2 rounded"
            />
          </label>
          <label htmlFor="feedback" className="block">
            Feedback
            <textarea
              name="feedback"
              id="feedback"
              cols="30"
              rows="10"
              required
              className="border border-solid border-gray-400 hover:border-gray-600 focus:border-gray-600 transition-colors ease-in-out duration-150 block w-72 p-2 rounded"
            ></textarea>
          </label>
          <div className="space-x-3">
            <button
              type="submit"
              className="p-2 bg-green-400 hover:bg-green-500 transition-colors ease-in-out duration-150 rounded"
            >
              Send my feedback
            </button>
            <button
              onClick={close}
              className="p-2 bg-orange-400 hover:bg-orange-500 transition-colors ease-in-out duration-150 rounded"
            >
              Never mind
            </button>
          </div>
        </form>
      </Dialog>
    </>
  );
};

export default Feedback;

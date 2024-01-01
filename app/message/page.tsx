import { IoSend } from "react-icons/io5";
import { sendMesssage } from "../actions/actions";

const Message = () => {
  return (
    <main className="py-10 grid gap-4 place-items-center">
      <h2 className="text-xl lg:text-3xl text-center px-3 font-bold tracking-tighter">
        Let's build <span className="text-green-200">something amazing</span> together.
      </h2>
      <p className="text-sm lg:text-base">Shoot me a message on socials or below.</p>
      <div className="my-4 py-5 px-3 w-9/12 max-w-lg lg:text-lg">
        <form action={sendMesssage} className="grid gap-3" autoComplete="off">
          <div className="grid">
            <label className="mb-1 ml-1 text-neutral-400" htmlFor="name">
              Name
            </label>
            <input
              className="text-sm px-3 py-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-100 rounded-lg focus-visible:outline focus:outline-offset-2 focus-within:outline-green-400/40 focus-within:bg-black"
              type="text"
              id="name"
              name="name"
              autoComplete="off"
              required
            />
          </div>
          <div className="grid">
            <label className="mb-1 ml-1 text-neutral-400" htmlFor="email">
              Email
            </label>
            <input
              className="text-sm px-3 py-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-100 rounded-lg focus-visible:outline focus:outline-offset-2 focus-within:outline-green-400/40"
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              required
            />
          </div>
          <div className="grid">
            <label className="mb-1 ml-1 text-neutral-400" htmlFor="message">
              Your message
            </label>
            <textarea
              className=" text-sm px-3 py-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-100 rounded-lg focus-visible:outline focus:outline-offset-2 focus-within:outline-green-400/40"
              name="message"
              id="message"
              rows={8}
              minLength={10}
              autoComplete="off"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className=" w-full lg:w-1/2 mx-auto mt-5 rounded text-neutral-200 py-3 px-6 font-bold flex items-center justify-center gap-4 border-2 border-neutral-800 group bg-gradient-to-r from-transparent to-transparent hover:from-transparent hover:to-green-400/20 hover:border-2 hover:border-green-200/30 focus-visible:outline-green-500 hover:text-white transition-colors"
          >
            <span className="text-lg ">Send</span>
            <div className="group-hover:-rotate-12 duration-200">
              <IoSend></IoSend>
            </div>
          </button>
        </form>
      </div>
    </main>
  );
};
export default Message;

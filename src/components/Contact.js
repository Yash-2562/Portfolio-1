import React from "react";
import ScrollReveal from "./ScrollReveal";

const Contact = () => {
  return (
    <ScrollReveal>

    <div className="max-w-[1200px] mx-auto bg-black sm:py-20 p-5 " id="contact">
      <div className="text-center">
        <h2 className="text-4xl font-bold leading-tight bg-gradient-to-r text-transparent from-cyan-300 to-green-400 bg-clip-text">
          Contact me{" "}
        </h2>
      </div>
      <div className="max-w-[800px] mx-auto">
        <div className="mt-6 bg-[#161616] rounded-xl">
          <div className="p-10">
            <form action="https://getform.io/f/wbrkyzga" method="POST">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                <div>
                  <div className="mt-2 5 ">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Your Name"
                      className="bg-black w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-t-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                      />
                  </div>
                </div>
                <div>
                  <div className="mt-2 5 ">
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="Your Email"
                      className="bg-black w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-t-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2 span-2">
                  <div className="mt-2 5 ">
                    <textarea
                      name="message"
                      id=""
                      placeholder="Description"
                      className="bg-black w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-t-gray-700 rounded-md focus:outline-none focus:border-pink-600"
                      ></textarea>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="text-xl w-full p-4 mt-2 font-semibold text-white bg-amber-600 rounded-md   "
                    >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
                    </ScrollReveal>
  );
};

export default Contact;

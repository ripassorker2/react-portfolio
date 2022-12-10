import React from "react";
import { MdEmail } from "react-icons/md";
import { BsLinkedin, BsTelephoneFill, BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <div>
      <section className=" text-gray-800 py-10 w-[80%] md:w-[92%] mx-auto ">
        <h1 className="md:text-5xl mb-11 text-3xl text-rose-600 font-semibold text-center">
          Contact Me
        </h1>
        <div className="relative overflow-hidden bg-no-repeat bg-cover"></div>
        <div className="container text-gray-800  ">
          <div className="block rounded-lg shadow-lg ">
            <div className="md:flex flex-wrap">
              <div className="grow-0 shrink-0 basis-auto w-full xl:w-5/12  mb-12 xl:mb-0">
                <form className="border rounded-xl shadow-2xl border-gray-900">
                  <div className="form-group mb-6">
                    <input
                      type="text"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal bg-gray-900 bg-clip-padding border border-solid border-gray-800 rounded transition ease-in-out m-0 text-gray-200 focus:bg-gray-900 focus:border-rose-600  focus:outline-none"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group mb-6">
                    <input
                      type="email"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal bg-gray-900 bg-clip-padding border border-solid border-gray-800 rounded transition ease-in-out m-0 text-gray-200 focus:bg-gray-900 focus:border-rose-600  focus:outline-none"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="form-group mb-6">
                    <textarea
                      className="
                      form-control block w-full px-3 py-1.5 text-base font-normal bg-gray-900 bg-clip-padding border border-solid border-gray-800 rounded transition ease-in-out m-0 text-gray-200 focus:bg-gray-900 focus:border-rose-600  focus:outline-none"
                      rows="3"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="
                    inline-block w-full rounded bg-rose-600 duration-300 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500  "
                  >
                    Submit
                  </button>
                </form>
              </div>
              <div className="grow-0 shrink-0 basis-auto w-full xl:w-7/12">
                <div className="flex flex-wrap">
                  <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="p-4 bg-rose-600 hover:bg-rose-700 duration-300  rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <MdEmail className="text-white text-5xl hover:scale-x-125 duration-300 " />
                        </div>
                      </div>
                      <div className="grow ml-6">
                        <p className="font-bold text-gray-50 mb-1">Emial</p>
                        <p className="text-gray-100">
                          ripassorkerrifat@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="p-4 bg-rose-600 hover:bg-rose-700 duration-300 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <BsLinkedin className="text-white text-5xl hover:scale-x-125 duration-300" />
                        </div>
                      </div>
                      <div className="grow ml-6">
                        <p className="font-bold mb-1 text-gray-50">Linkedin</p>
                        <a
                          href="https://www.linkedin.com/in/ripas-sorkar-rifat-b42a01257/"
                          target={"_blank"}
                          className="text-gray-200"
                        >
                          https://www.linkedin.com/in/ripas-sorkar-rifat-b42a01257/
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mb-12 md:mb-0 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                    <div className="flex align-start">
                      <div className="shrink-0">
                        <div className="p-4 bg-rose-600 hover:bg-rose-700 duration-300 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <BsTelephoneFill className="text-white text-5xl hover:scale-x-125 duration-300" />
                        </div>
                      </div>
                      <div className="grow ml-6">
                        <p className="font-bold text-gray-50 mb-1">
                          Phone Number
                        </p>
                        <p className="text-gray-100">+880 1744876681</p>
                      </div>
                    </div>
                  </div>
                  <div className="grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                    <div className="flex align-start">
                      <div className="shrink-0">
                        <div className="p-4 bg-rose-600 hover:bg-rose-700 duration-300 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <BsWhatsapp className="text-white text-5xl hover:scale-x-125 duration-300" />
                        </div>
                      </div>
                      <div className="grow ml-6">
                        <p className="font-bold text-gray-50 mb-1">Whatsapp</p>
                        <p className="text-gray-100">+880 1744876681</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

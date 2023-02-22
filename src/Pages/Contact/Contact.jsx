import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { BsLinkedin, BsTelephoneFill } from "react-icons/bs";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_se7rivo",
        "template_b941elg",
        form.current,
        "udGj2_-JvXBkCXsxX"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <section
        className=" text-gray-800 pt-28 w-[80%] md:w-[92%] mx-auto "
        id="contact"
      >
        <h4 className="md:text-5xl mb-2 text-3xl text-[#eb10bb] font-bold text-center">
          Contact Me
        </h4>
        <h3 className="md:text-xl text-lg font-semibold mb-11 text-gray-100 text-center">
          If you have any queries, Please ask me?
        </h3>
        <div className="relative overflow-hidden bg-no-repeat bg-cover"></div>
        <div className="container text-gray-800  ">
          <div className="block rounded-lg shadow-xl pb-3 ">
            <div className="md:flex flex-wrap">
              <div
                data-aos="fade-right"
                className="grow-0 shrink-0 basis-auto w-full xl:w-5/12  mb-12 xl:mb-0"
              >
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="border rounded-xl border-gray-900"
                >
                  <div className="form-group mb-6">
                    <input
                      type="text"
                      name="user_name"
                      className="form-control block w-full px-3 py-2 text-base font-normal bg-[#1a1919] bg-clip-padding border border-solid border-gray-800 rounded transition ease-in-out m-0 text-gray-200 focus:bg-[#1a1919] focus:border-[#eb10bb]  focus:outline-none"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group mb-6">
                    <input
                      type="email"
                      name="user_email"
                      className="form-control block w-full px-3 py-2 text-base font-normal bg-[#1a1919] bg-clip-padding border border-solid border-gray-800 rounded transition ease-in-out m-0 text-gray-200 focus:bg-[#1a1919]focus:border-[#eb10bb]  focus:outline-none"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="form-group mb-6">
                    <textarea
                      name="message"
                      className="
                      form-control block w-full px-3 py-1.5 text-base font-normal bg-[#1a1919] bg-clip-padding border border-solid border-gray-800 rounded transition ease-in-out m-0 text-gray-200 focus:bg-[#1a1919]focus:border-[#eb10bb]  focus:outline-none"
                      rows="3"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="
                    inline-block w-full rounded bg-[#eb10bb]  px-12 py-3 text-sm font-medium text-white shadow hover:bg-[#10eb1f] duration-300 hover:text-gray-800  focus:outline-none focus:ring active:bg-rose-500  "
                  >
                    Submit
                  </button>
                </form>
              </div>
              <div
                data-aos="fade-left"
                className="grow-0 shrink-0 basis-auto w-full xl:w-7/12"
              >
                <div className="flex flex-wrap">
                  <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="p-4 bg-[#eb10bb] hover:bg-[#10eb1f]  hover:text-gray-800  duration-300  rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <MdEmail className="text-white text-5xl hover:scale-x-125 duration-300 " />
                        </div>
                      </div>
                      <div className="grow ml-6">
                        <p className="font-bold text-gray-50 mb-1">Email</p>
                        <p className="text-gray-100 flex-wrap overflow-hidden">
                          ripassorkerrifat@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-12 md:mb-0 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                    <div className="flex align-start">
                      <div className="shrink-0">
                        <div className="p-4 bg-[#eb10bb] hover:bg-[#10eb1f]  hover:text-gray-800  duration-300 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
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
                  <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="p-4 bg-[#eb10bb] hover:bg-[#10eb1f]  hover:text-gray-800  duration-300 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <BsLinkedin className="text-white text-5xl hover:scale-x-125 duration-300" />
                        </div>
                      </div>
                      <div className="grow ml-6">
                        <p className="font-bold mb-1 text-gray-50">Linkedin</p>
                        <a
                          href="https://www.linkedin.com/in/ripas-sorkar-rifat-b42a01257/"
                          target={"_blank"}
                          className="text-gray-200 w-full"
                        >
                          Linkedin profile
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="grow-0 shrink-0 basis-auto w-full md:w-6/12 px-3 lg:px-6">
                    <div className="flex align-start">
                      <div className="shrink-0">
                        <div className="p-4 bg-[#eb10bb] hover:bg-[#10eb1f]  hover:text-gray-800  duration-300 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                          <MdLocationOn className="text-white text-5xl hover:scale-x-125 duration-300" />
                        </div>
                      </div>
                      <div className="grow ml-6">
                        <p className="font-bold text-gray-50 mb-1">Location</p>
                        <p className="text-gray-100">
                          Panchagarh,Rajshahi Bangladesh
                        </p>
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

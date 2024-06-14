import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form submitted with data:", formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setMessageSent(true);
  };

  return (
    <div className="flex flex-col lg:flex-row lg:justify-around gap-4 lg:items-center lg:mx-auto mt-10 mb-10">
      <div className="relative mx-auto flex flex-col justify-center w-4/6 lg:w-3/6 overflow-hidden">
        <h1 className="font-bold text-3xl text-center pb-5 mb-5 underline">
          Contact us
        </h1>
        <div className="w-full p-6 m-auto rounded-md bg-[#cb7631] hover:shadow-xl ">
          <h2 className="text-3xl font-semibold text-center text-white bg-[#cb7631] p-4 m-4  uppercase">
            Contact Form
          </h2>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="name" className="text-white">
                Your name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full block px-5 py-2 mt-2 border-gray-300 rounded-md shadow-sm"
                placeholder="XYZ"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="text-white">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full block mt-2 px-5 py-3"
                placeholder="xyz@example.com"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="message" className="text-white">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full block mt-2 px-5 py-8 border-gray-300 rounded-md shadow-sm"
                placeholder="Type your message here..."
                rows="5"
              ></textarea>
            </div>
            <div className="mb-2 py-2">
              <button
                type="submit"
                className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 mt-2 cursor-pointer bg-black text-white"
              >
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-black rounded-full"></span>
                <span className="relative">Submit</span>
              </button>
            </div>
          </form>
          {messageSent && (
            <p>
              Your message has been sent. We will contact you as soon as
              possible.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;

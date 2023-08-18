import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_s5fbygl',
        'template_vu7v6j4',
        {
          from_name: form.name,
          to_name: "Yassine Banouq",
          from_email: form.email,
          to_email: "banouq90@gmail.com",
          message: form.message,
        },
        'SZbBEfYlJ3wOLc3de'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 p-10`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-gray-100 p-8 rounded-2xl shadow-2xl'
      >
        <p className="sm:text-[18px] text-[14px] text-gray-500 uppercase tracking-wider">Get in touch</p>
        <h3 className="text-black text-left font-extrabold md:text-[60px] sm:text-[50px] xs:text-[40px] text-[5rem]">Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-black font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-white py-4 px-6 placeholder:text-gray-400 border-none text-gray-400 rounded-lg outline-none font-medium shadow-2xl'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-black font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-white py-4 px-6 placeholder:text-gray-400 text-gray-400 rounded-lg outline-none border-none font-medium shadow-2xl'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-black font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-white py-4 px-6 placeholder:text-gray-400 text-gray-400 rounded-lg outline-none border-none font-medium shadow-2xl'
            />
          </label>

          <button
            type='submit'
            className='bg-gray-400 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-gray-400 shadow-xl'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
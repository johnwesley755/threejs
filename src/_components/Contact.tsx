import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      className="min-h-screen flex flex-col justify-center items-center p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold">Contact Me</h2>
      <form className="mt-6 flex flex-col gap-4">
        <input
          className="p-3 rounded-lg bg-gray-700 text-white"
          type="text"
          placeholder="Your Name"
        />
        <input
          className="p-3 rounded-lg bg-gray-700 text-white"
          type="email"
          placeholder="Your Email"
        />
        <textarea
          className="p-3 rounded-lg bg-gray-700 text-white"
          rows={4}
          placeholder="Your Message"
        ></textarea>
        <button className="p-3 bg-pink-500 rounded-lg">Send Message</button>
      </form>
    </motion.section>
  );
};

export default Contact;

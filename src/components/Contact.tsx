import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="pt-20">
      <div className="border-b border-neutral-900 pb-20">
        <motion.h1
          className="mb-10 text-center text-4xl lg:text-6xl"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Get in Touch
        </motion.h1>
        <div className="text-center tracking-tighter">
          <motion.p
            className="my-4"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {CONTACT.address}
          </motion.p>
          <motion.p
            className="my-4"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            {CONTACT.phoneNo}
          </motion.p>
          <a
            href="#home"
            className="border-b"
          >
            {CONTACT.email}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

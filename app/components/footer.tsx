import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const FooterSection = () => {
  return (
    <footer
      id="contact"
      className="bg-black/80 backdrop-blur-md border-t border-zinc-800 text-zinc-400"
    >
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-white text-2xl font-bold"
          >
            <span className="text-blue-500">K</span>UPPIYA
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-sm mt-2"
          >
            Daily facts, tech rumors & hidden stories in just 5 minutes.
          </motion.p>
        </div>
        <div>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-white font-semibold mb-3"
          >
            Quick Links
          </motion.h2>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-2 text-sm"
          >
            <a href="/" className="hover:text-white cursor-pointer">
              Home
            </a>
            <a href="#articles" className="hover:text-white cursor-pointer">
              Articles
            </a>
            <a href="#about" className="hover:text-white cursor-pointer">
              About
            </a>
            <a href="#contact" className="hover:text-white cursor-pointer">
              Contact
            </a>

            <a href="/terms" className="hover:text-white">
              Terms
            </a>
            <a href="/privacy" className="hover:text-white">
              Privacy Policy
            </a>
          </motion.div>
        </div>
        <div>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-white font-semibold mb-3"
          >
            Stay Updated
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-sm mb-5"
          >
            Get daily updates of facts, tech rumors, and hidden stories from Sri
            Lanka & the world.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-row gap-5 cursor-pointer"
          >
            <FaFacebookF className="text-blue-500 hover:text-white" />{" "}
            <FaWhatsapp className="text-green-400 hover:text-white" />
            <FaLinkedinIn className="text-blue-400 hover:text-white" />
            <MdEmail className="text-red-500 hover:text-white" />
          </motion.div>
        </div>
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="border-t border-zinc-800 text-center py-4 text-xs text-zinc-500"
      >
        <p>© 2026 Kuppiya — Stay Curious • Stay Updated</p>

        <p className="mt-1">
          Developed by
          <a className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer">
            {" "}
            Nadeesha Ruwandima
          </a>
        </p>
      </motion.div>
    </footer>
  );
};

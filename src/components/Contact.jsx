import { SiGithub, SiGmail, SiWhatsapp } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const contacts = [
    {
      title: "Email",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=retnowardani024@gmail.com",
      icon: <SiGmail />,
    },
    {
      title: "GitHub",
      link: "https://github.com/retnnoo",
      icon: <SiGithub  />,
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/retno-wardani/",
      icon: <FaLinkedin/>,
    },
    {
      title: "WhatsApp",
      link: "https://wa.me/6282213072291",
      icon: <SiWhatsapp />,
    },
  ];

  const contactContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  
  const contactItem = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20">
      <div className="mx-auto px-8 sm:px-15 lg:px-10 2xl:px-20">
        {/* HEADER */}
        <motion.div className="max-w-3xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
          <span className="text-cyan-400 font-medium 2xl:text-2xl tracking-wide">
            GET IN TOUCH
          </span>

          <p className="mt-3 md:text-4xl text-3xl 2xl:text-7xl font-bold text-white">
            Let's Work Together
          </p>

          <p className="mt-5 text-sm md:text-lg 2xl:text-3xl text-white leading-relaxed">
            Whether you have a project idea, internship opportunity,
            freelance work, or simply want to connect, I'd love to
            hear from you.
          </p>
        </motion.div>

        {/* CONTACT CARDS */}
        <motion.div className="grid md:grid-cols-4 grid-cols-1 gap-6 mt-14"
          variants={contactContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}>
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={contactItem}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden bg-white/5 backdrop-blur-md border border-white/10
                         rounded-3xl p-6 flex items-center justify-between transition-all duration-300
                         hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
              "
            >
              <div className="flex items-center">
                {/* ICON */}
                <div
                  className="
                    w-14 h-14
                    2xl:w-20 2xl:h-20
                    rounded-2xl
                    bg-cyan-400/10
                    border
                    border-cyan-400/20

                    flex
                    items-center
                    justify-center

                    text-cyan-400
                    transition-all
                    duration-300
                    
                    group-hover:bg-cyan-400
                    group-hover:text-black
                    group-hover:scale-110

                    md:text-xl 2xl:text-4xl
                  "
                >
                  {contact.icon}
                </div>

                {/* TEXT */}
                <div className="ml-4">
                  <h3 className="text-white font-semibold text-lg 2xl:text-3xl">
                    {contact.title}
                  </h3>
                </div>
              </div>

              <ArrowUpRight size={22} 
              className="text-cyan-400 transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1"/>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA BOX */}
        <motion.div className="mt-16 rounded-[32px] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-cyan-500/5 to-transparent p-8 md:p-12"
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}>
          <p className="text-2xl md:text-4xl 2xl:text-6xl font-bold text-white">
            Ready to build something amazing?
          </p>

          <p className="mt-4 text-gray-400 max-w-2xl 2xl:text-2xl 2xl:max-w-7xl ">
            I'm currently open to internship opportunities,
            freelance projects, and collaborations. Feel free
            to reach out if you'd like to work together.
          </p>

          <button
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=retnowardani024@gmail.com",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="inline-flex items-center gap-2 mt-5 2xl:mt-7 px-6 py-3 2xl:py-5 rounded-xl bg-cyan-400 text-black 2xl:text-2xl font-semibold transition-all duration-300 hover:scale-105"
            animate={{
              boxShadow: [
                "0 0 0 rgba(34,211,238,0)",
                "0 0 25px rgba(34,211,238,0.4)",
                "0 0 0 rgba(34,211,238,0)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            Say Hello
            <ArrowUpRight className="2xl:w-8 2xl:h-8 w-4 h-4" />
          </button>
        </motion.div>

        {/* FOOTER */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 Retno Wardani. Turning ideas into digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
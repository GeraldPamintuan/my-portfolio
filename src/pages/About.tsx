import { FaCss3Alt, FaHtml5, FaJava, FaJs, FaReact } from 'react-icons/fa';
import {
  SiFirebase,
  SiFlutter,
  SiLiquibase,
  SiMysql,
  SiSpringboot,
  SiTailwindcss,
} from 'react-icons/si';

import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    { icon: <FaHtml5 className="text-orange-600" />, label: 'HTML' },
    { icon: <FaCss3Alt className="text-blue-600" />, label: 'CSS' },
    { icon: <FaJs className="text-yellow-400" />, label: 'JavaScript' },
    { icon: <FaReact className="text-sky-400" />, label: 'React' },
    { icon: <SiTailwindcss className="text-cyan-500" />, label: 'TailwindCSS' },
    { icon: <SiFlutter className="text-sky-600" />, label: 'Flutter' },
    { icon: <SiFirebase className="text-yellow-500" />, label: 'Firebase' },
    { icon: <FaJava className="text-red-600" />, label: 'Java' },
    { icon: <SiSpringboot className="text-green-600" />, label: 'Spring Boot' },
    { icon: <SiLiquibase className="text-blue-800" />, label: 'Liquibase' },
    { icon: <SiMysql className="text-blue-500" />, label: 'MySQL' },
  ];

  // Animation Variants
  const container = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="about"
      className="py-20 px-6 max-w-4xl mx-auto text-center"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <motion.h2
        className="text-3xl font-heading font-bold text-primary mb-6"
        variants={item}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-lg text-neutral leading-relaxed"
        variants={item}
      >
        Hi, I’m <span className="font-semibold">Gerald Pamintuan</span> — a
        Software Engineer specializing in{' '}
        <span className="font-semibold">
          Java, Spring Boot, and full-stack development
        </span>
        . I enjoy building scalable and efficient applications that solve
        real-world problems. With experience across both frontend and backend, I
        can deliver complete end-to-end solutions.
      </motion.p>

      <motion.p
        className="text-lg text-neutral leading-relaxed mt-4"
        variants={item}
      >
        I’m passionate about clean code, continuous learning, and creating
        solutions that improve collaboration and productivity. When I’m not
        coding, I enjoy exploring new technologies, traveling, and playing
        darts.
      </motion.p>

      {/* Skills Section */}
      <motion.div className="mt-10" variants={item}>
        <h3 className="text-2xl font-heading font-bold text-primary mb-6">
          Tech Stack
        </h3>

        <motion.div
          className="flex flex-wrap justify-center gap-16 text-5xl text-neutral"
          variants={container}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center cursor-pointer"
              variants={item}
              whileHover={{ scale: 1.25, rotate: 5 }}
            >
              {skill.icon}
              <span className="text-sm mt-2">{skill.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

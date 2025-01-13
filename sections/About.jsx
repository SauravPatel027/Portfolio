'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Me" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      > My name is{' '}
        <span className="font-extrabold text-white">Saurav Patel.</span>{' '}
        I am a student at {' '}<span className="font-extrabold text-white">IIT Delhi </span> and always ready to explore new things.
        I am a tech enthusiast with interests in research along with hobby of
        reading books, travelling and horse-riding. I am also a{' '}
        <span className="font-extrabold text-white">
          NCC cadet
        </span>{' '}
        with C certificate.{' '}
        I am always eager to accept new challenges and {' '}<span className="font-extrabold text-white">conquer</span> them.
        
        I hope you will like this website, completely designed by me and test all it's{' '}
        <span className="font-extrabold text-white">features.</span> Please
        help yourself by scrolling down
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;

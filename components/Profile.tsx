import { motion } from "framer-motion";
import { fadeAnim, spring } from "@libs/animation";
import DarkMode from "@components/DarkMode";

const profile = {
  greeting: "Oh Hello there,",
  bio: "My name is Tumur(Tim), and I am an Android developer in the Bay Area - San Francisco.",
  handIcon: "/hand.png",
  handIconDescription: "A waving hand",
};

const heroVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  enter: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.5, transition: { duration: 0.5 } },
};

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function Profile() {
  return (
    <>
      <>
        <div className="bg-grid-slate-900/[0.04] dark:bg-grid-slate-100/[0.03] h-[10.5rem] place-items-center bg-top dark:border-t dark:border-slate-100/5 dark:bg-[url('/background_dark.svg')] dark:bg-[center_top_-1px] dark:[mask-image:linear-gradient(0deg,transparent,black)]"></div>
        <motion.div
          initial="hide"
          animate="show"
          exit="hide"
          variants={fadeAnim}
          className="relative -top-20 place-items-center"
        >
          <div className="">
            <span className="sr-only">{profile.handIconDescription}</span>
            <motion.img
              src={profile.handIcon}
              className="z-0 mx-auto flex h-20 w-20"
              animate={{
                rotate: [0, 20, 0, 20, 0, 20, 0],
              }}
              transition={{ spring }}
            />
          </div>
          <h2 className="mt-4 text-center text-2xl font-extrabold leading-8 tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            {profile.greeting}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-slate-600 dark:text-slate-400">
            {profile.bio}
          </p>
          <p className="md:hidden">
            <DarkMode />
          </p>
        </motion.div>
      </>
    </>
  );
}

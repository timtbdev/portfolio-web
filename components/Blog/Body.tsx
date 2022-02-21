import { listVariants, itemVariants, fadeAnim } from "@libs/animation";
import { motion } from "framer-motion";
import { FC } from "react";
import Header from "@components/Blog/Header"

interface Props {
  children?: any | any[];
}

const Body: FC<Props> = ({ children }) => {
  return (
    <>
      <main className="mx-auto max-w-5xl px-4 pb-28 sm:px-6 md:px-8 xl:max-w-6xl xl:px-12">
        <div className="space-y-16">{children}</div>
      </main>
    </>
  );
};

export default Body;

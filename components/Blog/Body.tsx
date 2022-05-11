import { listVariants, itemVariants, fadeAnim } from "@libs/animation";
import { motion } from "framer-motion";
import { FC } from "react";
import Header from "@components/Blog/Header";

interface Props {
  children?: any | any[];
}

const Body: FC<Props> = ({ children }) => {
  return (
    <>
      <div className="relative mt-14 pt-10 xl:pt-0">
        <div className="absolute inset-x-0 top-0 hidden h-[37.5rem] bg-gradient-to-b from-[#0c1120] dark:block xl:top-14"></div>
        <div className="gridLockup absolute inset-x-0 top-0 bg-top bg-no-repeat xl:top-14"></div>
        <div className="bg-grid-slate-900/[0.04] dark:bg-grid-slate-100/[0.03] absolute inset-x-0 top-0 h-[37.5rem] bg-top [mask-image:linear-gradient(0deg,transparent,black)] dark:border-t dark:border-slate-100/5 dark:bg-[center_top_-1px] xl:top-14"></div>
        <div className="mx-auto max-w-7xl sm:px-6 md:px-8">
          <div className="relative">
            <div className="relative overflow-hidden bg-slate-800 pt-2 shadow-xl dark:bg-slate-900/70 dark:ring-1 dark:ring-inset dark:ring-white/10 dark:backdrop-blur sm:rounded-xl lg:grid lg:grid-cols-2 lg:grid-rows-1">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;

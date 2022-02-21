import { listVariants, itemVariants, fadeAnim } from "@libs/animation";
import { motion } from "framer-motion";
import Link from "next/link";
import dateFormat from "date-fns/format";
import { FC } from "react";

interface Props {
  title: string;
  date: string;
  slug: string;
  text: string;
}

const Post: FC<Props> = ({ title, date, slug, text }: Props) => {
  return (
    <>
      <motion.div
        variants={itemVariants}
        className="relative flex max-w-3xl flex-col lg:ml-auto xl:w-[50rem] xl:max-w-none"
      >
        <h3 className="mb-4 text-xl font-bold tracking-tight text-slate-900 dark:text-slate-200">
          <a href="/blog/automatic-class-sorting-with-prettier">{title}</a>
        </h3>
        <div className="prose prose-slate dark:prose-dark mb-6">
          <p className="text-base text-slate-600 dark:text-slate-500">{text}</p>
        </div>
        <div className="mt-auto flex flex-row-reverse items-center justify-end">
          <dl>
            <dt className="sr-only">{date}</dt>
            <dd className="text-sm leading-6 dark:text-slate-400 lg:absolute lg:top-0 lg:right-full lg:mr-8 lg:whitespace-nowrap">
              {date}
            </dd>
          </dl>
          <svg
            width="2"
            height="2"
            fill="currentColor"
            className="mx-4 text-slate-700 lg:hidden"
          >
            <circle cx="1" cy="1" r="1"></circle>
          </svg>

          <Link href={`/blog/${encodeURIComponent(slug)}`}>
            <a className="group inline-flex h-9 items-center whitespace-nowrap rounded-full bg-slate-100 px-3 text-sm font-semibold text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500">
              Read more
              <span className="sr-only"></span>
              <svg
                className="ml-3 overflow-visible text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400"
                width="3"
                height="6"
                viewBox="0 0 3 6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M0 0L3 3L0 6"></path>
              </svg>
            </a>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Post;

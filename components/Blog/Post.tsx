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
      <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
        <div className="mx-auto grid max-w-4xl grid-cols-1 lg:max-w-5xl lg:grid-cols-2 lg:gap-x-20">
          <div className="relative col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 p-3 sm:row-start-2 sm:bg-none sm:p-0 lg:row-start-1">
            <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 dark:sm:text-white md:text-2xl">
              {title}
            </h1>
            <p className="text-sm font-medium leading-4 text-white sm:text-slate-500 dark:sm:text-slate-400">
              {date}
            </p>
          </div>
          <div className="col-start-1 col-end-3 row-start-1 grid gap-4 sm:mb-6 sm:grid-cols-4 lg:col-start-2 lg:row-span-6 lg:row-end-6 lg:mb-0 lg:gap-6">
            <img
              src="/_next/static/media/beach-house.02381ba1b6293047997200a3099d03cb.jpg"
              alt=""
              className="h-60 w-full rounded-lg object-cover sm:col-span-2 sm:h-52 lg:col-span-full"
              loading="lazy"
            />
            <img
              src="/_next/static/media/beach-house-interior-1.bc69273a536a51bb58092b2896b92e3a.jpg"
              alt=""
              className="hidden h-52 w-full rounded-lg object-cover sm:col-span-2 sm:block md:col-span-1 lg:col-span-2 lg:row-start-2 lg:h-32"
              loading="lazy"
            />
            <img
              src="/_next/static/media/beach-house-interior-2.de1a47680b1fb31d36d1130dc925b197.jpg"
              alt=""
              className="hidden h-52 w-full rounded-lg object-cover md:block lg:col-span-2 lg:row-start-2 lg:h-32"
              loading="lazy"
            />
          </div>

          <div className="col-start-1 row-start-3 mt-4 self-center sm:col-start-2 sm:row-span-2 sm:row-start-2 sm:mt-0 lg:col-start-1 lg:row-start-3 lg:row-end-4 lg:mt-6">
            <p className="col-start-1 mt-4 text-sm leading-6 dark:text-slate-400 sm:col-span-2 lg:col-span-1 lg:row-start-4 lg:mt-6">
              {text}
            </p>
            <a
              className="group mt-5 inline-flex h-9 items-center whitespace-nowrap rounded-full bg-slate-100 px-3 text-sm font-semibold text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-500 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500"
              href="/blog/automatic-class-sorting-with-prettier"
            >
              Read more
              <span className="sr-only">
                , Automatic Class Sorting with Prettier
              </span>
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
          </div>
        </div>
      </main>
    </>
  );
};

export default Post;

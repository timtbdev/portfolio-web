import { listVariants, itemVariants, fadeAnim } from "@libs/animation";
import { motion } from "framer-motion";

export default function Blog() {
  return (
    <>
      <div className="relative xl:pt-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <main className="relative z-20 mx-auto max-w-3xl xl:max-w-none">
            <div className="space-y-16">
              <section>
                <ul className="sm:space-y-6">
                  <li className="-mx-4 flex flex-col-reverse items-start bg-slate-50 p-4 pb-10 dark:bg-slate-800/50 sm:mx-0 sm:rounded-2xl sm:p-10 xl:flex-row">
                    <div className="flex-auto">
                      <h3 className="mb-4 text-sm font-semibold leading-6 text-blue-500">
                        Refactoring UI
                      </h3>
                      <p className="mb-2 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-200">
                        Learn UI Design
                      </p>
                      <div className="mb-6 space-y-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        <p>
                          Refactoring UI is a design-for-developers book + video
                          series put together by Adam Wathan and Steve Schoger.
                          It covers literally everything we know about making
                          things look awesome.
                        </p>
                        <p>
                          Almost 10,000 people have picked it up so far and have
                          all sorts of awesome things to say about how it helped
                          them improve their work.
                        </p>
                      </div>
                      <a
                        className="group inline-flex h-9 items-center whitespace-nowrap rounded-full bg-slate-700 px-3 text-sm font-semibold text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 dark:focus:ring-offset-0"
                        href="https://refactoringui.com"
                      >
                        Learn more
                        <span className="sr-only">Refactoring UI</span>
                        <svg
                          className="ml-3 overflow-visible text-slate-300 group-hover:text-slate-200 dark:text-slate-500 dark:group-hover:text-slate-400"
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
                    <div className="mb-10 w-full flex-none xl:mb-0 xl:ml-8 xl:w-[29rem]">
                      <div className="aspect-w-[1216] aspect-h-[606] sm:aspect-w-[1376] sm:aspect-h-[664] overflow-hidden rounded-lg bg-slate-100 shadow-lg dark:bg-slate-800">
                        <img
                          src="/_next/static/media/refactoringui@75.110f38259e7a41accccfc8e28416b20d.jpg"
                          className="min-w-640px"
                        />
                        <img
                          src="/_next/static/media/refactoringui-small@75.9d40a4469da459da4b020ee0adb7f2c2.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </li>
                  <li className="-mx-4 flex flex-col-reverse items-start bg-slate-50 p-4 pb-10 dark:bg-slate-800/50 sm:mx-0 sm:rounded-2xl sm:p-10 xl:flex-row">
                    <div className="flex-auto">
                      <h3 className="mb-4 text-sm font-semibold leading-6 text-sky-500">
                        Tailwind UI
                      </h3>
                      <p className="mb-2 text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-200">
                        Beautiful UI components, crafted by the creators of
                        Tailwind CSS
                      </p>
                      <div className="mb-6 space-y-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        <p>
                          Tailwind UI is a collection of professionally
                          designed, pre-built, fully responsive HTML snippets
                          you can drop into your Tailwind projects.
                        </p>
                        <p>
                          There are currently over 550 components available in
                          three different categories (Marketing, Application UI
                          and E-commerce) and we’re always adding more.
                        </p>
                      </div>
                      <a
                        className="group inline-flex h-9 items-center whitespace-nowrap rounded-full bg-slate-700 px-3 text-sm font-semibold text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 dark:focus:ring-offset-0"
                        href="https://tailwindui.com"
                      >
                        Learn more<span className="sr-only">Tailwind UI</span>
                        <svg
                          className="ml-3 overflow-visible text-slate-300 group-hover:text-slate-200 dark:text-slate-500 dark:group-hover:text-slate-400"
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
                    <div className="mb-10 w-full flex-none xl:mb-0 xl:ml-8 xl:w-[29rem]">
                      <div className="aspect-w-[1216] aspect-h-[606] sm:aspect-w-[1376] sm:aspect-h-[664] overflow-hidden rounded-lg bg-slate-100 shadow-lg dark:bg-slate-800">
                        <img
                          src="/_next/static/media/tailwindui@75.77bca206799acceee0cfb504d253bac6.jpg"
                          className="min-width-640"
                        />
                        <img
                          src="/_next/static/media/tailwindui-small@75.e707dc98eae0f49783f685614470492f.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </section>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

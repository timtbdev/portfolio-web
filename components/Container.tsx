import { FC } from "react";
import { FaGithub as GithubIcon } from "react-icons/fa";

interface Props {
  children?: any | any[];
  url: string;
}

const Container: FC<Props> = ({ children, url }) => {
  return (
    <>
      <div className="relative mb-20 pt-10 xl:pt-0">
        <div className="absolute inset-x-0 top-0 hidden h-[37.5rem] bg-gradient-to-b from-[#0c1120] dark:block xl:top-14"></div>
        <div className="gridlockup absolute inset-x-0 top-0 bg-top bg-no-repeat xl:top-14"></div>
        <div className="absolute inset-x-0 top-0 h-[37.5rem] bg-[url('/bg_light.svg')] bg-top [mask-image:linear-gradient(0deg,transparent,black)] dark:border-t dark:border-slate-100/5 dark:bg-[url('/bg_dark.svg')] dark:bg-[center_top_-1px] xl:top-14"></div>
        <div className="mx-auto max-w-7xl sm:px-6 md:px-8">
          <div className="sm:px-2 xl:mt-0">
            <div className="relative">
              <div className="width: 1200px min-w-full max-w-full shadow-xl sm:rounded-xl">
                <div className="ring-1 ring-slate-900/5 sm:rounded-xl">
                  <div className="dark:highlight-white/10 bg-gradient-to-b from-white to-[#FBFBFB] dark:bg-slate-700 dark:bg-none sm:rounded-t-xl">
                    <div className="grid-template-columns: 7.125rem 1fr 7.125rem grid items-center py-2.5 px-4">
                      <div className="flex items-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-[#EC6A5F]"></div>
                        <div className="ml-1.5 h-2.5 w-2.5 rounded-full bg-[#F4BF50]"></div>
                        <div className="ml-1.5 h-2.5 w-2.5 rounded-full bg-[#61C454]"></div>
                        <svg
                          width="24"
                          height="24"
                          fill="none"
                          className="ml-4 flex-none text-slate-400 dark:text-slate-500"
                        >
                          <path
                            d="m15 7-5 5 5 5"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        <svg
                          width="24"
                          height="24"
                          fill="none"
                          className="ml-2 flex-none text-slate-400 dark:text-slate-500"
                        >
                          <path
                            d="m10 7 5 5-5 5"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <div className="mx-auto flex w-4/5 items-center justify-center rounded-md bg-slate-100 py-1 text-sm font-medium leading-6 ring-1 ring-inset ring-slate-900/5 dark:bg-slate-800 dark:text-slate-500">
                          <GithubIcon className="mr-1.5 h-4 w-4 text-slate-800 dark:text-slate-500" />
                          <a
                            className="text-slate-800 hover:border-sky-600 hover:text-sky-600 dark:text-slate-500 dark:hover:border-sky-400 dark:hover:text-sky-400"
                            href={url}
                            target="_blank"
                          >
                            {url}
                          </a>
                        </div>
                      </div>
                      <div className="mb-3 flex justify-end"></div>
                    </div>
                  </div>
                  <div className="relative -mb-8 rounded-b-xl border-t border-slate-200 bg-white pb-8 dark:border-slate-900/50 dark:bg-slate-800">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;

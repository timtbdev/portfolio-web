import { Popover, Transition } from "@headlessui/react";
import DarkMode from "@components/DarkMode";
import { useRouter } from "next/router";
import classNames from "classnames";
import Link from "next/link";
import { useRef } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Fragment } from "react";

const profile = {
  name: "Tim",
  job: "Android Developer",
  imageUrl: "/profile.jpg",
  imageDescription: "Profile picture",
};

const menu = [
  {
    index: 1,
    name: "Projects",
    href: "/",
    current: false,
  },
  // { index: 2, name: "Blog", href: "/blog", current: false, icon: BlogIcon },
];

export default function Navigation() {
  const { pathname } = useRouter();
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;

  return (
    <Popover
      as="nav"
      className="bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05] supports-backdrop-blur:bg-white/60 sticky top-0 
      z-40 w-full 
      flex-none border-b border-slate-900/10 bg-opacity-40 
      opacity-100
      backdrop-blur-xl 
      backdrop-filter 
      transition-colors duration-500 dark:border-b dark:border-slate-100/5"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex justify-between py-2 md:justify-start">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="/" className="inline-flex items-center px-4">
                  <span className="sr-only">{profile.imageDescription}</span>
                  <img
                    src={profile.imageUrl}
                    className="h-12 w-12 flex-shrink-0 rounded-full"
                  />
                  <div className="ml-2">
                    <div className="font-semibold leading-6 text-slate-700 dark:text-slate-200">
                      {profile.name}
                    </div>
                    <div className="font-base text-sm leading-6 text-slate-500 dark:text-slate-400">
                      {profile.job}
                    </div>
                  </div>
                </a>
              </div>
              <div className="my-4 mr-2 md:hidden">
                {/* Mobile menu button */}
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-slate-700 transition duration-500 ease-in-out hover:text-sky-600 dark:bg-slate-900 dark:text-slate-200 dark:hover:text-sky-400">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-8 w-8" aria-hidden="true" />
                </Popover.Button>
              </div>
              <div className="hidden space-x-10 md:inline-flex">
                {menu.map(({ href, name, index }) => (
                  <Link href={href}>
                    <a
                      key={index}
                      className="inline-flex items-center px-1 pt-1 text-base font-semibold text-slate-700 transition duration-500 ease-in-out hover:border-sky-600 hover:text-sky-600 dark:text-slate-200 dark:hover:border-sky-400 dark:hover:text-sky-400"
                    >
                      {name}
                    </a>
                  </Link>
                ))}
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  static
                  className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
                >
                  <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-slate-800">
                    <div className="border-b border-gray-200 px-5 pt-5 pb-6 dark:border-gray-700">
                      <div className="flex items-center justify-between">
                        <div className="inline-flex items-center">
                          <span className="sr-only">
                            {profile.imageDescription}
                          </span>
                          <img
                            src={profile.imageUrl}
                            className="h-12 w-12 flex-shrink-0 rounded-full"
                          />
                          <div className="ml-2">
                            <div className="text-base font-medium leading-6 text-slate-700 dark:text-slate-200">
                              {profile.name}
                            </div>
                            <div className="font-base text-sm leading-6 text-slate-500 dark:text-slate-400">
                              {profile.job}
                            </div>
                          </div>
                        </div>
                        <div>
                          <Popover.Button className="inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-slate-700 transition duration-500 ease-in-out hover:text-sky-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:text-sky-400">
                            <span className="sr-only">Close menu</span>
                            <XIcon className="h-8 w-8" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                    </div>
                    <div className="py-6 px-5">
                      <nav className="grid grid-cols-1 gap-7">
                        {menu.map((item) => (
                          <Link href={item.href}>
                            <a
                              key={item.index}
                              className="-m-3 flex items-center rounded-lg p-3 text-base font-medium"
                            >
                              <div
                                className={classNames(
                                  pathname == item.href
                                    ? "text-sky-600 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-400"
                                    : "text-slate-700 hover:text-sky-600 dark:text-slate-200 dark:hover:text-sky-400",
                                  "ml-4 text-base font-medium"
                                )}
                              >
                                {item.name}
                              </div>
                            </a>
                          </Link>
                        ))}
                      </nav>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>

              <div className="hidden items-center justify-end md:inline-flex md:flex-1 lg:w-0">
                <DarkMode />
              </div>
            </div>
          </div>
        </>
      )}
    </Popover>
  );
}

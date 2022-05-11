import { FC } from "react";

interface Props {
  children?: any | any[];
  url: string;
}

const Container: FC<Props> = ({ children, url }) => {
  return (
    <>
      <div className="relative mb-20 pt-10 xl:pt-0">
        <div className="absolute"></div>
        <div className="mx-auto max-w-7xl sm:px-6 md:px-8">
          <div className="sm:px-2 xl:mt-0">
            <div className="relative">
              <div className="width: 1200px min-w-full max-w-full shadow-xl sm:rounded-xl">
                <div className="ring-1 ring-slate-900/5 sm:rounded-xl">
                  <div className="relative -mb-8 rounded-xl border-t border-slate-200 bg-white pb-8 dark:border-slate-900/50 dark:bg-slate-800">
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

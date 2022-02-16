import { FC } from "react";

interface Props {
  title: string;
  description: string;
}

const Feature: FC<Props> = ({ title, description }) => {
  return (
    <>
      <div key={title} className="relative">
        <Icon title={title} description={description} />

        <p className="ml-16 text-lg font-medium leading-6 text-slate-600 dark:text-slate-300">
          {title}
        </p>
        <dd className="mt-2 ml-16 text-base text-slate-500 dark:text-slate-400">
          {description}
        </dd>
      </div>
    </>
  );
};

export default Feature;

const Icon: FC<Props> = ({ title, description }) => {
  switch (title) {
    case "Components":
      return (
        <div className="absolute flex h-12 w-12">
          <svg
            width="48"
            height="48"
            fill="none"
            aria-hidden="true"
            className="mb-6 text-slate-400 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-500"
          >
            <path
              d="M5 8h36v32H5V8Z"
              fill="currentColor"
              fill-opacity="0"
            ></path>
            <path
              d="M42 29V11a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v26a4 4 0 0 0 4 4h19"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            ></path>
            <path
              d="M33.662 41.736a1 1 0 0 1-1.1-1.322l3.08-8.68a1 1 0 0 1 1.736-.274l5.6 7.299a1 1 0 0 1-.637 1.596l-8.679 1.38Z"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M14 7v34"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            ></path>
            <path
              d="M22.8 19.949a2 2 0 0 1 2.4-1.5l5.851 1.352a2 2 0 0 1 1.5 2.399l-1.352 5.851a2 2 0 0 1-2.399 1.5l-5.851-1.352a2 2 0 0 1-1.5-2.399l1.352-5.851Z"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
      );
    case "Libraries":
      return (
        <div className="absolute flex h-12 w-12">
          <svg
            width="48"
            height="48"
            fill="none"
            aria-hidden="true"
            className="mb-6 text-slate-400 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-500"
          >
            <path
              d="M6 8h32a4 4 0 0 1 4 4v28H6V8Z"
              fill="currentColor"
              fill-opacity="0"
            ></path>
            <path
              d="M43 21v16a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V11a4 4 0 0 1 4-4h20M15 7v34"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            ></path>
            <path
              d="M37 7c0 1.101 0 6-6 6 1.101 0 6 0 6 6 0-6 4.899-6 6-6-6 0-6-4.899-6-6ZM31 21c0 .734 0 4-4 4 .734 0 4 0 4 4 0-4 3.266-4 4-4-4 0-4-3.266-4-4Z"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
      );
    default:
      return (
        <div className="absolute flex h-12 w-12">
          <svg
            width="48"
            height="48"
            fill="none"
            aria-hidden="true"
            className="mb-6 text-slate-400 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-500"
          >
            <path
              d="M9 41h30a4 4 0 0 0 4-4V11a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v26a4 4 0 0 0 4 4Z"
              fill="currentColor"
              fill-opacity="0"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            ></path>
            <path
              d="M15 7v34M17 13h-2M43 13h-6"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            ></path>
            <path
              d="M21 29V15a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2Z"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            ></path>
            <path
              d="M25 31v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V19a2 2 0 0 0-2-2h-2"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            ></path>
          </svg>
        </div>
      );
  }
};

import Image from "next/image";
import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next";

interface Props {
  title: string;
  subtitle: string;
  image: string;
  url: string;
}

type QueryParams = {
  title: string;
  subtitle: string;
  image: string;
  url: string;
};

export async function getServerSideProps({
  query: { title, subtitle, image, url },
}: {
  query: QueryParams;
}) {
  return {
    props: {
      title,
      subtitle,
      image,
      url,
    }, // will be passed to the page component as props
  };
}

export default function Post({ title, subtitle, image, url }: Props) {
  return (
    <>
      <div
        className="relative place-items-center bg-gray-800"
        style={{ width: 1200, height: 630 }}
      >
        <div className="pt-20">
          <img src={image} className="mx-auto flex h-60 w-60 rounded-full" />
        </div>
        <h2 className="mt-4 text-center text-2xl font-extrabold leading-8 tracking-tight text-white sm:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-4xl font-semibold text-gray-400">
          {subtitle}
        </p>
        <p className="mx-auto mt-4 max-w-3xl text-center text-3xl font-semibold text-lime-600">
          {url}
        </p>
      </div>
    </>
  );
}

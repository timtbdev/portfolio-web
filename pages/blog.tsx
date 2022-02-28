import Profile from "@components/Profile";
import Body from "@components/Blog/Body";
import Post from "@components/Blog/Post";
import Head from "@components/Head";
import Header from "@components/Blog/Header";
import Container from "@components/Blog/Container";
import { GetStaticPropsContext } from "next";

interface Props {
  pageTitle: string;
  keywords: string;
  description: string;
  author: string;
  date: string;
  baseUrl: string;
  ogImage: string;
}

export async function getStaticProps(context: GetStaticPropsContext) {
  // Meta data
  const pageTitle = "Blog";
  const keywords =
    "Tim, Tumur, Bazarragchaa, San-Francisco, Bay Area, Android Developer, Kotlin, Android Jetpack, Jetpack Compose, Blog";
  const description = "I'm an Android developer and this is my blog.";
  const author = "Tim";
  const date = "February, 2022";
  const baseUrl = "https://timtb.dev/";

  const ogImage = baseUrl + "og_blog.png";
  return {
    props: {
      pageTitle,
      keywords,
      description,
      author,
      date,
      baseUrl,
      ogImage,
    },
  };
}

export default function Blog({
  pageTitle,
  keywords,
  description,
  author,
  date,
  baseUrl,
  ogImage,
}: Props) {
  return (
    <div>
      <Head
        title={pageTitle}
        description={description}
        keywords={keywords}
        author={author}
        date={date}
        url={baseUrl}
        image={ogImage}
      />

      <Header />
      {data.map((post) => (
        <>
          <Container url={post.title}>
            <Post
              title={post.title}
              date={post.date}
              slug={post.slug}
              text={post.text}
            />
          </Container>
        </>
      ))}
    </div>
  );
}

// JSON
const data = [
  {
    title: "The standard Lorem Ipsum passage, used since the 1500s",
    date: "February 21, 2022",
    slug: "/blog/lorem1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "The standard Lorem Ipsum passage, used since the 1500s",
    date: "February 21, 2022",
    slug: "/blog/lorem2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

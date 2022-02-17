import Profile from "@components/Profile";
import Body from "@components/Project/Body";
import Container from "@components/Container";
import Head from "@components/Head";
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
  const pageTitle = "Projects";
  const keywords =
    "Tim, Tumur, Bazarragchaa, San-Francisco, Bay Area, Android Developer, Kotlin, Android Jetpack, Jetpack Compose";
  const description = "I'm an Android developer and this is my portfolio.";
  const author = "Tim";
  const date = "February, 2022";
  const baseUrl = "https://timtb.dev/";

  //Open graph image
  const title = "Oh hello there";
  const subtitle = "Welcome to my portfolio";
  const image = baseUrl + "profile.jpg";
  const projects = data;

  const ogImage = baseUrl + "og.png";
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

export default function Home({
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
      <Profile />

      {data.map((project, idx) => (
        <Container url={project.url}>
          <Body item={project} index={idx} />
        </Container>
      ))}
    </div>
  );
}

// JSON
const data = [
  {
    title: "Portfolio App 2.0",
    releaseDate: "2019-10-26",
    icon: "/app-1/icon.png",
    iconDescription: "App icon",
    type: "Android-Kotlin",
    author: "Android-Kotlin",
    keywords: ["Android Jetpack", "Material Design", "MVVM"],
    url: "github.com/timtbdev/Portfolio-App-2",
    features: [
      {
        description:
          "Single Activity, Navigation, LiveData, ViewModel, DataBinding, Room, WorkManager, MotionLayout, Paging ",
        title: "Components",
      },
      {
        description:
          "Koin, Kotlin Coroutines, Retrofit, OkHttp, Moshi, Coil, Leak Canary, Timber",
        title: "Libraries",
      },
      {
        description: "Firebase Cloud Firestore, Firebase Cloud Functions",
        title: "Backend & Design Tools",
      },
    ],
    images: [
      "/app-1/s01.png",
      "/app-1/s02.png",
      "/app-1/s03.png",
      "/app-1/s04.png",
      "/app-1/s05.png",
    ],
    text: "It's the second version of my portfolio app. It was written in Kotlin and built with Android Jetpack components and MVVM design architecture, and applied several best practices.",
  },
  {
    title: "Portfolio App 1.0",
    releaseDate: "2019-08-26",
    icon: "/app-2/icon.png",
    iconDescription: "App icon",
    type: "Android-Java",
    author: "Android-Java",
    keywords: ["Android SDK", "Material Design", "MVC"],
    url: "github.com/timtbdev/Portfolio-App-1",
    features: [
      {
        description:
          "Multiple Activities, Fragment, AppCompat, RecyclerView,  ViewPager",
        title: "Components",
      },
      {
        description: "Retrofit, OkHttp, Gson, Glide, Butterknife",
        title: "Libraries",
      },
      {
        description: "Firebase Cloud Firestore, Firebase Cloud Functions",
        title: "Backend & Design Tools",
      },
    ],
    images: [
      "/app-2/s01.png",
      "/app-2/s02.png",
      "/app-2/s03.png",
      "/app-2/s04.png",
    ],
    text: "It's a simple Java-Android application where I want to show my skills and passion for Android development. It was written in Java and built with standard Android SDK APIs and MVC(Model-View-Control) design architecture.",
  },
];

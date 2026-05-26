import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Dogan",
  lastName: "Karakus",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  email: "dogancankarakuss@gmail.com",
  avatar: "/images/resume_photo.png",
  location: "Europe/Berlin", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/dogan-karakuss/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:dogancankarakuss1@gmail.com",
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/dogankarakus",
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Engineer, Flutter Developer</>,
  subline: (
    <>
      I'm Dogan, a software engineer specializing in cross-platform mobile development with Flutter
      <br /> —and a music enthusiast.
    </>
  ),
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },

};

const about: About = {
  path: "/about",
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,

  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a software developer based in Germany, passionate about turning ideas into
        high-quality mobile apps. I specialize in building cross-platform applications,
        crafting seamless user experiences, and blending design with technology to create
        innovative, impactful solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Safe Sky Industries AB • Malmö",
        timeframe: "2025/09 - 2026/03",
        role: "Consulting Software Engineer • Remote",
        achievements: [
          <>
            Integrated real-time push notifications for 25+ airports using Go and Firebase Cloud Messaging, using Protobuf &
            gRPC to ensure type-safe and efficient communication between the server and the Flutter client
          </>,
          <>
            Closed around 30+ issues, including major refactors in the codebase, ranging from a proper theme setup to state
            management hickups; improving both mobile and Flutter web app
          </>,
          <>
            Onboarded two new airports, setting up their configurations and map data via OpenStreetMap, Docker, and a
            custom CLI
          </>,
        ],
        images: [
        ],
      },
      {
        company: "Chunky Tofu Studios • New Jersey",
        timeframe: "2024/11 - 2025/09",
        role: "Founding Software Engineer (Flutter) • Remote",
        achievements: [
          <>
            Integrated in-app purchase systems for product monetization and designed gamified screens to increase user
            engagement.
          </>,
          <>
            Configured GitHub CI/CD pipelines to automate testing and accelerate deployment efficiency.
          </>,
          <>
            Contributed technical insights during cross-functional discussions to refine feature planning and overall product
            direction.
          </>,
        ],
        images: [
        ],
      },
      {
        company: "Jusst Engineering Gmbh • Hamburg",
        timeframe: "2023/05 - 2024/08",
        role: "Flutter Developer • Remote",
        achievements: [
          <>
            Worked on a variety of tickets, closing around 150-200 issues over the course of 1 year, primarily focusing on
            feature development and bug fixes.
          </>,
          <>
            Designed and built a mobile application from the ground up, implementing core functionalities, adopting Material 3
            defaults for a modern UI.
          </>,
          <>
            Leveraged BLoC for state management and integrated backend systems such as GraphQL and Rust to ensure
            efficient data flow and user interaction.
          </>,
          <>
            Contributed to the development of complex features like audio session management, device control, and IoT
            connectivity, improving app functionality and user experience.
          </>,

        ],
        images: [],
      },
      {
        company: "Blindside Gmbh • Berlin",
        timeframe: "2022/04 - 2023/02",
        role: "Flutter Developer • Remote",
        achievements: [
          <>
            Implemented video upload/download functionality via AWS S3 & CloudFront with a custom video player, enabling
            content sharing for 10K+ users.
          </>,
          <>
            Implemented 20+ app screens using state management (Riverpod), MVVM architecture, and a GraphQL backend,
            including enhancements to existing Search and Profile screens.

          </>,
          <>
            Integrated Firebase Dynamic Linking, allowing users to share the app with a customized button.

          </>,
          <>
            Managed personal projects, defined tasks and milestones, and delivered 5+ features independently.
          </>,

        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Master's Degree • Computer Science",
        description: <>
          Kiel University (CAU), Kiel  <br></br>
          2026/04 - Present
        </>,
      },
      {
        name: "Bachelor's Degree • Computer Science",
        description: <>
          Bahcesehir University, Istanbul  <br></br>
          2019/09 - 2024/04
        </>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Mobile Development",
        description: <>Flutter & Dart (4 YOE)<br></br>
          BLoC • Riverpod • Dio • GoRouter • Freezed • Hive <br></br>
          RevenueCat • Firebase Cloud Messaging • GraphQL


        </>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "Cloud & Backend",
        description: <>
          Firebase: Firestore • Auth • Cloud Messaging <br></br>
          AWS: S3 • ElasticSearch <br></br>
          Go • Rust • gRPC • Protobuf
        </>,
      },
      {
        title: "DevOps",
        description: <>
          Github Actions • GitLab CI
          <br></br>
          Codemagic • Docker

        </>,
      },
      {
        title: "Project Management",
        description: <>
          Jira & Confluence • Asana • Github Issues
        </>,
      },
      {
        title: "Software Languages",
        description: <>
          Dart, Go, C++, Python, Java, HTML & CSS, SQL</>,
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

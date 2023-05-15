// reference: https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config

// build-1
// import { FC } from "react";

// interface pageProps {}

// const page: FC<pageProps> = ({}) => {
//   return <div>page</div>;
// };

// export default page;

// build-2
// const page = async ({}) => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
//     cache: "no-store",
//   });

//   const data = await res.json();
//   return <div>{JSON.stringify(data)}</div>;
//   // This code is same as getServerSideProps in NextJS 12
// };

// export default page;

// build-3
// const page = async ({}) => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
//     next: { revalidate: 1 },
//   });

//   const data = await res.json();
//   return <div>{JSON.stringify(data)}</div>;
// };

// export default page;

// build-4
// import axios from "axios";

// export const dynamic = "force-dynamic";

// const page = async ({}) => {
//   const { data } = await axios("https://jsonplaceholder.typicode.com/posts/1");

//   return <div>{JSON.stringify(data)}</div>;
// };

// export default page;

// build-5
import axios from "axios";

export const revalidate = 10;

const page = async ({}) => {
  const { data } = await axios("https://jsonplaceholder.typicode.com/posts/1");

  return <div>{JSON.stringify(data)}</div>;
};

export default page;

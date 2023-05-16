// build-6
export async function generateStaticParams() {
  const blogs = ["blog-one", "blog-two"];

  return blogs.map((blog) => {
    return {
      blogId: blog,
    };
  });
}

import type { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return <div>hello</div>;
};

export default page;

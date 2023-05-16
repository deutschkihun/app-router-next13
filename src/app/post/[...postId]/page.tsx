// reference: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
import { Metadata } from "next";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

interface PageProps {
  params: {
    postId: string;
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );

  const data = (await res.json()) as Post;
  return {
    title: data.title,
  };
}

const page = async ({ params }: PageProps) => {
  return <div>{params.postId}</div>;
};

export default page;

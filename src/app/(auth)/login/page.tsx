import type { FC } from "react";
import axios from "axios";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const page = async () => {
  await wait(5000);
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  return <div>{JSON.stringify(data)}</div>;
};

export default page;

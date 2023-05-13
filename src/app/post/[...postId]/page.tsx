import { FC } from "react";

interface PageProps {
  params: {
    postId: string[];
  };
  searchParams: {
    // key = searchQuery
    [key: string]: string;
  };
}

const page = async (props: PageProps) => {
  // data fetching
  console.log(props.params.postId);

  return (
    <div>
      <h1>
        id:
        <div className="inline-flex">
          {props.params.postId.map((id) => (
            <div key={id}>/{id}</div>
          ))}
        </div>
      </h1>
      <h1>{JSON.stringify(props.searchParams)}</h1>
    </div>
  );
};

export default page;

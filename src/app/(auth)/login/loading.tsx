import { FC } from "react";

interface loadingProps {}

const loading: FC<loadingProps> = ({}) => {
  return <div>loading</div>;
};

export default loading;

// this loading component is for server component (not for client component)

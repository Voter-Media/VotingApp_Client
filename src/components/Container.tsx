import { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col mx-auto max-w-7xl">{children}</div>;
};

export default Container;

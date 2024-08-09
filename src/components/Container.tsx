import { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`flex flex-col mx-auto max-w-7xl ${className}`}>
      {children}
    </div>
  );
};

export default Container;

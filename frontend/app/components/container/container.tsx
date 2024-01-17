import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  const containerClasses = `container p-6 mx-auto w-full max-w-1440 bg-white rounded shadow p-2 ${
    className || ""
  }`;
  return <div className={containerClasses}>{children}</div>;
}

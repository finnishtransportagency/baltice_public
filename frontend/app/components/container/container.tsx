import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container p-6 mx-auto w-full max-w-1440 bg-white rounded shadow p-2">
      {children}
    </div>
  );
}

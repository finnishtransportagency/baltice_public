import React from "react";

type TopSectionProps = {
  header?: string;
  description?: string;
};

export default function TopSection({ header, description }: TopSectionProps) {
  return (
    <div className="w-full bg-baltice-gray border-b border-gray-400">
      <div className="max-w-1440 mx-auto flex flex-col gap-4 pt-10 pb-10 z-0 relative">
        {header && (
          <h1 className="text-baltice-medium-blue text-3xl font-extrabold">
            {header}
          </h1>
        )}
        {description && <p className="text-black text-24">{description}</p>}
      </div>
    </div>
  );
}

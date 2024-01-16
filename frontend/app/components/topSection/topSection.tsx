import React from "react";

type TopSectionProps = {
  header?: string;
  description?: string;
};

export default function TopSection({ header, description }: TopSectionProps) {
  return (
    <section className="w-full">
      <div className="max-w-1440 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4 pt-10 z-0 relative">
        {header && (
          <h1 className="text-baltice-medium-blue text-4xl font-semibold">
            {header}
          </h1>
        )}
        {description && (
          <p className="text-black text-xl w-[85%]">{description}</p>
        )}
      </div>
    </section>
  );
}

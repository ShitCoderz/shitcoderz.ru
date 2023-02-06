"use client";

import Image from "next/image";

export default function Project({ data }: { data: any }) {
  return (
    <a href={data.href}>
      <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
        <img
          src={data.imageSrc}
          alt={data.name}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <p className="mt-6 text-sm text-gray-500">{data.name}</p>
      <p className="text-base font-semibold text-gray-900">
        {data.description}
      </p>
    </a>
  );
}

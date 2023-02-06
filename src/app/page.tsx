"use client";

import Image from "next/image";
import Link from "next/link";

export default function Index() {
  return (
    <div className=" bg-white">
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="flex flex-col items-center mx-auto max-w-2xl py-16 sm:py-24 lg:py-28">
            <img className="mb-6" width={200} height={200} src="images/logo.png" alt="ShitCoderz" />
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full font-semibold py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Лучшая образовательная организация по версии Forbes
                {/* {" "} */}
                {/* <a href="#" className="font-semibold text-indigo-600">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a> */}
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Команда разработчиков ShitCoderz
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Выполняем самые сложные работы в инновационном стиле shit-code.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/projects"
                  className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Открыть проекты
                </Link>
                <Link
                  href="/team"
                  className="text-base font-semibold leading-7 text-gray-900"
                >
                  Наша команда <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

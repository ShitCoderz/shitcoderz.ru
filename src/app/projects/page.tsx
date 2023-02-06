"use client";
import Header from "@/components/Header";
import styles from "./page.module.scss";
import Project from "./Project";

const projects = [
  {
    name: "Портфолио разработчика OSU",
    href: "https://github.com/ShitCoderz/shit-ppy",
    git: "https://shitcoderz.github.io/shit-ppy/",
    description: "Shit PPY",
    imageSrc: "https://i.imgur.com/xsvPGW9.png",
  },
  {
    name: "Лучший сервис для сокращения ссылок",
    href: "https://c.shitcoderz.ru",
    git: "https://github.com/ShitCoderz/short-url",
    description: "Сокращатель ссылок",
    imageSrc: "https://i.imgur.com/Zj7AFHx.png",
  },
  {
    name: "Краткое пособие для начинающих разработчиков",
    href: "https://yota002.notion.site/Front-End-fbf49fdfbf0d43acadd168cb6f4470a2",
    description: "Старт во Front-End",
    imageSrc: "https://i.imgur.com/L5zch0f.png",
  },
];

export default function Projects() {
  return (
    <>
      <Header>Проекты</Header>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="mt-6 gap-y-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {projects.map((data) => (
                <Project key={data.name} data={data}></Project>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import Header from "@/components/Header";
import Image from "next/image";

const team = [
  {
    name: "Akan",
    job: "Owner",
    desc: "Борец с прототипами и %",
    avatar: "https://github.com/Akann2.png",
    socials: [
      {
        label: "Akan on ShitCoderz",
        link: "https://akan.shitcoderz.ru",
        image: "images/icons/shit_eyes.svg",
      },
      {
        label: "GitHub",
        link: "https://github.com/Akann2",
        image: "images/icons/github.svg",
      },
    ],
  },
  {
    name: "Yota",
    job: "Owner",
    desc: "Создал хуйню, фанат Доры",
    avatar: "https://github.com/Yota002.png",
    socials: [
      {
        label: "Yota on ShitCoderz",
        link: "https://yota.shitcoderz.ru",
        image: "images/icons/shit_eyes.svg",
      },
      {
        label: "GitHub",
        link: "https://github.com/Yota002",
        image: "images/icons/github.svg",
      },
      {
        label: "Telegram",
        link: "https://t.me/yota404",
        image: "images/icons/telegram.svg",
      },
    ],
  },
];

export default function Team() {
  return (
    <>
      <Header>Наша команда</Header>
      <main>
        <div className="grid grid-cols-2 mx-auto my-16">
          {team.map((person) => (
            <div
              key={person.name}
              className="flex flex-col items-center person"
            >
              <img
                className="border w-[16rem] border-gray-300 rounded-full person__avatar"
                src={person.avatar}
                alt={person.name}
              />
              <h2 className="text-4xl person__name">{person.name}</h2>
              <h3 className="text-xl font-thin person__job">{person.job}</h3>
              <p className="font-semibold">{person.desc}</p>
              <div className="flex gap-2 pt-1">
                {person.socials.map((social) => (
                  <a key={social.link} href={social.link}>
                    <Image width={32} height={32} src={social.image} alt={social.label} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

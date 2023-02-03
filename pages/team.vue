<template>
  <Header>Наша команда</Header>
  <div class="grid grid-cols-2 mx-auto my-16">
    <div
      v-for="person in team"
      :to="person.git"
      :key="person.name"
      class="flex flex-col items-center person"
    >
      <img
        class="border border-gray-300 rounded-full person__avatar"
        :src="person.avatar"
        :alt="person.name"
      />
      <h2 class="text-4xl person__name">{{ person.name }}</h2>
      <h3 class="text-xl font-thin person__job">{{ person.job }}</h3>
      <p class="font-semibold">{{ person.desc }}</p>
      <div class="flex gap-2 pt-1">
        <NuxtLink :to="social.link" v-for="social in person.socials">
          <img class="image" :src="social.image" :alt="social.label" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup>
import GitHubIcon from "@/assets/images/icons/github.svg";
import TelegramIcon from "@/assets/images/icons/telegram.svg";
import ShitEyesIcon from "@/assets/images/icons/shit_eyes.svg";

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
        image: ShitEyesIcon,
      },
      {
        label: "GitHub",
        link: "https://github.com/Akann2",
        image: GitHubIcon,
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
        image: ShitEyesIcon,
      },
      {
        label: "GitHub",
        link: "https://github.com/Yota002",
        image: GitHubIcon,
      },
      {
        label: "Telegram",
        link: "https://t.me/yota404",
        image: TelegramIcon,
      },
    ],
  },
];
</script>
<style lang="scss">
.image {
  width: 2rem;
  height: 2rem;
}

.person {
  &__avatar {
    width: 200px;
  }
}
</style>

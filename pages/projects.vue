<template>
  <Header>Проекты</Header>
  <div class="bg-gray-100">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 py-5 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <div
          class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0"
        >
          <div v-for="item in projects" :key="item.name" class="group relative">
            <Project :data="item"></Project>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    name: "Портфолио разработчика OSU ",
    href: "https://github.com/ShitCoderz/shit-ppy",
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
];
</script>

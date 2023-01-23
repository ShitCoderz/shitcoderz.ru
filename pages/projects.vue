<template>
  <Header>Projects</Header>
  <Project v-for="item in projects" :data="item"></Project>
</template>

<script setup>
const projects = [
  {
    name: "Портфолио peppy",
    href: "https://github.com/ShitCoderz/shit-ppy",
  },
  {
    name: "Сокращатель ссылок",
    href: "https://github.com/ShitCoderz/short-url",
  },
];
</script>

<template>
  <NuxtLink :to="data.href" target="_blank">
    <div>{{ data.name }}</div>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    data: {
      name: String,
      href: String,
    },
  },
};
</script>

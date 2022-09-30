<template>
  <header class="min-h-[4rem] bg-slate-300 flex">
    <div class="container max-w-6xl flex items-center">
      <div></div>
      <nav class="flex-auto">
        <ul class="flex gap-12">
          <li>
            <router-link
              :class="$style.hover"
              :to="{ name: 'home' }"
              class="text-base"
              >Главная</router-link
            >
          </li>
          <li>
            <router-link
              :class="$style.hover"
              :to="{ name: 'news' }"
              class="text-base"
              >Новости</router-link
            >
          </li>
          <li>
            <router-link
              :class="$style.hover"
              :to="{ name: 'video' }"
              class="text-base"
              >Видео</router-link
            >
          </li>
        </ul>
      </nav>
      <div class="flex-initial w-1/5 flex items-center justify-end">
        <ButtonBase class="cursor-pointer align-baseline" type="button">
          <IconBase height="25" icon-name="login" width="25">
            <LoginIcon />
          </IconBase>
        </ButtonBase>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import LoginIcon from "@/components/icons/LoginIcon.vue";
</script>

<style lang="postcss" module>
.hover {
  @apply hover:border-b-2 border-y-current p-2;
}
</style>

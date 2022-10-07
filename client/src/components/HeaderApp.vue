<template>
  <header class="min-h-[4rem] bg-slate-300 flex">
    <div class="container max-w-6xl flex items-center relative">
      <div class="logo-wrapper"></div>
      <nav class="flex-auto">
        <ul :class="[$style.menu, [isMenuOpen ? $style['menu-open'] : '']]">
          <li>
            <router-link :class="$style['menu-link']" :to="{ name: 'home' }"
              >Главная</router-link
            >
          </li>
          <li>
            <router-link :class="$style['menu-link']" :to="{ name: 'news' }"
              >Новости</router-link
            >
          </li>
          <li>
            <router-link :class="$style['menu-link']" :to="{ name: 'video' }"
              >Видео</router-link
            >
          </li>
        </ul>
        <ButtonBase
          @click="toggleMenu"
          class="burger-menu justify-between w-9 h-5 hidden smDesktop:flex flex-col"
          type="button"
        >
          <span :class="$style['burger-item']"></span>
          <span :class="$style['burger-item']"></span>
          <span :class="$style['burger-item']"></span>
        </ButtonBase>
      </nav>
      <div class="flex-initial w-1/5 flex items-center justify-end">
        <ButtonBase
          class="cursor-pointer align-baseline"
          type="button"
          @click="open"
        >
          <IconBase height="25" icon-name="login" width="25">
            <LoginIcon />
          </IconBase>
        </ButtonBase>
        <teleport to="body">
          <SignInModal
            :isModalOpen="toggleModal"
            @closeModal="toggleModal = false"
          />
        </teleport>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import LoginIcon from "@/components/icons/LoginIcon.vue";
import { ref } from "vue";
import SignInModal from "@/components/modals/SignInModal.vue";
import ButtonBase from "@/components/ui/ButtonBase.vue";

const toggleModal = ref(false);

const open = () => {
  toggleModal.value = true;
};

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style lang="postcss" module>
.burger-item {
  @apply w-full h-0.5 bg-black text-black;
}

.menu {
  @apply flex gap-12 smDesktop:hidden absolute top-14 right-0 left-0 bottom-0 flex flex-col items-center content-center pt-8;
}

.menu-link {
  @apply text-base smDesktop:text-2xl hover:border-b-2 border-y-current p-2;
}

.menu.menu-open {
  @apply flex;
}
</style>

<style lang="scss">
a.router-link-active,
li.router-link-active > a {
  padding-bottom: 0.5rem;
  border-bottom: 0.15rem solid black;
}
</style>

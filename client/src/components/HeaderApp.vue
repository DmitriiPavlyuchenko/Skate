<template>
  <header class="min-h-[4rem] bg-slate-300 flex">
    <div class="container max-w-6xl flex items-center relative">
      <div class="logo-wrapper"></div>
      <nav class="flex-auto">
        <ul :class="[$style.menu, [isMenuOpen ? $style['menu-open'] : '']]">
          <li>
            <router-link :class="$style['menu-link']" :to="{ name: 'home' }"
              >Главная
            </router-link>
          </li>
          <li>
            <router-link :class="$style['menu-link']" :to="{ name: 'news' }"
              >Новости
            </router-link>
          </li>
          <li>
            <router-link :class="$style['menu-link']" :to="{ name: 'video' }"
              >Видео
            </router-link>
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
      <div class="flex-initial gap-2 w-1/5 flex items-center justify-end">
        <ButtonBase
          class="cursor-pointer align-baseline hover:border-b-2 border-y-current p-2"
          type="button"
          @click="open(signIn)"
        >
          Войти
        </ButtonBase>
        <span>/</span>
        <ButtonBase
          class="cursor-pointer align-baseline hover:border-b-2 border-y-current p-2"
          type="button"
          @click="open(signUp)"
        >
          Регистрация
        </ButtonBase>
        <teleport to="body">
          <SignInModal
            :isModalOpen="toggleSignIn"
            @closeModal="toggleSignIn = false"
          />
          <SignUpModal
            :isModalOpen="toggleSignUp"
            @closeModal="toggleSignUp = false"
          />
        </teleport>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import SignInModal from "@/components/modals/SignInModal.vue";
import ButtonBase from "@/components/ui/ButtonBase.vue";
import SignUpModal from "@/components/modals/SignUpModal.vue";

const signIn = "SignIn";
const signUp = "SignUp";

const toggleSignIn = ref(false);
const toggleSignUp = ref(false);

const open = (str: string) => {
  switch (str) {
    case signIn:
      toggleSignIn.value = true;
      break;
    case signUp:
      toggleSignUp.value = true;
      break;
  }
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
  @apply flex gap-12 smDesktop:hidden smDesktop:absolute smDesktop:top-14 smDesktop:right-0 smDesktop:left-0
  smDesktop:bottom-0  smDesktop:flex-col smDesktop:items-center smDesktop:content-center smDesktop:pt-8;
}

.menu-link {
  @apply text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium;
}

.menu-open {
  @apply flex;
}
</style>

<style lang="scss">
a.router-link-active,
li.router-link-active > a {
  color: white;
  background-color: #111827;
}
</style>

<template>
  <ModalBase :isModalOpen="props.isModalOpen" @closeModal="close">
    <template #header>
      <span>Авторизация</span>
    </template>
    <template #body>
      <form
        class="flex gap-6 flex-col py-4 align-middle"
        name="sign-in"
        @submit.prevent
      >
        <label class="relative">
          <InputBase
            v-model="user.email"
            :class="$style.input"
            autocomplete="off"
            placeholder="Почта"
            type="text"
          ></InputBase>
        </label>
        <label class="relative">
          <InputBase
            v-model="user.password"
            :class="$style.input"
            :type="type"
            autocomplete="off"
            placeholder="Пароль"
          ></InputBase>
          <ButtonBase
            class="text-black absolute w-1/12 right-2 h-full"
            type="button"
            @click="changeType"
          >
            <IconBase height="18" icon-name="eye-icon" width="18">
              <EyeIcon v-if="typePassword"></EyeIcon>
              <EyeBlockedIcon v-else></EyeBlockedIcon>
            </IconBase>
          </ButtonBase>
        </label>
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900"
              >Запомнить меня</label
            >
          </div>
          <div class="text-sm">
            <a
              href="#"
              class="font-medium text-indigo-600 hover:text-indigo-500"
              >Забыли пароль?</a
            >
          </div>
        </div>
        <ButtonBase
          type="submit"
          @click="signIn"
          class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <LockClosedIcon
              class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
              aria-hidden="true"
            />
          </span>
          Вход
        </ButtonBase>
      </form>
    </template>
  </ModalBase>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import EyeIcon from "@/components/icons/EyeIcon.vue";
import EyeBlockedIcon from "@/components/icons/EyeBlockedIcon.vue";
import { authorization } from "@/api/sign-in";
import { SERVER_CODE } from "@/enum/server-code";
import { LockClosedIcon } from "@heroicons/vue/20/solid";

interface Props {
  isModalOpen: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  (e: "closeModal"): void;
}>();

const close = () => {
  emit("closeModal");
};

let user = ref({ email: "", password: "" });

const signIn = async () => {
  try {
    const response = await authorization(user);
    if (response.status === SERVER_CODE.CODE_200) {
      user.value = {
        email: "",
        password: "",
      };
      close();
    } else {
      throw "Error";
    }
  } catch (e) {
    console.log(e);
  }
};

const password = "password";
const text = "text";

const type = ref(password);

const typePassword = computed((): boolean => {
  return type.value === password;
});

const changeType = () => {
  const typePassword = type.value === password;

  if (typePassword) {
    type.value = text;
  } else {
    type.value = password;
  }
};
</script>
<style lang="postcss" module>
.input {
  @apply w-full py-2 pl-2.5 pr-8 rounded-md;
}
</style>

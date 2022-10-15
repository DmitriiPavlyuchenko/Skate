<template>
  <ModalBase :isModalOpen="props.isModalOpen" @closeModal="close">
    <template #header>
      <span>Регистрация</span>
    </template>
    <template #body>
      <form
        class="flex gap-6 flex-col py-4 align-middle"
        name="sign-in"
        @submit.prevent
      >
        <label>
          <InputBase
            v-model="registry.name"
            :class="$style.input"
            autocomplete="off"
            placeholder="Имя"
            type="text"
          ></InputBase>
        </label>
        <label>
          <InputBase
            v-model="registry.mail"
            :class="$style.input"
            autocomplete="off"
            placeholder="Почта"
            type="text"
          ></InputBase>
        </label>
        <label>
          <InputBase
            v-model="registry.password"
            :class="$style.input"
            autocomplete="off"
            placeholder="Пароль"
          ></InputBase>
        </label>
        <ButtonBase
          @click="signUp"
          type="submit"
          class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <LockClosedIcon
              class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
              aria-hidden="true"
            />
          </span>
          Регистрация
        </ButtonBase>
      </form>
    </template>
  </ModalBase>
</template>

<script setup lang="ts">
import { LockClosedIcon } from "@heroicons/vue/20/solid";
import { ref } from "vue";
import { signUpReq } from "@/api/sign-up";
import { SERVER_CODE } from "@/enum/server-code";

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

const registry = ref({ name: "", mail: "", password: "" });

const signUp = async () => {
  try {
    const response = await signUpReq(registry);
    if (response.status === SERVER_CODE.CODE_200) {
      registry.value = {
        name: "",
        mail: "",
        password: "",
      };
      close();
    }
  } catch (e) {
    console.log(e);
  }
};
</script>

<style lang="postcss" module>
.input {
  @apply w-full py-2 pl-2.5 pr-8 rounded-md;
}
</style>

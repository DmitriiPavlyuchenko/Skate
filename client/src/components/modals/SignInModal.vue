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
            class="text-black absolute w-1/12 right-0 h-full"
            type="button"
            @click="changeType"
          >
            <IconBase height="18" icon-name="eye-icon" width="18">
              <EyeIcon v-if="typePassword"></EyeIcon>
              <EyeBlockedIcon v-else></EyeBlockedIcon>
            </IconBase>
          </ButtonBase>
        </label>
        <ButtonBase
          class="inline-block w-1/2 mx-auto py-2 rounded-md bg-slate-600 text-white hover:bg-slate-800"
          type="submit"
          @click="signIn"
          >Вход</ButtonBase
        >
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
  @apply w-full py-2 px-4 rounded-md;
}
</style>

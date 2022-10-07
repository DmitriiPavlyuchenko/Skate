<template>
  <ZoomTransition>
    <div
      v-show="isModalOpen"
      class="modal fixed z-50 top-0 left-0 bottom-0 right-0 w-full h-full flex justify-center items-center opacity-90 bg-black"
      @click="close"
    >
      <div class="w-full px-3">
        <div
          class="relative max-w-full w-[30rem] min-h-[10] mx-auto my-0 px-8 py-5 rounded-lg bg-gray-300 phone:px-4 phone:py-1.5"
          @click.stop
        >
          <div
            class="flex flex-col gap-4 text-2xl items-center decoration-black"
          >
            <slot name="header"></slot>
          </div>
          <div class="flex flex-col gap-4">
            <slot name="body"></slot>
          </div>
          <div class="flex align-middle justify-center">
            <slot name="footer"></slot>
          </div>
          <ButtonBase
            class="close absolute top-2 right-2 text-base text-gray-700 text-2xl hover:text-black"
            @click="close"
            >x
          </ButtonBase>
        </div>
      </div>
    </div>
  </ZoomTransition>
</template>

<script lang="ts" setup>
import ZoomTransition from "@/components/transitions/ZoomTransition.vue";
import { onMounted, onUnmounted } from "vue";

interface Props {
  isModalOpen: boolean;
}

const prop = defineProps<Props>();

const emit = defineEmits<{
  (e: "closeModal"): void;
}>();

const handleKeyDown = (event: KeyboardEvent) => {
  if (prop.isModalOpen && event.key === "Escape") {
    close();
  }
};

const close = () => {
  emit("closeModal");
};

onMounted(() => document.addEventListener("keydown", handleKeyDown));

onUnmounted(() => document.removeEventListener("keydown", handleKeyDown));
</script>

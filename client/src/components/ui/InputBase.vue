<template>
  <input :value="prop.modelValue" @input="emitValue" />
</template>

<script lang="ts" setup>
interface Props {
  modelValue: number | string;
}

const prop = defineProps<Props>();

const emit = defineEmits(["update:modelValue"]);

const emitValue = (event: Event & { target: HTMLInputElement }) => {
  emit("update:modelValue", event.target.value);
};
</script>

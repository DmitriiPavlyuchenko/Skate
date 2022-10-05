<template>
  <svg
    :aria-labelledby="props.iconName"
    :class="$style.icon"
    :height="props.height"
    :width="props.width"
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title :id="props.iconName" lang="en">{{ iconName }} icon</title>
    <g :fill="props.iconColor">
      <slot />
    </g>
  </svg>
</template>

<script lang="ts" setup>
interface Props {
  iconName: string;
  width: number | string;
  height: number | string;
  iconColor?: string;
}

const props = withDefaults(defineProps<Props>(), {
  iconName: "box",
  iconColor: "currentColor",
});
</script>

<style lang="postcss" module>
.icon {
  @apply inline-block -mb-0.5 object-contain;
}
</style>

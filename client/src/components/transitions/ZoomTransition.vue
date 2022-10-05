<template>
  <transition appear name="zoom">
    <slot></slot>
  </transition>
</template>

<style lang="scss">
.zoom-enter-from {
  opacity: 0;
}

.zoom-leave-to {
  opacity: 0;
}

.zoom-enter-from,
.zoom-leave-to {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

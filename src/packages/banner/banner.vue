<template>
  <div>
    <a :href="props.obj.link">
      <img :src="props.obj.src" width="100%" alt="图片"/>
    </a>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from 'vue'

interface IProps {
  obj: {
    src: string,
    link: string
  }
}

const props = withDefaults(defineProps<IProps>(), {
  obj() {
    return {
      src: "http://qiniuyun.quancundexiwang.wang/202312032328369.jpeg?imageView2/0/q/50",
      link: "https://blog.quancundexiwang.wang/2023/12/03/2023-12-03-ru-zhi-kuai-yi-ge-yue-xiao-ji"
    }
  },
})
</script>

<style lang="scss" scoped></style>

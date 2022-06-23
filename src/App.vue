<template>
  <div class="box">使用的Vue的App啊</div>
</template>

<script>
import {add} from '@/tools/add'

export default {
  mounted() {
    // add();
  }
}
</script>

<style lang="scss">
@import './styles/index.scss';

.box {
  width: 500px;
  height: 200px;
  color: #fff;
  background-color: #000;
}
</style>

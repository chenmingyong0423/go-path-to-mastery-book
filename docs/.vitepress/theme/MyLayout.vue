<template>
  <Layout>
    <template #doc-after>
      <div id="gitalk-container"></div>
    </template>
  </Layout>

</template>

<script type="ts" setup>
import DefaultTheme from 'vitepress/theme'

const {Layout} = DefaultTheme
import {watch, nextTick, onMounted} from "vue";
import "gitalk/dist/gitalk.css";
import {useRouter} from "vitepress";
import createGitalk from "../gitalk";

let {route} = useRouter(); // 页面路由对象

const generateId = (path) => {
  return path
      .split('/') // 按照 / 切分
      .pop() // 取最后一个部分
      .replace(/\.html$/, ''); // 去掉结尾的 .html
};

// 初始化 Gitalk
const initGitalk = () => {
  if (typeof window !== 'undefined') {
    const container = document.getElementById('gitalk-container');
    if (container) {
      container.innerHTML = '';
      createGitalk(generateId(route.path));
    }
  }
};

onMounted(() => {
  // 初次加载时初始化 Gitalk
  nextTick(() => {
    initGitalk();
  });

  // 监听路由变化
  watch(
      () => route.path,
      (newPath) => {
        nextTick(() => {
          initGitalk();
        });
      }
  );
});
</script>
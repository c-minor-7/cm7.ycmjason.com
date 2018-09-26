import Vue from 'vue';
import Form from '@/components/global/Form.vue';

/*
const registerAll = (context, prefix) => context.keys().forEach(p => {
  let name = p.match(/\.\/(.*?)\.vue/)[1];
  Vue.component(prefix + name, context(p).default);
});

registerAll(require.context('@/components/global/', false, /.*\.vue/), 'cm7');
*/

Vue.component('cm7Form', Form);

console.log(Form);

// header用のjsファイル
import Vue from 'vue'
import HeaderTemplate from './header.vue'  // HeaderTemplateは、<header-template></header-template>のキャメルケースにしないといけない


new Vue({
  el: '#header',
  components: { HeaderTemplate },
  template: '<header-template/>'  // html上で使う要素を指定
})

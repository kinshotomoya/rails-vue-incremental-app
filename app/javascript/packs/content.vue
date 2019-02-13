<template>
  <section>
    <div class="name">{{memberData.name}}</div>
    <div class="age" v-html="age"></div>
  </section>
</template>

<script>
export default {
  props: {  // propsで取得するdataのバリデーションを設定できる
    memberData: Object
  },
  computed: {
    age: function() {
      var age = this.memberData.age
      return `<span>${age}<span>`
    }
  }
}
</script>

<style lang="css">
  .unsearched {
    display: none;
  }
</style>
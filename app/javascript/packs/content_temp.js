import Vue from 'vue'
import MemberTag from './content.vue'
import lodash from 'lodash'

var data = [
    { name: '山田', age: '30歳' },
    { name: '田中', age: '29歳' },
    { name: '鈴木', age: '25歳' }
  ];

new Vue({
  el: '#content',
  data: {
    list: data,
    addQuery: '',  // 空を定義する。inputのv-modelのaddQueryと紐づいている
    searchedName: null
  },
  components: { MemberTag },
  methods: {
    addMember: function() {
      this.list.push(
        {
          name: this.addQuery,
          age: 22
        }        
      )
      this.addQuery = ''  // searchBarの値を空にする
    },
    getMemberName: function() {
      name = this.addQuery
      if(name == '') {  // searchBarに何も文字がない場合
        this.searchedName = null
      } else {
        this.getMatchMember()
      }
    },
    getMatchMember: function() {
      this.searchedName = this.addQuery
    }
  },
  watch: {  // addQueryの値、つまりinputの値を監視している。変更があれば以下の処理に移る
    addQuery: function() {
      this.debouncedGetAnswer()
    }
  },
  created: function() {
    this.debouncedGetAnswer = _.debounce(this.getMemberName, 500)
  }
})

import Vue from 'vue'
import Vuex from 'vuex'
import todoApp from './modules/todoApp'
// import * as getters from './geeters'
// import * as mutations  from './mutations'

//global영역에 플러그인을 설치하여 사용하는 코드
Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        todoApp
    }
})
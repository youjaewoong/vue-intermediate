import Vue from 'vue'
import Vuex from 'vuex'

//global영역에 플러그인을 설치하여 사용하는 코드
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        price: 100
    },
    getters: {
        orginalPrice(state){
            return state.price;
        },
        doublePrice(state){
            return state.price*2;
        },
        triplePrice(state){
            return state.price*3
        }
    }
});
import Vue from 'vue'
import Vuex from 'vuex'

//global영역에 플러그인을 설치하여 사용하는 코드
Vue.use(Vuex);

const storage = {
    fetch() {
        const arr = [];
        if(localStorage.length > 0){
            for(let i = 0; i < localStorage.length; i ++){
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    }
};

export const store = new Vuex.Store({
    state: {
        todoItems: storage.fetch()
    }
})
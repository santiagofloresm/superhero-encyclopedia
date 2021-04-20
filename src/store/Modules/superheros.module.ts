import axios from 'axios';
// import { SUPERHEROS_GET } from "@/store/mutations";

// Superhero API https://akabab.github.io/superhero-api/api/
const BaseUrl = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/'

const state = {
    superheros: []
}

const mutations = {
    // [SUPERHEROS_GET](state, superheros) {
    //     state.superheros = superheros
    // }
}

const actions = {
    getAllSuperheros() {
        axios.get(BaseUrl + 'id/1.json').then(response => {
            console.log(response)
        })
    }
}

const getters = {
}

export default {
    state,
    mutations,
    actions,
    getters
}

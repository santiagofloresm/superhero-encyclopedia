import axios from 'axios';
import {ActionTree} from "vuex";
import {SuperherosState} from "@/store/superheros/types";
import {RootState} from "@/store/types";
import {SuperherosMutations} from "@/store/superheros/mutations";

const BaseUrl = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/'

export const actions: ActionTree<SuperherosState, RootState> = {
    getAllSuperheros({ commit }): void {
        axios.get(BaseUrl + 'all.json').then(response => {
            commit(SuperherosMutations.SET_SUPERHEROS, response.data)
        })
    }
}

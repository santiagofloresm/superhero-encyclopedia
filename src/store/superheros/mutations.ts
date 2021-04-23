import {MutationTree} from "vuex";
import {SuperherosState} from "@/store/superheros/types";
import Superhero from "@/store/superheros/model";

export enum SuperherosMutations {
    SET_SUPERHEROS = "SET_SUPERHEROS",
    SET_SEARCH = "SET_SEARCH",
}

export const mutations: MutationTree<SuperherosState> = {
    [SuperherosMutations.SET_SUPERHEROS](state, superheros: Array<Superhero>) {
        state.superheros = superheros;
    },
    [SuperherosMutations.SET_SEARCH](state, searchValue: string) {
        state.searchValue = searchValue;
    },
}

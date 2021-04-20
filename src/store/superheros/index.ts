import {Module} from "vuex";
import {RootState} from "@/store/types";
import {SuperherosState} from "@/store/superheros/types";
import { getters } from "@/store/superheros/getters";
import { mutations } from "@/store/superheros/mutations";
import { actions } from "@/store/superheros/actions";
import Superhero from "@/store/superheros/model";

const state: SuperherosState = {
    superheros: Array<Superhero>()
}

export const superheros: Module<SuperherosState, RootState> = {
    state,
    getters,
    mutations,
    actions
}

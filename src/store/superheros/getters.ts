import {GetterTree} from "vuex";
import {SuperherosState} from "@/store/superheros/types";
import {RootState} from "@/store/types";
import Superhero from "@/store/superheros/model";

export const getters: GetterTree<SuperherosState, RootState> = {
    getAllSuperHeros(state): Array<Superhero> {
        return state.superheros;
    }
}

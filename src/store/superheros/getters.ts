import {GetterTree} from "vuex";
import {SuperherosState} from "@/store/superheros/types";
import {RootState} from "@/store/types";
import Superhero from "@/store/superheros/model";

export const getters: GetterTree<SuperherosState, RootState> = {
    getAllSuperheros(state): Array<Superhero> {
        return state.superheros;
    },
    getSuperhero: (state) => (id: number) : Superhero => {
        return state.superheros.find(superhero => superhero.id === id) ?? new Superhero();
    }
}

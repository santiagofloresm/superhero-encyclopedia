import {GetterTree} from "vuex";
import {SuperherosState} from "@/store/superheros/types";
import {RootState} from "@/store/types";
import Superhero from "@/store/superheros/model";
// import {superheros} from "@/store/superheros/index";

export const getters: GetterTree<SuperherosState, RootState> = {
    getAllSuperheros(state): Array<Superhero> {
        return state.superheros;
    },
    getSuperhero: (state) => (id: number) : Superhero | undefined => {
        return state.superheros.find(superhero => superhero.id === id) ?? undefined;
    },
    filterSuperheros: (state, getters) => (searchName: string) => {
        if (state.superheros.length !== 0 && (searchName === null || searchName === '')) {
            const supers = []
            for (let i = 1; i < 7; i++) {
                let superhero = undefined;
                while (superhero == undefined) {
                    const id = Math.floor(Math.random() * 731) + 1;
                    superhero = getters.getSuperhero(id);
                }
                supers.push(superhero)
            }
            return supers
        }
        return state.superheros.filter(superhero =>
            superhero.name.toLowerCase().includes(searchName.toLowerCase()))
    }
}

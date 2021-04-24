import {GetterTree} from "vuex";
import {SuperherosState} from "@/store/superheros/types";
import {RootState} from "@/store/types";
import Superhero from "@/store/superheros/model";

export const getters: GetterTree<SuperherosState, RootState> = {
    getSearchValue(state): string {
        return state.searchValue
    },
    getSuperheroByName: (state) => (name: string) : Superhero | undefined => {
      return state.superheros.find(superhero => superhero.name.replaceAll(' ', '-').toLowerCase() === name) ?? undefined;
    },
    getSuperheroById: (state) => (id: number) : Superhero | undefined => {
        return state.superheros.find(superhero => superhero.id === id) ?? undefined;
    },
    filterSuperheros: (state, getters) => (searchName: string) => {
        if (state.superheros.length !== 0 && (searchName === null || searchName === '')) {
            const supers = []
            for (let i = 1; i < 7; i++) {
                let superhero = undefined;
                while (superhero == undefined) {
                    const id = Math.floor(Math.random() * 731) + 1;
                    superhero = getters.getSuperheroById(id);
                }
                supers.push(superhero)
            }
            return supers
        }
        return state.superheros.filter(superhero =>
            superhero.name.toLowerCase().includes(searchName.toLowerCase()))
    }
}

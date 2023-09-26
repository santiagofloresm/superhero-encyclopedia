import axios from 'axios';
import {ActionTree} from "vuex";
import {SuperherosState} from "@/store/superheros/types";
import {RootState} from "@/store/types";
import {SuperherosMutations} from "@/store/superheros/mutations";

const BaseUrl = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/'

export const actions: ActionTree<SuperherosState, RootState> = {
    async getAllSuperheros({ commit }): Promise<any> {
        const response = await axios.get(BaseUrl + 'all.json')
        // Had to manually change the name of one character because there are two Batman
        response.data[51].name = "Batman Beyond"
        const genders:string[] = [];
        for (const superhero of response.data) {
            if (!genders.includes(superhero.biography.publisher)) {
                console.log(superhero.biography.publisher)
                genders.push(superhero.biography.publisher)
            }
        }
        console.log(genders);
        commit(SuperherosMutations.SET_SUPERHEROS, response.data)
    },
    setSearchValue({ commit }, searchValue: string): void {
        commit(SuperherosMutations.SET_SEARCH, searchValue)
    }
}

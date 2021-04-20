export default class Superhero {
    id: number;
    name: string;
    powerstats: {
        intelligence: number,
        strength: number,
        speed: number,
        durability: number,
        power: number,
        combat: number
    };
    appearance: {
        gender: string,
        race: string,
        height: [],
        weight: [],
        eyeColor: string,
        hairColor: string
    };
    biography: {
        fullName: string,
        alterEgos: string,
        aliases: [],
        placeOfBirth: string,
        firstAppearance: string,
        publisher: string,
        alignment: string
    };
    work: {
        occupation: string,
        base: string
    };
    connections: {
        groupAffiliation: string,
        relatives: string
    };
    images: {
        xs: string,
        sm: string,
        md: string,
        lg: string
    }

    constructor() {
        this.id = 0;
        this.name = '';
        this.powerstats = {
            intelligence: 0,
            strength: 0,
            speed: 0,
            durability: 0,
            power: 0,
            combat: 0
        };
        this.appearance = {
            gender: '',
            race: '',
            height: [],
            weight: [],
            eyeColor: '',
            hairColor: ''
        };
        this.biography = {
            fullName: '',
            alterEgos: '',
            aliases: [],
            placeOfBirth: '',
            firstAppearance: '',
            publisher: '',
            alignment: ''
        };
        this.work = {
            occupation: '',
            base: ''
        };
        this.connections = {
            groupAffiliation: '',
            relatives: ''
        };
        this.images = {
            xs: '',
            sm: '',
            md: '',
            lg: ''
        };
    }
}

class Pokemon {
    number;
    name;
    type;
    types = [];
    photo;
    height;
    weight;

    // constructor() {
    //     this.number = null;
    //     this.name = null;
    //     this.type = null;
    //     this.types = [];
    //     this.photo = null;
    // }

    constructor(name) {
        this.name = name;
        this.number = null;
        this.type = null;
        this.types = [];
        this.photo = null;
    }
}
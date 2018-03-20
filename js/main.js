

class CatsAreaView {

    render() {

    }
}

class CatsListView {
    constructor() {
        this.nav = document.querySelector("nav");
        this.ul = document.createElement("ul");
       
    }

    render() {
        for (let index = 0; index < octopus.getCats().length; index++) {
            const cat = this.cats[index];
            this.li = document.createElement("li");
            this.li.innerText = cat.name;

            this.li.addEventListener("click", () => {
                this.displayOnCatsArea(cat);
            });

            this.ul.appendChild(li);

        }
        this.nav.appendChild(ul);
    }
}

class Octopus {
    constructor() {
        this.cats = [
            cat1 = new Cat("https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg", "Meli"),
            cat2 = new Cat("https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg", "Quico")
        ];

    }

    getCats() {
        return this.cats;
    }

    
}

class Cat {
    constructor(image, name) {
        this.image = image;
        this.name = name;
    }
}

var octopus = new Octopus();



class CatsAreaView {

    render() {

    }
}

class CatsListView {

    render() {

    }

    init(){
        let nav = document.querySelector("nav");
        let ul = document.createElement("ul");
        for (let index = 0; index < this.cats.length; index++) {
            const cat = this.cats[index];
            let li = document.createElement("li");
            li.innerText = cat.name;

            li.addEventListener("click", () => {
                this.displayOnCatsArea(cat);
            });

            ul.appendChild(li);



        }
        nav.appendChild(ul);
    }
}

class Octopus {

    init() {

    }
}

class Cat {
    constructor(image, name) {
        this.image = image;
        this.name = name;
    }
}

var cats = [
    cat1 = new Cat("https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg", "Meli"),
    cat2 = new Cat("https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg", "Quico")
]

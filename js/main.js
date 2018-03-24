'strict mode'
class CatsAreaView {
    constructor(octopus) {
        this.octopus = octopus;
    }

    init(){
       this.catElem = document.querySelector("#cat");
       this.catNameElem = document.querySelector("#cat-name");
       this.catImageElem = document.querySelector("#cat-image");
       this.clickCountElem = document.querySelector("#click-count");

        this.catImageElem.addEventListener("click", () => {
            octopus.increaseClickCount();
        }); 

        this.render();

    }

    render() {
        let currentCat = octopus.getCurrentCat();
        this.catNameElem.textContent = currentCat.name;
        this.catImageElem.src = currentCat.image;
        this.clickCountElem.textContent = currentCat.numberOfClicks;
    }

}

class CatsListView {
    constructor(octopus) {
        this.octopus = octopus;        
    }

    init(){
        this.catListElem = document.querySelector("#cat-list");

        this.render();
    }

    render() {
        let cats = this.octopus.getCats();

        this.catListElem.innerHTML = "";

        for (let index = 0; index < cats.length; index++) {
            const cat = cats[index];
            let liElem = document.createElement("li");
            liElem.textContent = cat.name;
            liElem.addEventListener("click", () => {
                octopus.displayOnCatsArea(cat);

            });
            this.catListElem.appendChild(liElem);

        }
    }
}

class Octopus {
    constructor() {
        this.catsListView = new CatsListView(this);
        this.catsAreaView = new CatsAreaView(this);
    }

    init(){
        model.currentCat = model.cats[0];

        this.catsListView.init();
        this.catsAreaView.init();
    }

    getCats() {
        return model.cats;
    }

    setCurrentCat(cat){
        model.currentCat = cat;
    }

    getCurrentCat(){
        return model.currentCat;
    }
    
    displayOnCatsArea(cat) {
        model.currentCat = cat;
        this.catsAreaView.render();
    }

    increaseClickCount() {
        model.currentCat.numberOfClicks += 1;
        this.catsAreaView.render();
    }

   
}

class Cat {
    constructor(image, name) {
        this.image = image;
        this.name = name;
        this.numberOfClicks = 0;
    }
}

var model = {
    currentCat: null,
    cats : [new Cat("https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg", "Meli"),
    new Cat("https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg", "Quico")]
}


var octopus = new Octopus();
octopus.init();



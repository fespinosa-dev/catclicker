'strict mode'
class CatsAreaView {
    constructor(octopus) {
        this.octopus = octopus;
        this.numberOfClicks = 0;
    }
    render() {
        let catsArea = document.querySelector(".cats-area");
        let div = document.createElement("div");
        div.setAttribute("class", "cat");
        let img = document.createElement("img");
        img.setAttribute("src", octopus.currentCat.image);
        img.setAttribute("alt", "Cat image");
        let h3 = document.createElement("h3");
        h3.innerText = octopus.currentCat.name;
        let h2 = document.createElement("h2");
        h2.innerText = `You've clicked ${octopus.currentCat.numberOfClicks} time(s)`;
        div.appendChild(h3);
        div.appendChild(h2);
        div.appendChild(img);
        div.addEventListener("click", () => {
            octopus.increaseClickCount();
        }); 
        catsArea.innerHTML = '';
        catsArea.appendChild(div);
    }

}

class CatsListView {
    constructor(octopus) {
        this.octopus = octopus;
        this.nav = document.querySelector("nav");
        
    }

    render() {
        let ul = document.createElement("ul");
        let cats = this.octopus.getCats();
        for (let index = 0; index < cats.length; index++) {
            const cat = cats[index];
            let li = document.createElement("li");
            li.innerText = cat.name;

            li.addEventListener("click", () => {
                octopus.displayOnCatsArea(cat);

            });

            ul.appendChild(li);

        }
        this.nav.appendChild(ul);
    }
}

class Octopus {
    constructor() {
        this.currentCat = null;
        this.catsListView = new CatsListView(this);
        this.catsAreaView = new CatsAreaView(this);
        this.catsListView.render();

    }

    getCats() {
        return model.getCats();
    }
    
    displayOnCatsArea(cat) {
        this.currentCat = cat;
        this.catsAreaView.render();
    }

    increaseClickCount() {
        this.currentCat.numberOfClicks += 1;
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
    cats : [new Cat("https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg", "Meli"),
    new Cat("https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg", "Quico")],
    getCats : function(){
        return this.cats;
    }

}


var octopus = new Octopus();



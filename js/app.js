
class App {
    constructor() {



        this.body = document.querySelector("body");
        let cat1, cat2;
        cat1 = new Cat("https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg", "Meli");
        cat2 = new Cat("https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg", "Quico");
        this.cats = [cat1, cat2];
    }

    listCats() {
        let nav = document.querySelector("nav");
        let ul = document.createElement("ul");
        for (let index = 0; index < this.cats.length; index++) {
            const cat = this.cats[index];
            let li = document.createElement("li");
            li.innerText = cat.name;

            li.addEventListener("click", () =>{
                this.displayOnCatsArea(cat);
            });

            ul.appendChild(li);

            

        }
        nav.appendChild(ul);
    }

    displayOnCatsArea(cat){
        let catsArea = document.querySelector(".cats-area");
        catsArea.appendChild(cat.htmlCat);
    }
}

class Cat {
    constructor(image, name) {
        this.image = image;
        this.name = name;
        this.numberOfClicks = 0;
        this.numberOfClicksTitle;
        this.htmlCat = this.createDomElement();
        this.htmlCat.addEventListener("click", () => {
            this.increaseClickCount();
            this.showClickCount();
        });

    }

    createDomElement() {
        let div = document.createElement("div");
        div.setAttribute("class", "cat");
        let img = document.createElement("img");
        img.setAttribute("src", this.image);
        img.setAttribute("alt", "Cat image");
        let h3 = document.createElement("h3");
        h3.innerText = this.name;
        let h2 = document.createElement("h2");
        h2.innerText = `You've clicked ${this.numberOfClicks} time(s)`;
        this.numberOfClicksTitle = h2;
        div.appendChild(h3);
        div.appendChild(h2);
        div.appendChild(img);
        return div;

    }

    increaseClickCount() {
        this.numberOfClicks += 1;
    }

    showClickCount() {
        this.numberOfClicksTitle.innerHTML = `You've clicked ${this.numberOfClicks} times`;
    }
}

let app = new App();
app.listCats();
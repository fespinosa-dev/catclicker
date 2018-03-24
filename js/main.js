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

class AdminView{
    constructor(octopus) {
        this.octopus = octopus;
    }

    init(){
        this.adminElem = document.querySelector("#admin");
        this.adminBtn = document.querySelector("#admin-btn");
        this.catNameInputElem = document.querySelector("#cat-name-input");
        this.catUrlInputElem = document.querySelector("#cat-url-input");
        this.clickCountInputElem = document.querySelector("#click-count-input");
        this.cancelBtnElem = document.querySelector("#cancel-btn");
        this.saveBtn = document.querySelector("#save");

        this.adminBtn.addEventListener("click", (event) =>{
            octopus.displayAdminArea();
            event.preventDefault();
        });

        this.cancelBtnElem.addEventListener("click", (event) => {
            octopus.hideAdminArea();
            event.preventDefault(); 
        });

        this.saveBtn.addEventListener("click", (event) => {
           let name = this.catNameInputElem.value;
           let url  = this.catUrlInputElem.value;
           let clicksCount = this.clickCountInputElem.value;
            octopus.updateCat(name,url,clicksCount);
            event.preventDefault();
        });

    }

    render(){  
        if(octopus.getAdminAreaVisibility() === "visible"){
            this.adminBtn.style = "display:none";
            this.adminElem.style = "display:block";

            let currentCat = octopus.getCurrentCat();
            this.catNameInputElem.value = currentCat.name;
            this.catUrlInputElem.value = currentCat.image;
            this.clickCountInputElem.value = currentCat.numberOfClicks;


        }else{
            this.adminBtn.style = "";
            this.adminElem.style = "";
        }
        

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
                octopus.displayCat(cat);

            });
            this.catListElem.appendChild(liElem);

        }
    }
}

class Octopus {
    constructor() {
        this.catsListView = new CatsListView(this);
        this.catsAreaView = new CatsAreaView(this);
        this.adminView = new AdminView(this);
    }

    init(){
        model.currentCat = model.cats[0];

        this.catsListView.init();
        this.catsAreaView.init();
        this.adminView.init();

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
    
    displayCat(cat) {
        model.currentCat = cat;
        this.catsAreaView.render();
    }

    increaseClickCount() {
        model.currentCat.numberOfClicks += 1;
        this.catsAreaView.render();
    }

    displayAdminArea(){
        model.adminAreaVisibility = "visible";
        this.adminView.render();
    }

    hideAdminArea(){
        model.adminAreaVisibility = "hidden";
        this.adminView.render();
    }

    getAdminAreaVisibility(){
        return model.adminAreaVisibility;
    }

    setAdminAreaVisibility(state){
        model.adminAreaVisibility = state;
    }

    updateCat(name, url, clicksCount){
        model.currentCat.name = name;
        model.currentCat.image = url;
        model.currentCat.numberOfClicks = clicksCount;
        this.hideAdminArea();

        this.catsListView.render();
        this.catsAreaView.render();
        this.adminView.render();
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
    adminAreaVisibility : "hidden",
    cats : [new Cat("img/cat1.jpg", "Meli"), new Cat("img/cat5.jpg", "Quico"),
            new Cat("img/cat3.jpg", "Fernando"), new Cat("img/cat4.jpg", "Suli"), 
            new Cat("img/cat2.jpg", "Mandrake")]
}


var octopus = new Octopus();
octopus.init();



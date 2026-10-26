class coffeeMachine{
    #boilWater(){


        console.log("water boiling");
    }
    #addMilk(){

        console.log("milk need to be added");
    }
    #addSugar(){
        console.log("add sugar");
    }
    makeYourCoffee(){


        this.#boilWater();
        this.#addMilk();
        this.#addSugar();
    }
    makeWithoutCoffee(){


        this.#boilWater();
        this.#addMilk();
    }
}
const MC1=new coffeeMachine();
MC1.makeYourCoffee();
MC1.makeWithoutCoffee();

class bankAcc{

    #balance
    accountHolder
    //private variable
    constructor(initialBalance,accountHolder){
        this.#balance = initialBalance;
        this.accountHolder=accountHolder;


    }
    showBlance(){
        console.log(this.#balance);
    }

    deposit(depositAmount){
        if (depositAmount > 0) {
            this.#balance += depositAmount;//add the deposit amount to the balance
        }
        else{

            console.log("invalid deposit amount");
        }

    }
    withdrow(withdrawAmount){

        if(withdrawAmount >0){
            this.#balance -= withdrawAmount;


        }
        else{
            console.log("invalid withdraw amount");
        }
    }

}
const bankAcc1 = new bankAcc(1000,"rana");
bankAcc1.showBlance();
bankAcc1.deposit(500);
bankAcc1.showBlance();
bankAcc1.withdrow(200);
bankAcc1.showBlance();
//bankAcc1.accountHolder="john"
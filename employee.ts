class Employee{
     name:string
     id:number
    constructor(name:string,id:number)
    {

        this.name=name;
        this.id=id;
    }

displayEmployee()
{

    console.log(this.name+","+this.id);
}
}
const emp1=new Employee("priya",20);
emp1.displayEmployee();

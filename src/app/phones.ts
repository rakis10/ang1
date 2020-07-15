export class Phone {
    public id : number
    public name : string
    public popis : string
    public price : number

    constructor(id : number, name : string, price : number){
        this.id= id
        this.name= name
        this.price = price
    }
    public getName(){
        return name;
    }
}
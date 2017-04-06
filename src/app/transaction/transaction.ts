export class Transaction{
    constructor(private datetime:string,private merchanteService:string,private paymentMethod:string,private amount:number){
            this.datetime = datetime;
            this.merchanteService = merchanteService;
            this.paymentMethod  = paymentMethod;
            this.amount = amount;
    }
}
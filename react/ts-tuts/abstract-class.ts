abstract class Payment {
    constructor(protected amount: number, protected accountNumber: number, protected upiId?: string) {}
    isPaymentValid(amount: number): boolean {
        return amount == this.amount;
    }
}

class PayTM extends Payment {
 public static getStatus(startPoint: number) {
    for(let i = startPoint; i < 100000; i++) {
        console.log(i);
    }
 }   
}
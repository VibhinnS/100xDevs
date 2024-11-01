"use strict";
class Payment {
    constructor(amount, accountNumber, upiId) {
        this.amount = amount;
        this.accountNumber = accountNumber;
        this.upiId = upiId;
    }
    isPaymentValid(amount) {
        return amount == this.amount;
    }
}
class PayTM extends Payment {
}

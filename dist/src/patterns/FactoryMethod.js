"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SenderCreator = /** @class */ (function () {
    function SenderCreator() {
    }
    return SenderCreator;
}());
var MercadoPagoSenderCreator = /** @class */ (function (_super) {
    __extends(MercadoPagoSenderCreator, _super);
    function MercadoPagoSenderCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * factoryMethod
     */
    MercadoPagoSenderCreator.prototype.factoryMethod = function () {
        return new MercadoPagoSender();
    };
    return MercadoPagoSenderCreator;
}(SenderCreator));
var BankSenderCreator = /** @class */ (function (_super) {
    __extends(BankSenderCreator, _super);
    function BankSenderCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * factoryMethod
     */
    BankSenderCreator.prototype.factoryMethod = function () {
        return new BankSender();
    };
    return BankSenderCreator;
}(SenderCreator));
var BankSender = /** @class */ (function () {
    function BankSender() {
    }
    BankSender.prototype.sendMoney = function (amount) {
        console.log("Sending " + amount + " by my Bank");
    };
    return BankSender;
}());
var MercadoPagoSender = /** @class */ (function () {
    function MercadoPagoSender() {
    }
    MercadoPagoSender.prototype.sendMoney = function (amount) {
        console.log("Sending " + amount + " by Mercado Pago");
    };
    return MercadoPagoSender;
}());
function app(creator) {
    var sender = creator.factoryMethod();
    sender.sendMoney(400);
}
app(new MercadoPagoSenderCreator());
app(new BankSenderCreator());

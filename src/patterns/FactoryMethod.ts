abstract class SenderCreator {

    public abstract factoryMethod(): Sender;

}

class MercadoPagoSenderCreator extends SenderCreator {

    /**
     * factoryMethod
     */
    public factoryMethod(): Sender {
        return new MercadoPagoSender();
    }
}

class BankSenderCreator extends SenderCreator {

    /**
     * factoryMethod
     */
    public factoryMethod(): Sender {
        return new BankSender();
    }

}

class BankSender implements Sender {
    sendMoney(amount: Number) {
        console.log(`Sending ${amount} by my Bank`);
    }
}

class MercadoPagoSender implements Sender {
    sendMoney(amount: Number) {
        console.log(`Sending ${amount} by Mercado Pago`);
    }
}

interface Sender {
    sendMoney(amount: Number);
}

function app(creator: SenderCreator) {
    const sender = creator.factoryMethod();
    sender.sendMoney(400);
}

app(new MercadoPagoSenderCreator());

app(new BankSenderCreator());


class Radius extends Number {}
class Size extends Number {}


class RoundHole {
    constructor(private radius: Radius) {}

    public getRadius() {
        return this.radius;
    }

    public fits(obj: RoundObject) {
        return this.radius <= obj.getRadius();
    }
}

class RoundObject {
    constructor(private radius: Radius) {}

    /**
     * getRadius
     */
    public getRadius() {
        return this.radius;
    }
}

class SquareObject {
    constructor(private size: Size) {}

    /**
     * getSize
     */
    public getSize(): Size {
        return this.size;
    }
}

class SquareObjectAdapter extends RoundObject {
    private squareObject: SquareObject;

    constructor(squareObj: SquareObject) {
        super(squareObj.getSize());
        this.squareObject = squareObj;
    }

    /**
     * getRadius
     */
    public getRadius(): Radius {
        return (this.squareObject.getSize().valueOf() * (Math.sqrt(2) / 2 ));
    }
}


class App {

    public start() {
        const roundHole = new RoundHole(20);

        const roundObject = new RoundObject(35);
        console.log({ roundObject: roundHole.fits(roundObject)});

        const roundObject2 = new RoundObject(19);
        console.log({ roundObject2: roundHole.fits(roundObject2)});

        const squareObject = new SquareObject(20);
        const squareAdapter = new SquareObjectAdapter(squareObject);

        console.log({ roundObject2: roundHole.fits(squareAdapter)});
    }
}

const app2 = new App();
app2.start();
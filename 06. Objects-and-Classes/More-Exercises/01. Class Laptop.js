class Laptop {

    constructor(info, quality, isOn, turnOn, turnOff, showInfo,) {
        this.info = { producer: info, age: +info, brand: info }
        this.quality = quality
        this.isOn = false
        this.turnOn = () => { return this.isOn = true, this.quality-- }
        this.turnOff = () => { return this.isOn = false, this.quality-- }
        this.showInfo = function () { return JSON.stringify(info) }
    }

    get price() {
        return (800 - this.info.producer.age * 2 + (this.quality * 0.5))
    }
}

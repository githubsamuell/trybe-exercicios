class Tv {
    brand: string
    size: number
    resolution: string
    connection: string[]

    constructor(brand: string, size: number, resolution: string, connection: string[]) {
        this.brand = brand
        this.size = size
        this.resolution = resolution
        this.connection = connection

    }

    turnOn(): void {
        console.log(`Tv ${this.brand}, ${this.size}, resolution ${this.resolution}  \navailable connections ${this.connection}`);
        
    }

}

const tv1 = new Tv("LG", 32, "4K", ["HDMI", "internet", "wifi", "iot"])
tv1.turnOn()
console.log(tv1)
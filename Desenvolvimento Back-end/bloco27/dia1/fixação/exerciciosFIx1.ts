class Tv {
   private _brand: string
   private _size: number
   private _resolution: string
   private _connections: string[]
   private _connectedTo: string;

    constructor(brand: string, size: number, resolution: string, connections: string[], connnectedTo: string) {
        this._brand = brand
        this._size = size
        this._resolution = resolution
        this._connections = connections
        this._connectedTo = this.connectedTo

    }

    turnOn(): void {
        console.log(`Tv ${this._brand}, ${this._size}, resolution ${this._resolution}  \navailable connections ${this._connections}`);
        
    }

    get connectedTo(): string {
        return this._connectedTo;
      }
    
      set connectedTo(value: string) {
        if (this._connections.includes(value)) {
          this._connectedTo = value
          console.log(`inclui esta conexao ${this._connectedTo}`)
        } else {
          console.log('Sorry, connection unavailable!')
        }
      }


}

const tv1 = new Tv("LG", 32, "4K", ["HDMI", "internet", "wifi", "iot"], "cabo")
tv1.turnOn()
/* console.log(tv1) */

tv1.connectedTo = "internet";
console.log('Connecto', tv1.connectedTo);

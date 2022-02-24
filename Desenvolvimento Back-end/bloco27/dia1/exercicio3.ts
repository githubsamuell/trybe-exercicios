class Client {
    private _name: string = String();

    constructor(name: string) {
        this.name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        if (value.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres.');

        this._name = value;
    }
}

class Pedido {
    private _name: string = String();
    private _price: number = Number();

    constructor(name: string, price: number) {
        this._name = name;
        this._price = price;
    }

    get name(): string {
        return this._name
    }
    set name(value: string) {
        if (value.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres.');

        this._name = value;
    }

    get price(): number {
        return this._price
    }
    set price(value: number) {
        if(value > 0) throw new Error('O preço deve ser maior que zero');
        this._price = value
    }

}

class NotaFiscal {
    private _client: Client
    private _items: Pedido[] = []
    private _metodoDePagamento: string;
    private _desconto: number = 0;

    constructor(cliente: Client, items: Pedido[], metodoPagamento: string, desconto: number) {
        this._client = cliente;
        this._items = items;
        this._metodoDePagamento = metodoPagamento;
        this._desconto = desconto;
    }

    get client(): Client {
        return this._client;
    }

    set client(value: Client) {
        this._client = value;
    }

    get items(): Pedido[] {
        return this._items;
    }

    set items(value: Pedido[]) {
        if (value.length === 0) {
            throw new Error("O pedido deve ter pelo meno um item.");
        }

        this._items = value;
    }

    get metodoPagamento(): string {
        return this._metodoDePagamento;
    }

    set metodoPagamento(value: string) {
        this._metodoDePagamento = value;
    }

    get desconto(): number {
        return this._desconto;
    }

    set desconto(value: number) {
        if (value < 0) {
            throw new Error("O disconto não pode ser um valor negatívo.");
        }

        this._desconto = value;
    }

}


const client = new Client('João');

const sandwiche = new Pedido('Sandwiche Natural', 5.00);
const juice = new Pedido('Suco de Abacaxí', 5.00);
const dessert = new Pedido('Gelatina de Uva', 2.50);

const order = new NotaFiscal(client, [sandwiche, juice, dessert], 'dinheiro', 0.10);

console.log(order);

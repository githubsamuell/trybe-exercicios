class SuperClass {
    isSuper: boolean;
    constructor() {
        this.isSuper = true;
    }

    sayHello(): void {
        console.log('Ola mundo');
        
    }
}

function get(object: SuperClass) {
   object.sayHello();
}

class SubClass extends SuperClass {

}

const sup = new SubClass();
const sub = new SubClass();
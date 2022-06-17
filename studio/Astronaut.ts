import { Payload } from './Payload'

class astronaut implements Payload{
    name: string;
    massKg: number;
    constructor(name: string, massKg: number){ 
        this.name = name;
        this.massKg = massKg;
    }
}       
    
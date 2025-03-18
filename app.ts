import { EventEmitter } from "events";
import { events, Creation } from "./objects";

export class Set extends EventEmitter {
    private many: any[];

    constructor(){
        super();
        this.many = [];
    }
    
    emit<K extends keyof events>(event: K, ...args: Parameters<events[K]>): boolean {
        return super.emit(event, ...args);
    }

    on<K extends keyof events>(event: K, listener: events[K]): this {
        return super.on(event, listener);
    }

    shove(
        product: any,
        index: number = -1
    ){
        let time = new Date();
        let productInfo: Creation = {
            value: product,
            at: time.toString(),
            timestamp: time.getTime(),
            index: undefined,
            exists: undefined
        };

        if (this.many.includes(product)){
            productInfo.index = this.many.indexOf(product);
            productInfo.exists = true;
            this.emit("new", productInfo);
        } else {
            productInfo.index = index;
            productInfo.exists = true;
            this.many.splice(index, 0, product);
            this.emit("new", productInfo);
        }
    }

}

module.exports = { Set };
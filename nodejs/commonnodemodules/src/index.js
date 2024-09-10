//how events are emitted and how to listen for events
//this is not io events , just custom events
//io events will see later.

const EventEmitter = require('node:events')

class Sales extends EventEmitter {
    constructor() {
        super()
        //register listener
        this.on('sold', (evt) => {
            console.log(evt)
        })
    }
    //biz
    sale(product) {
        //fire /emit event
        this.emit('sold', product)
    }
}


function main() {
    let sales = new Sales()
    sales.sale({ id: 1, name: 'Phone' })
}
main()
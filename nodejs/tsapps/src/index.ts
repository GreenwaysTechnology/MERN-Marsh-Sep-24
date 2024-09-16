
interface OnInit {
    init(): void
}
interface onDestroy {
    destroy(): void
}

class CustomerController implements OnInit, onDestroy {
    init(): void {
        console.log('CustomerController-init')
    }
    destroy(): void {
        console.log('CustomerController-destory')
    }
}


class OrderController implements OnInit, onDestroy {
    init(): void {
        console.log('OrderController-init')
    }
    destroy(): void {
        console.log('OrderController-destory')
    }
}


function main() {
    let custrl = new CustomerController()
    let orderCtrl = new OrderController()
    custrl.init()
    custrl.destroy()

    orderCtrl.init()
    orderCtrl.destroy()
}
main()
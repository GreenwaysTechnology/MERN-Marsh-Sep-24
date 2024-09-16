class CustomerController {
    init() {
        console.log('CustomerController-init');
    }
    destroy() {
        console.log('CustomerController-destory');
    }
}
class OrderController {
    init() {
        console.log('OrderController-init');
    }
    destroy() {
        console.log('OrderController-destory');
    }
}
function main() {
    let custrl = new CustomerController();
    let orderCtrl = new OrderController();
    custrl.init();
    custrl.destroy();
    orderCtrl.init();
    orderCtrl.destroy();
}
main();

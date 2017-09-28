import Vuex from 'vuex'

function updateSubtotal (qty, price) {
    let total = 0
    total = parseFloat(price) * qty * 100
    total = parseInt(total).toString()
    console.log('@qty, price, total: ', qty, price, total)
    return `${ total.substr(0, total.length - 2) }.${ total.substr(total.length - 2) }`
}

const createStore = () => {
    return new Vuex.Store({
        state: {
            cartList: []
        },
        mutations: {
            addCart (state, item) {
                // check if the item is already in list
                const result = state.cartList.find((foo) => { return foo.id === item.id })
                if (result === undefined) {
                    item.subTotal = item.price
                    state.cartList.push(item)
                } else {
                    result.qty += 1
                    result.subTotal = updateSubtotal(result.qty, result.price)
                }
            },
            clearCart (state) {
                state.cartList = []
            },
            updateQty (state, item) {
                const cartItem = state.cartList.find((foo) => { return foo.id === item.id })
                cartItem.qty = item.qty
                cartItem.subTotal = updateSubtotal(cartItem.qty, cartItem.price)
            }
        },
        getters: {
            grandTotal: (state) => {
                let total = 0
                state.cartList.forEach((item) => {
                    total += parseFloat(item.subTotal) * 100
                })
                total = parseInt(total).toString()
                console.log('total: ', total)
                return `${ total.substr(0, total.length - 2) }.${ total.substr(total.length - 2) }`
            },
            getCheckoutQr: (state) => {
                let qr = 'https://kiosk.qikan.net/payment/index.html?g='
                state.cartList.forEach((item) => {
                    qr += `${ item.id },${ item.qty };`
                })
                return qr
            }
        }
    })
}

export default createStore

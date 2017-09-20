import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            cartList: []
        },
        mutations: {
            addCart (state, item) {
                state.cartList.push(item)
            },
            clearCart (state) {
                state.cartList = []
            }
        },
        getters: {
            grandTotal: (state) => {
                let total = 0.0
                state.cartList.forEach((item) => {
                    total += item.price
                })
                return total
            }
        }
    })
}

export default createStore

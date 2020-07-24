
export default {
    namespaced: true,
    state: {
        goodsInCart: []
    },
    getters: {
        goodsInCart: state => state.goodsInCart,
        checkInCart: state => id => state.goodsInCart.find(e => e.id == id),
        indexInCart: state => id => state.goodsInCart.findIndex(e => e.id == id),




    },
    mutations: {
        addCart({ goodsInCart }, id) { goodsInCart.push({ id: id, cnt: 1 }) },

        incCart({ goodsInCart }, index) { ++goodsInCart[index]['cnt'] },

        decCart({ goodsInCart }, index) { --goodsInCart[index]['cnt'] },

        delCart({ goodsInCart }, index) { goodsInCart.splice(index, 1) },

        chengCart({ goodsInCart }, index, val) { goodsInCart[index]['cnt'] == val }

    },
    actions: {

        actionsCart({ commit, getters }, { id, action = null }) {
            console.log(id)

            console.log(action)

            let { goodsInCart, checkInCart, indexInCart } = getters

            !action && id && commit('addCart', id)

            action == "inc" && commit('incCart', indexInCart(id))

            if (checkInCart(id) && action == "dec") {

                goodsInCart[indexInCart(id)]['cnt'] > 0 && commit('decCart', indexInCart(id))

                goodsInCart[indexInCart(id)]['cnt'] == 0 && commit('delCart', indexInCart(id))
            }

        },


    }

}
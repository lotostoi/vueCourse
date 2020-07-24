
import Vue from 'vue'
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
        addCart({ goodsInCart }, { id, price }) { goodsInCart.push({ id: id, cnt: 1 }) },

        incCart({ goodsInCart }, index) { ++goodsInCart[index]['cnt'] },

        decCart({ goodsInCart }, index) { --goodsInCart[index]['cnt'] },

        delCart({ goodsInCart }, index) { goodsInCart.splice(index, 1) },

        chengCart({ goodsInCart }, { index, val }) {

            Vue.set(goodsInCart[index], 'cnt', 1)
            Vue.set(goodsInCart[index], 'cnt', val)

        }

    },
    actions: {

        actionsCart({ commit, getters }, { id, action = null, e }) {

            let { goodsInCart, checkInCart, indexInCart } = getters

            !action && id && commit('addCart', id)

            action == "inc" && commit('incCart', indexInCart(id))

            if (checkInCart(id) && action == "dec") {

                goodsInCart[indexInCart(id)]['cnt'] > 0 && commit('decCart', indexInCart(id))

                goodsInCart[indexInCart(id)]['cnt'] == 0 && commit('delCart', indexInCart(id))
            }

            if (checkInCart(id) && action == "cheng") {

                let cnt = parseInt(e.target.value)

                let res = (isNaN(cnt) || cnt < 1) ? 1 : cnt

                commit('chengCart', { index: indexInCart(id), val: false })
                commit('chengCart', { index: indexInCart(id), val: res })
            }

        },
    }

}
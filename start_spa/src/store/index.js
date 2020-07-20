import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		price: 1000,
		cnt: 1,
		status: 'none',
		error: false,
		goodsInCart: [],
		goods: [
			{
				name: 'prod1',
				price: 1000,
				cnt: 1,
				img: "http://placehold.it/200",
				status: 'none',
				id: 1
			},
			{
				name: 'prod2',
				price: 800,
				cnt: 1,
				img: "http://placehold.it/200",
				status: 'none',
				id: 2
			},
			{
				name: 'prod3',
				price: 1500,
				cnt: 1,
				img: "http://placehold.it/200",
				status: 'none',
				id: 3
			},
			{
				name: 'prod4',
				price: 2000,
				cnt: 1,
				img: "http://placehold.it/200",
				status: 'none',
				id: 4
			},
		]
	},
	getters: {
		price: state => state.price,
		cnt: state => state.cnt,
		status: state => state.status,
		total: state => state.goodsInCart.reduce((total, e) => total + (e.cnt * e.price), 0),
		goods: state => state.goods,
		goodsInCart: state => state.goodsInCart,
		inCart: state => state.goodsInCart.reduce((total, e) => total + e.cnt, 0),

	},
	mutations: {
		
		clearCart(state) { 
			state.goodsInCart = []
		},

		addGoodToGoods(state, obj) {
			let index = state.goodsInCart.findIndex(e => e.id == obj.good.id)
			if (index != -1) {
				let el = state.goodsInCart[index]
				el.cnt++
			} else {
				state.goodsInCart.push(obj.good)
			}
		},

		setCnt(state, obj) {

			let id = obj.id,
				e = obj.e,
				index = state.goodsInCart.findIndex(e => e.id == id),
				good = state.goodsInCart[index],
				oldCnt = good.cnt

			let newCnt = e.target.value ? parseInt(e.target.value) : e.target.innerHTML

			switch (newCnt) {
				case '-1':
					//good.cnt != 1 ? Vue.set(good, 'cnt', --good.cnt) : state.goodsInCart.splice(index, 1)
					good.cnt != 1 ? good.cnt-- : state.goodsInCart.splice(index, 1)
					break
				case '+1':
					//Vue.set(good, 'cnt', ++good.cnt)
					good.cnt++
					break
				default:
					let res = (isNaN(newCnt) || newCnt < 1) ? 1 : newCnt

				return ((good.cnt == oldCnt) && (good.cnt = false) && (good.cnt = res)) || (good.cnt = res)
				// незнаю имеет ли смылс тут эта проверка возможно лучше было бы простo написать
				//good.cnt = false
				//good.cnt = res 

			}

		},
		setStatus(state, payload) {
			state.status = payload.status;
		}
	},
	actions: {

		clearCart(store) { 
			store.commit('clearCart') 
		},

		addToCart(store, obj) {

			store.commit('addGoodToGoods', obj)

		},

		getCnt(store, obj) {

			store.commit('setCnt', obj)

		},

		send(store) {
			store.commit('setStatus', { status: 'pending' });

			setTimeout(() => {
				store.commit('setStatus', { status: 'done' });
			}, 1000);
		}
	},
	strict: process.env.NODE_ENV !== 'production'
});
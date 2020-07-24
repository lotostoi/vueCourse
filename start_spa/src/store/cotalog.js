export default {
    namespaced: true,
    state: {
        goods: [
            {
                name: 'prod1',
                price: 1000,
                img: "http://placehold.it/200",
                status: 'none',
                id: 1
            },
            {
                name: 'prod2',
                price: 800,
                img: "http://placehold.it/200",
                status: 'none',
                id: 2
            },
            {
                name: 'prod3',
                price: 1500,
                img: "http://placehold.it/200",
                status: 'none',
                id: 3
            },
            {
                name: 'prod4',
                price: 2000,
                img: "http://placehold.it/200",
                status: 'none',
                id: 4
            },
            {
                name: 'prod6',
                price: 2000,
                img: "http://placehold.it/200",
                status: 'none',
                id: 5
            },
            {
                name: 'prod7',
                price: 2000,
                img: "http://placehold.it/200",
                status: 'none',
                id: 6
            },
            {
                name: 'prod8',
                price: 2000,
                img: "http://placehold.it/200",
                status: 'none',
                id: 7
            },
            {
                name: 'prod9',
                price: 2000,
                img: "http://placehold.it/200",
                status: 'none',
                id: 8
            },
            {
                name: 'prod10',
                price: 2000,
                img: "http://placehold.it/200",
                status: 'none',
                id: 9
            },
        ]
    },
    getters: {
        goods: state => state.goods,
        getGood: state => id => {
            if (state.goods.findIndex(e => e.id == id) != -1) {
                return state.goods[state.goods.findIndex(e => e.id == id)]
            }
        }
    },
    actions: {

    },
    mutations: {

    }

}
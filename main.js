var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: './meiaVerde.jpg',
        inStock: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: "./meiaVerde.jpg"
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: "./meiaAzul.png"
            }
        ],
        cart: 0
    },
    methods: {
        // addToCart: function () {
        addToCart(){
            this.cart += 1
        },

        cleanCart() {
            this.cart = 0
        },
        updateProduct(variantImage) {
            this.image = variantImage
        }
    }

})
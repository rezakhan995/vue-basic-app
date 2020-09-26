var app = new Vue({
    el: "#app",
    data: {
        product: "Compact",
        image: "assets/green-socks.jpg",
        inStock: false,
        stock: 100,
        variants: [{
                id: "01",
                material: "green",
                image: "assets/green-socks.jpg"
            },
            {
                id: "02",
                material: "blue",
                image: "assets/blue-socks.jpg"
            }
        ],
        cart: 0,
    },
    methods: {
        addToCart: function() {
            this.cart += 1;
        },
        updateProductImage: function(imageName) {
            this.image = imageName;
        }
    },
});
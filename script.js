Vue.component("product", {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
            <div class="product">
                <div class="product-image">
                    <img :src="image" />
                </div>
                <div class="product-info">
                    <h1>{{ title }}</h1>
                    <p v-if="inStock > 10">In stock</p>
                    <p v-else-if="inStock <= 10 && inStock > 0">Almost fiished</p>
                    <p v-else>Out of stock</p>
                    <p>Shipping: {{ shipping }}</p>
                    <div v-for="(variant , index) in variants" class="color-box" :style="{ 'background-color': variant.material }" @mouseover="updateProductData(index)">
                    </div>
                    <button @click="addToCart" :disabled="!inStock" :class="{ disabledButton: !inStock }">Add To Cart</button>
                    <div class="cart">
                        <p>Cart({{ cart }})</p>
                    </div>
                </div>
            </div>
            `,
    data() {
        return {
            product: "Socks",
            brand: " from Bata",
            selectedVariant: 0,
            variants: [{
                    id: "01",
                    material: "green",
                    image: "assets/green-socks.jpg",
                    qty: 9
                },
                {
                    id: "02",
                    material: "blue",
                    image: "assets/blue-socks.jpg",
                    qty: 100
                }
            ],
            cart: 0,
        }
    },
    methods: {
        addToCart: function() {
            this.cart += 1;
        },
        updateProductData: function(index) {
            this.selectedVariant = index;
        }
    },
    computed: {
        title() {
            return this.product + " " + this.brand;
        },
        image() {
            return this.variants[this.selectedVariant].image;
        },
        inStock() {
            return this.variants[this.selectedVariant].qty;
        },
        shipping() {
            if (this.premium) {
                return "Free";
            }
            return 2.99
        }
    }
});
var app = new Vue({
    el: "#app",
    data: {
        premium: true
    }
});
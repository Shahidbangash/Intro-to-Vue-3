// const product = 'Socks'

const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      discription: "This is product discription",
      inventory: 10,
      onsale: true,
      cart: 0,
      image: "./assets/images/socks_blue.jpg",
      color: ["green", "blue"],
      description: ["50% Cotton", "50% Polyster"],
      item_details: [
        {
          id: 123,
          color : 'blue',
          image: "./assets/images/socks_blue.jpg",
        },

         {
          id: 124,
          color : 'green',
          image: "./assets/images/socks_green.jpg",
        },
    ],
    };
  },
  methods: {
    addtocart() {
      this.cart += 1;
    },
    removeFromCart() {
        this.cart -= 1;
    },
    changeImage(image){
        console.log(this.cart);
        // console.log(id);
        this.image = image;
    }
  },
});

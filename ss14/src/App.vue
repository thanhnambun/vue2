<template>
  <div>
    <div class="product-detail-container">
      <div class="product-image-gallery">
        <img :src="selectedImage" alt="Selected Image" />
        <div class="image-thumbnails">
          <img v-for="(image, index) in images" :src="image" :key="index" @click="selectImage(image)" />
        </div>
      </div>

      <div class="product-info">
        <h1>Cute Soft Teddybear</h1>
        <p class="price">
          <span class="original-price">$175</span> $200
        </p>
        <div class="rating">
          <span>⭐⭐⭐⭐☆</span>
          <p>(236 reviews)</p>
        </div>

        <div class="colors">
          <h4>Colors</h4>
          <div class="color-options">
            <div class="color-option orange"></div>
            <div class="color-option yellow"></div>
            <div class="color-option pink"></div>
            <div class="color-option blue"></div>
          </div>
        </div>

        <div class="quantity">
          <h4>Quantity</h4>
          <div class="quantity-control">
            <button @click="decreaseQuantity">-</button>
            <input type="number" v-model="quantity" />
            <button @click="increaseQuantity">+</button>
          </div>
        </div>

        <div class="buttons">
          <button class="buy-now">Buy Now</button>
          <button class="add-to-cart">Add To Cart</button>
        </div>

        <p class="shipping-info">
          Dispatched in 2-3 weeks<br />
          <a href="#">Why the longer time for delivery?</a>
        </p>
      </div>
    </div>

    <div class="checkout-container">
      <div class="checkout-header">
        <div class="checkout-step active">
          <span>Item Cart</span>
          <p>Product Summary</p>
        </div>
        <div class="checkout-step">
          <span>Billing</span>
          <p>Billing Information</p>
        </div>
        <div class="checkout-step">
          <span>Payment</span>
          <p>Add & Update Card</p>
        </div>
      </div>

      <div class="checkout-content">
        <table class="product-summary">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="product-info">
                <img src="https://cdn.vuetifyjs.com/images/cards/house.jpg" alt="Product Image">
                <div>
                  <p>Cute Soft Teddybear</p>
                  <small>size: 8 | Color: Dark Red</small>
                </div>
              </td>
              <td>$200 <span class="original-price">$175</span></td>
              <td>
                <div class="quantity-control">
                  <button>-</button>
                  <input type="number" value="1" />
                  <button>+</button>
                </div>
              </td>
              <td>$200</td>
            </tr>
          </tbody>
        </table>

        <div class="order-summary">
          <h3>Order Summary</h3>
          <div class="summary-item">
            <span>Sub Total</span>
            <span>$200</span>
          </div>
          <div class="summary-item">
            <span>Discount 5%</span>
            <span>- $10</span>
          </div>
          <div class="summary-item">
            <span>Shipping Charges</span>
            <span>-</span>
          </div>
          <div class="summary-item total">
            <span>Total</span>
            <span>$190</span>
          </div>
        </div>

        <div class="checkout-actions">
          <button class="continue-shopping">Continue Shopping</button>
          <button class="checkout-button">CheckOut</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const images = [
  'https://cdn.vuetifyjs.com/images/cards/house.jpg',
  'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
  'https://cdn.vuetifyjs.com/images/cards/road.jpg'
]

const selectedImage = ref(images[0])
const quantity = ref(1)

const selectImage = (image) => {
  selectedImage.value = image
}

const increaseQuantity = () => {
  quantity.value++
}

const decreaseQuantity = () => {
  if (quantity.value > 1) quantity.value--
}
</script>

<style scoped>
.product-detail-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}

.product-image-gallery img {
  width: 300px;
  border-radius: 10px;
}

.image-thumbnails {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.image-thumbnails img {
  width: 50px;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;
}

.product-info {
  max-width: 400px;
}

.price {
  font-size: 24px;
}

.original-price {
  text-decoration: line-through;
  color: #999;
  margin-right: 10px;
}

.rating {
  display: flex;
  align-items: center;
}

.colors {
  margin-top: 20px;
}

.color-options {
  display: flex;
  gap: 10px;
}

.color-option {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;
}

.orange {
  background-color: orange;
}

.yellow {
  background-color: yellow;
}

.pink {
  background-color: pink;
}

.blue {
  background-color: lightblue;
}

.quantity-control {
  display: flex;
  align-items: center;
  gap: 10px;
}

.buttons {
  margin-top: 20px;
  display: flex;
  gap: 10px;
}

.buy-now {
  background-color: #FF6347;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.add-to-cart {
  background-color: #F5F5F5;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

.shipping-info {
  margin-top: 10px;
  color: gray;
}

/* Checkout Section Styles */
.checkout-container {
  max-width: 800px;
  margin: auto;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.checkout-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.checkout-step {
  text-align: center;
  padding: 10px;
  border-bottom: 2px solid #ccc;
}

.checkout-step.active {
  border-bottom: 2px solid #00F;
}

.checkout-content {
  border-top: 1px solid #ddd;
  padding-top: 20px;
}

.product-summary {
  width: 100%;
  border-collapse: collapse;
}

.product-summary th,
.product-summary td {
  padding: 10px;
  text-align: left;
}

.order-summary {
  margin-top: 30px;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
}

.checkout-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
</style>

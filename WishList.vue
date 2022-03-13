<template>
<div class="wrapper">
  <div class="products">
    <div class="books" v-for="book in this.$root.$data.WishList" :key="book.id">
      <div class="info">
        <h1><b>{{book.title}}</b></h1>
        <img :src=book.image>
      <div class="price">
        <h3>{{book.author}}</h3>
        <h4> {{book.pages}} pages </h4>
        <h4> Genre: {{book.genre}} </h4>
        <p> ISBN: {{book.id}} </p>
      </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'WishList',
  props: {
    books: Array
  },
  methods:  {
    removeFromList: function(book) {
      for (let index in this.$root.$data.WishList){
        if(this.$root.$data.WishList[index].id == book.id){
          this.$root.$data.WishList.splice(index, 1);
        } 
      }
    },
  },
};
</script>
<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
  margin: 5%;
}

.product img {
  border: 1px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #000;
  color: white;
  padding: 10px 30px;
  width: 200px;
  margin: 3%;
  height: 700px;
}

.info p {
  margin: 0px;
  font-size: 10px;
  padding: 5%;
}
.price {
  padding: 2%;
}

button {
  height: 50px;
  background: white;
  color: black;
  border: none;
  padding: 2%;
}

.auto {
  margin-left: auto;
}
</style>

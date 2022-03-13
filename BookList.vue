<template>
  <div class="wrapper">
    <div class="books">
      <div class="book" v-for="book in this.$root.$data.books.default" :key="book.id">
        <img :src=book.image>
        <div class="container">
          <h1><b>{{book.title}}</b></h1>
          <h3> Written By: {{book.author}}</h3>
          <h4> {{book.pages}} pages </h4>
          <h4> Genre: {{book.genre}} </h4>
          <p> ISBN: {{book.id}} </p>
          <button v-on:click="addToList(book)">Add to WishList</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false,
  }),
  name: 'WishList',
  props: {
    WishList: Array
  },
  mounted() {
    console.log(this.$root.$data.WishList.default);
},
  methods:  {
    addToList: function(book) {
      let isFound = false;
      for (let index in this.$root.$data.WishList){
        if(this.$root.$data.WishList[index].id == book.id){
          isFound = true;
          return;
        }
      }   
      if(!isFound){
        this.$root.$data.WishList.push(book);
        console.log(this.$root.$data.WishList); 
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

.books {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.book {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}
button {
  height: 50px;
  background: #000;
  color: mediumvioletred;
  border: none;
}

.auto {
  margin-left: auto;
}
.book {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

.book:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px 16px;
}
.button {
  background-color: black;
}

.blue {
  background-color: blue;
}
</style>

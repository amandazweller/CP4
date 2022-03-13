<template>
<div>
  <div class="wrapper">
  some text
  </div>
  <BookList/>
  some text
</div>
</template>

<script lang="ts">
import BookList from "../components/BookList.vue"
export default {
  name: 'Home-view',
  components: {
    BookList
  },
 }
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>

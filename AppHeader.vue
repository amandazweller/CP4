<template>
  <header>
    <div class="left">
      <img alt="Book logo" src="../assets/book.png" height="50">
      <p>Book Gallery</p>
    </div>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/WishList">WishList</router-link></li>
        <li><router-link to="/Blog">Blog</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
  header {
    display: flex;
    border-bottom: 1px solid #ccc;
    padding: .5rem 1rem;
    
    .left {
      display: inline-flex;
      margin-top: 2rem;
    }

    p {
      margin-left: 1rem;
    }
  }

  nav {
    margin-left: auto;

    ul {
      list-style: none;
    }

    ul li {
      display: inline-flex;
      margin-left: 1rem;
    }
  }
</style>

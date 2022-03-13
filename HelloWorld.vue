<template>
<h3>Add a Book Review</h3>
	<form v-on:submit.prevent="addReview">
    <div><input class="name" v-model="addedName" placeholder="Name"></div>
    <div><input class="title" v-model="addedTitle" placeholder="Book Title"></div>
    <textarea class="text" v-model="addedComment"></textarea>
    <br><br>
    <button type="submit">Submit Review</button>
	</form>
	<h3>Reviews</h3>
  <div v-for="comment in comments" :key="comment.author">
    <hr>
    <p>{{comment.text}}</p>
    <p><i>Written By: {{comment.author}}</i></p>
    <p><i>About: {{comment.title}}</i></p>
  </div>
</template>

<script>
export default {
  name: 'Blog-Blog',
  data() {
    return {addedName: '',
    addedTitle: '',
    addedComment: '',
    comments: [],}
  },
  methods: {
    addReview() {
  
      this.comments.push({
        author: this.addedName,
        title: this.addedTitle,
        text: this.addedComment,
      });
      console.log(this.comments);
      this.addedName = '';
      this.addedComment = '';
      this.addedTitle = '';
    },
  },
}
</script>

<style>
body {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    padding: 20px 100px 0px 100px;
    background: #f3f3f3;
}
button {
    font-family: 'Montserrat', sans-serif;
    font-size: 1em;
}

textarea {
    width: 100%;
    max-width: 500px;
    height: 100px;
}
.name {
  align: left;

}
.title {
  align: left;
  margin: 1%;
}
.text{
  align: center;
  margin: auto;
  width: 100%;
}
</style>
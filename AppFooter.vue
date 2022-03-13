<template>
<div class="footer-basic">
  <footer>
    <ul class="list-inline">
       <li class="list-inline-item"><a href="#">Home</a></li>
       <li class="list-inline-item"><a href="https://github.com/BYUCS260/grocery-store-amandazweller">Github</a></li>
       <li class="list-inline-item"><a href="#">About</a></li>
       <li class="list-inline-item"><a href="#">Terms</a></li>
       <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
    </ul>
   <p class="copyright">Amanda Weller © {{ year }}</p>
  </footer>
</div>
</template>

...
<script>
import { computed } from 'vue'

export default {
  setup () {
    const year = computed(() => new Date().getFullYear())
    return { year }
  }
}
</script>

<style>
.footer-basic {
  padding:40px 0;
  background-color:black;
  color:white;
}

.footer-basic ul {
  padding:0;
  list-style:none;
  text-align:center;
  font-size:18px;
  line-height:1.6;
  margin-bottom:0;
}

.footer-basic li {
  padding:0 10px;
	display: inline;
}

.footer-basic ul a {
  color:inherit;
  text-decoration:none;
  opacity:0.8;
}

.footer-basic ul a:hover {
  opacity:1;
}

.footer-basic .copyright {
  margin-top:15px;
  text-align:center;
  font-size:13px;
  color:#aaa;
  margin-bottom:0;
}
</style>



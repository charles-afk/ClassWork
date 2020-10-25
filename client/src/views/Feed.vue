<template>
  <div class="page" style="padding-top: 60px;">
      <h2 class="title is-2">Feed Page</h2>

        <div class="columns">
          
          <div class="column is-two-thirds">
              <Post v-for=" (x, i) in posts " 
                :key="i"
                :i="i"
                :post="x"/>
          </div> 
          <div class="column is-one-thirds">
              <Sidebar />
          </div> 
        </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar"
import Post from "@/components/Post"
import { posts } from "@/models/feed"
import session from "@/models/session";

export default {
    data(){
        return {
            posts
        }
    },
    components: {
        Sidebar, Post
    },
    methods: {
        error(){
            session.addNotification('Something went wrong.', 'danger')
        }
    }
}
</script>

<style>
  .card {
    margin-bottom: 15px;
  }
</style>>
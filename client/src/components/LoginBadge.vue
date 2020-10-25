<template>
  <div id="LoginBadge">

    <div class="media" v-if="session.user">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="has-text-weight-bold">{{session.user.name}}</p>
        <p class="is-size-7">@{{session.user.handle}}</p>
      </div>
    </div>
    



  <div class="buttons" v-else>
    <router-link to="/signup" class="button">
      <strong>Sign up</strong>
    </router-link>
    <router-link to="/login" class="button is-light">
      Log in
    </router-link>
  </div>
  </div>
</template>

<script>
import session from "@/models/session"

export default {
  data: ()=> ({
      session
  })
}
</script>

<style>
  .media .image img {
      width: auto;
  }
</style>
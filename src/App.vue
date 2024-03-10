<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <RouterLink to="/" class="nav-link">Home</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/about" class="nav-link">About</RouterLink>
              </li>
              <li class="nav-item">
                <router-link
                  :to="{
                    name: 'newpage'
                  }"
                  class="nav-link"
                  >NewPage</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <div class="container"><RouterView /></div>
</template>

<style lang="scss"></style>

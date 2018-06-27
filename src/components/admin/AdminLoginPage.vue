<template>
  <main>
    <h1>Admin Login<small>I beg you, don't hack me...</small></h1>
    <form @submit.prevent="$emit('login', password)">
      <input type="password" placeholder="your private secret" v-model="password">
      <input type="submit" value="Submit">
    </form>
  </main>
</template>

<style scoped>
input {
  margin-bottom: 1rem;
}
</style>

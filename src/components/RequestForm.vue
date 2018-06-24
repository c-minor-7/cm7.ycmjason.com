<template>
  <form @submit.prevent="">
    <input type="text" placeholder="Your name">
    <input type="text" placeholder="Your email">
    <input type="text" placeholder="Place a link to the song (spotify, youtube...)">

    <input type="submit" value="Submit">
  </form>
</template>

<script>

</script>

<style lang="scss" scoped>
input[type='text'] {
  margin-bottom: 1rem;
  width: 100%;
}
</style>

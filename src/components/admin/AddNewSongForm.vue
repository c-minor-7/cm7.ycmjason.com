<template>
  <form>
    <input v-model="name" placeholder="Song Name"/>
    <input v-model="artist" placeholder="Artist"/>
    <input v-model="youtubeLink" placeholder="Youtube Link"/>
    <input v-model="originalKey" placeholder="Original Key"/>
    <textarea v-model="cm7Src" placeholder="Cm7 Source"/>
  </form>
</template>

<script>
export default {
  data: () => ({
    name: '',
    artist: '',
    youtubeLink: '',
    originalKey: '',
    cm7Src: '',
  }),
};
</script>

<style lang="scss" scoped>
input, textarea {
  margin-bottom: 1rem;
}
</style>

<template>
  <cm7-form :fields="fields"/>
</template>

<script>
export default {
  data: () => ({
    fields: {
      name: {
        label: 'Song name',
      },
      artist: {
        label: 'Artist name',
      },
      youtubeLink: {
        label: 'Youtube link',
        validator: 'isLink',
      },
      originalKey: {
        label: 'Song key',
        placeholder: 'Original song key',
        validator: (v) => /^([ACDFG]#|[ABDEG]b|[A-G])$/.test(v),
      },
      cm7Src: {
        label: 'Cm7 Source',
        type: 'textarea',
      },
    },
  }),
};
</script>

<style lang="scss" scoped>
</style>

<template>
  <form @submit.prevent="submit">
    <input
      v-model="fields.name"
      type="text"
      placeholder="Your name">
    <span class="errorMessage" v-if="errors.name">{{ errors.name }}</span>

    <input
      v-model="fields.email"
      type="text"
      placeholder="Your email">
    <span class="errorMessage" v-if="errors.email">{{ errors.email }}</span>

    <input
      v-model="fields.songLink"
      type="text"
      placeholder="Place a link to the song (youtube, spotify...)">
    <span class="errorMessage" v-if="errors.songLink">{{ errors.songLink }}</span>

    <textarea
      v-model="fields.content"
      placeholder="Say &ldquo;hi&rdquo; to Jason!"></textarea>
    <span class="errorMessage" v-if="errors.content">{{ errors.content }}</span>

    <input type="submit" value="Submit">
  </form>
</template>

<script>
const isEmail = s => /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/.test(s);
const isLink = s => {
  try {
    new URL(s);
    return true;
  } catch (e) {
    return false;
  }
};

export default {
  data: () => ({
    fields: {
      name: '',
      email: '',
      songLink: '',
      content: '',
    },
    errors: {},
  }),

  methods: {
    checkForm() {
      const errors = {};

      if (['name', 'email', 'songLink'].every(f => !!this.fields[f]) &&
          isEmail(this.fields.email)) {
        return true;
      }

      if (!isEmail(this.fields.email)) {
        errors.email = 'Not a valid email.';
      }

      if (!isLink(this.fields.songLink)) {
        errors.songLink = 'Not a valid link.';
      }

      if (!this.fields.name) errors.name = 'Name is required.';
      if (!this.fields.email) errors.email = 'Email is required.';
      if (!this.fields.songLink) errors.songLink = 'Song link is required.';

      this.errors = errors;

      return false;
    },

    submit() {
      if (!this.checkForm()) return;
      this.$emit('submit', {...this.fields});
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/config.scss';

input, textarea {
  margin-top: 1rem;
  width: 100%;
}

.errorMessage {
  color: $color-danger;
}

textarea {
  height: 5rem;
}
</style>

<template>
  <div class="hello">
    <h1>{{ msgDesc }}</h1>
    <h2>you are so stupid</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: false,
      default: '123',
    }
  },
  computed: {
    msgDesc() {
      console.log('this', this);
      return this.msg + 'ssssss';
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./styles.css" />

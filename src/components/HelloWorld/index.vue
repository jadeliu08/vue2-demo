<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
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
      console.log('HelloWorld computed');
      return this.msg + 'ssssss';
    },
  },
  beforeCreate() {
    this.msgDesc = 'msg beforeCreate';
    console.log('HelloWorld beforeCreate');
  },
  created() {
    console.log('HelloWorld created');
  },
  mounted() {
    console.log('HelloWorld mounted');
  },
  activated() {
    console.log('HelloWorld activated');
  },
  // watch: {
  //   a: {
  //     handler() {},
  //     deep: true,
  //     immediate: true,
  //   },
  // },
  methods: {
    add() {
      console.log('method add');
    },
  },
  render(h) {
    console.log('render', h);
    return h('div', {}, '11111');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./styles.css"/>

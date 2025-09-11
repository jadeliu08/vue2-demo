<template>
  <div>
    <div class="hello" @click="handleClick">
      <h1>{{ msg }}</h1>
      <h2>you are so stupid</h2>
    </div>
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
  data() {
    return {
      name: 'jade',
      foot: {
        touched: ''
      }
    };
  },
  computed: {
    msgDesc() {
      console.log('HelloWorld computed');
      return this.msg;
    },
  },
  beforeCreate() {
    // this.msgDesc = 'msg beforeCreate';
    console.log('HelloWorld beforeCreate');
  },
  created() {
    console.log('HelloWorld created');
  },
  mounted() {
    // console.log('HelloWorld mounted', this.$options.render.toString());
    console.log('HelloWorld mounted', this);
    // this.touch();
  },
  activated() {
    console.log('HelloWorld activated');
  },
  watch: {
    name() {

    },
    foot: {
      handler(newVal, oldVal) {
        console.log('watch foot handler', newVal, oldVal);
      },
      lazy: false,
      deep: true,
    }
  },
  methods: {
    touch() {
      this.foot.touched = '疼'
    },
    handleClick() {
      console.log('HelloWorld handleClick');
    },
  },
  // render(h) {
  //   console.log('render', h);
  //   return h('div', {}, '11111');
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./styles.css"/>

<template>
  <div class="hello" @click="handleClick">
    <h1>{{ msg }}</h1>
    <h2>you are so stupid</h2>
    <h3>My name is {{ name }}</h3>
    <h3>{{count}}</h3>
    <input type="text" v-model="name">
    <Header v-model="headers"/>
    <h4>{{headers}}</h4>
    <CollapsePanel v-model="isCollapsed">
      <p>这是折叠内容</p>
    </CollapsePanel>
    <h4>{{isCollapsed}}</h4>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import CollapsePanel from './components/CollapsePanel.vue';
export default {
  components: {
    CollapsePanel,
    Header,
  },
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
      count: 1,
      name: 'jade',
      foot: {
        touched: ''
      },
      headers: 'headers',
      isCollapsed: false,
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
    },
  },
  methods: {
    touch() {
      this.foot.touched = '疼'
    },
    handleClick() {
      console.log('HelloWorld handleClick');
      // this.name = Math.random().toString(36).slice(2, 9);
      this.count += 1;
      this.count += 1;
      this.count += 1;
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./styles.css"/>

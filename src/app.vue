<template>
<div class="message">Value is: {{ counterValue }}</div>
<button @click='increment'>Increment +1</button>
</template>

<script>
import { incrementCounter } from './actions'
import { getCount } from './getters'

export default {
  vuex: {
    actions: {
      increment: incrementCounter
    },
    getters: {
      counterValue: getCount
    }
  }
}
</script>

<style>
</style>
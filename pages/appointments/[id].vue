<template>
  <h1>{{ id }}</h1>
</template>

<script>
export default {
  async asyncData({ params }) {
    const id = params.id // When calling /abc the slug will be "abc"
    return { id }
  }
}
</script>
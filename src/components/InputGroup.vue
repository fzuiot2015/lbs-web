<template>
  <div class="input-group mb-3 col">
    <div class="input-group-prepend">
      <span class="input-group-text bg-secondary text-white">{{input-key}}}</span>
    </div>
    <input type="text" title="username" class="form-control">
  </div>
</template>

<script>
  export default {
    name: "InputGroup",
    props: {
      'input-key': [String],
      'input-value': [String]
    }
  }
</script>

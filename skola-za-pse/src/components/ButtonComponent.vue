<!-- barem jedna komponenta mora emitirati barem jedan event -->
<template>
    <!-- methods -->
  <button @click="emitEvent">{{ buttonText }}</button>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: true,
    },
    eventName: {
      type: String,
      required: true,
    },
  },
//   methods
  methods: {
    emitEvent() {
      // barem jedna komponenta mora emitirati barem jedan event 
      this.$emit(this.eventName);
    },
  },
};
</script>

<style scoped>
button {
  background-color: #df9d63;
  color: #ffffff;
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  width: 100px;
  height: 50px;
  font-size: 19px;
}

button:hover {
  background-color: #bc7533;
}
</style>

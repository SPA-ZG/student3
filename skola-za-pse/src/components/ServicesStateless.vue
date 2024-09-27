<!-- komponenta bez stanja, koristiti properties -->
<template>
  <div class="services-container">
    <div v-for="service in services" :key="service.id" class="service">
      <h3>{{ service.name }}</h3>
      <p>{{ service.description }}</p>
      <div class="service-info">
        <span>{{ service.hours }} h</span> | <span>{{ service.price }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    services: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.services-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.service {
  width: 300px;
  height: 300px;
  margin: 10px;
  padding: 20px;
  border: 1px solid #6b492e;
  border-radius: 10px;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.service-info {
  font-size: 20px;
  margin-top: auto;
  font-weight: 600;
}

.service:hover {
  background-color: #e2e2e2;
}

.service-info span {
  margin: 0 5px;
}


p {
  color: #bc7533;
}

h3 {
  font-weight: bold;
  margin-bottom: 10px;
}

@media (max-width: 600px) {
  .service {
    width: calc(50% - 20px);
  }
}
</style>

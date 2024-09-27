<template>
  <div class="home-div">
    <img class="bg-image" src="/images/dogsHome.jpg" alt="Dogs" />
    <div class="text-div">
      <!-- interpolation/one-way binding -->
      <h1>{{ pageTitle }}</h1>
      <h3>{{ welcomeMessage }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: "Dobro došli na početnu stranicu Kluba za obuku pasa VAU!",
      welcomeMessage:
        "Proučite naše usluge i tečajeve koji će Vam pomoći odgojiti, školovati i bolje razumjeti Vašeg najboljeg četveronožnog prijatelja.",
    };
  },
};
</script>

<!-- barem jedan scoped style -->
<style scoped>
.home-div {
  position: relative;
  text-align: center;
  color: #bc7533;
  position: relative;
  text-align: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.bg-image {
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: -1;
  background-size: contain, cover;
  left: 0;
  top: 0;
}
.text-div {
  z-index: 1;
  text-align: center;
  max-width: 50%;
  margin: 0 auto;
  word-wrap: break-word;
}

h1 {
  font-size: 2.1rem;
  margin-bottom: 40px;
  margin-top: -30px;
}

h3 {
  font-size: 1.2rem;
  margin: 0;
}
</style>

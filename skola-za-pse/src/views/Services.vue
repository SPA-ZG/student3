<template>
  <div class="home-div">
    <h1>Naše usluge</h1>
    <services :services="servicesData" />
  </div>
</template>

<script>
import Services from '@/components/ServicesStateless.vue';

export default {
  components: {
    Services,
  },
  data() {
    return {
      servicesData: [
      {
        id: 1,
        name: 'Individualni trening',
        description: 'Jedan-na-jedan trening prilagođen specifičnim potrebama Vašeg psa.',
        hours: 5,
        price: '50 €',
      },
      {
        id: 2,
        name: 'Hotel za pse',
        description: 'Kada niste u mogućnosti brinuti se za Vašeg psa, u našem hotelu osjećat će se kao kod kuće.',
        hours: 24,
        price: '10 €',
      },
      {
        id: 3,
        name: 'Savjetovanje',
        description: 'Razmišljate o kupovini psa, novi ste ili iskusni vlasnik? U kojim god ste cipelama, naši stručnjaci spremni su na sva Vaša pitanja.',
        hours: 1,
        price: '5 €',
      },
      ],
    };
  },
};
</script>

<style scoped>
.home-div {
  color: #6b492e;
  background-color: #efefef;
  width: 100vw;
  height: 95vh;
  overflow-y: scroll;
  padding-bottom: 50px;
}

h1 {
  text-align: center;
  padding: 15px;
  font-weight: 500;
}
</style>

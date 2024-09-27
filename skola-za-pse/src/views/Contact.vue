<template>
  <div class="contact-container">
    <!-- methods -->
    <form @submit.prevent="sendQuery" class="query-form">
      <label for="email">Vaš e-mail:</label>
      <input type="email" id="email" v-model="userEmail" required>

      <label for="queryText">Vaš upit:</label>
      <textarea id="queryText" v-model="queryForm.queryText" required></textarea>

      <ButtonComponent :buttonText="'Pošalji'" :eventName="'send-query'" />
    </form>

    <div v-if="showThanks" class="thanks-message">
      <p>Zahvaljujemo na upitu!</p>
    </div>

    <p class="phone">Broj telefona: 098 123 1231</p>
  </div>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent.vue';
import { useMyStore as useStore } from '@/stores/store'

export default {
  components: {
    ButtonComponent,
  },
  data() {
    return {
      queryForm: {
        email: '',
        queryText: '',
      },
      showThanks: false,
    };
  },
  // methods
  methods: {
    sendQuery() {
      this.queryForm.email = '';
      this.queryForm.queryText = '';

      this.showThanks = true;

      setTimeout(() => {
        this.showThanks = false;
      }, 5000);
    },
  },
  updated() {
    console.log('aaa')
  },
  beforeRouteLeave() {
    console.log('aaaaaa')
  },
  // store (Pinia)
  computed: {
    userEmail: {
      get() {
        console.log('gettt')
        return useStore().userEmail;
      }, 
      set(value) {
        console.log('settt')
        useStore().changeMail(value);
      }
    }
  }
};
</script>

<!-- barem jedan scoped style -->
<style scoped>
.contact-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #BC7533;
  font-size: 20px;;
  background-color: #efefef;
  width: 100vw;
  height: 100vh;
}

.query-form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
}

label {
  margin-bottom: 5px;
}

input,
textarea {
  margin-bottom: 15px;
  min-width: 25vw;
  max-width: 80vw;
  max-height: 200px;
}

button {
  background-color: #DF9D63;
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
  background-color: #BC7533;
}

.thanks-message {
  margin-top: 20px;
  padding: 10px;
  background-color: #BC7533;
  color: #ffffff;
  text-align: center;
}

.phone {
  margin-top: 20px;
}
</style>

import { createPinia, defineStore } from 'pinia';

const pinia = createPinia();

// store (Pinia)
export const useMyStore = defineStore('myStore', {
  state: () => ({
    userEmail: ''
  }),
  actions: {
    changeMail(newMail) {
      this.userEmail = newMail;
    },
  },
});

export { pinia };

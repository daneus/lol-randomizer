import { register } from 'register-service-worker';

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      return;
    },
    registered() {
      return;
    },
    cached() {
      return;
    },
    updatefound() {
      return;
    },
    updated() {
      return;
    },
    offline() {
      return;
    },
    error() {
      return;
    },
  });
}

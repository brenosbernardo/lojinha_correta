<template>
    <div class="signup">
      <h2>Criar Conta</h2>
      <form @submit.prevent="signup">
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="email" id="email" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" id="password" required>
        </div>
        <button type="submit">Criar Conta</button>
      </form>
      <p>Já tem uma conta? <router-link to="/login">Faça login</router-link></p>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const email = ref('');
      const password = ref('');
  
      const signup = () => {
        // Logica para criar conta
        console.log('Email:', email.value);
        console.log('Password:', password.value);
      };
  
      return {
        email,
        password,
        signup,
      };
    },
  };
  </script>
  <style scoped>
  .signup {
    max-width: 400px;
    margin: 0 auto;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    text-align: center;
    margin-bottom: 1rem;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
  }
  
  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    width: 100%;
    padding: 0.5rem;
    background-color: #ffc107;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #ffc107;
  }
  
  p {
    text-align: center;
    margin-top: 1rem;
  }
  </style>
  

  
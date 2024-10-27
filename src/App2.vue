
<template>

  <h1>{{ name }}</h1>
  <p v-if="state === 'active'">you are active</p>
  <p v-else-if="state === 'pending'">you are pending</p>
  <p v-else>you are inactive</p>
  
  <form @submit.prevent="addTask">
    <label for="newTask">newTask:</label>
    <input type="text" name="newTask" id="newTask" v-model="newtask">
    <button type="submit">submit</button>
  </form>
  
  
  
  <ul>
    <li v-for="(task,i) in tasks" :key="task">
      <span>{{ task }}</span>
      <button @click="deleteTask(i)">delete</button>
    
    </li>
  </ul>
  
  <!-- <a v-bind:href="link">go to google</a> -->
  <a :href="link">go to google</a>
  <br>
  <!-- <button v-on:click="changestate">click me</button> -->
  <button @click="changestate">click me</button>
  </template>
  
  
  
  
  
  <script setup>
  import { ref,onMounted } from 'vue';
  
  
        const name = ref('Forain');
        const state = ref('active');
        const tasks = ref(['task1', 'task2', 'task3']);
        const newtask = ref('');
  
  
  
        const changestate = ()=>{
          if(state.value === 'active'){
            state.value = 'pending';
          }else if(state.value === 'pending'){
            state.value = 'inactive';
          }else{
            state.value = 'active';
          }
        }
  
  
        const addTask = ()=>{
            if(newtask.value.trim()!==''){
              tasks.value.push(newtask.value);
              newtask.value = '';
            }
        };
  
        const deleteTask = (index)=>{
          tasks.value.splice(index,1);
        };
  
        onMounted(async ()=>{
          try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();
            tasks.value = data.map((task)=>task.title); 
          } catch (error) {
              console.log(error);
          }
        })
  
  </script>
  
  <!-- <script>
  import { ref } from 'vue';
  
    export default{
      setup(){
        const name = ref('Forain');
        const state = ref('active');
        const tasks = ref(['task1', 'task2', 'task3']);
  
  
        const changestate = ()=>{
          if(state.value === 'active'){
            state.value = 'pending';
          }else if(state.value === 'pending'){
            state.value = 'inactive';
          }else{
            state.value = 'active';
          }
        }
  
        return{
          name,
          state,
          tasks,
          changestate,
        }
      }
    }
  </script> -->


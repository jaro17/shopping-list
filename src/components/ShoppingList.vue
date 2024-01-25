<script setup>
import {ref} from "vue";

let items = ref([]);
let newItem = ref("");

const generateRandomKey = () => {
  return Math.random();
}

const addItem = () => {
  console.log('addItem called');
  const trimmedItem = newItem.value.trim();
  if (trimmedItem !== '') {
    items.value.push(trimmedItem);
    newItem.value = '';
  }
};

const removeItem = (item) => {
  const index = items.value.indexOf(item);
  if (index > -1) {
    items.value.splice(index, 1);
  }
};

const deleteAllItems = () => {
  items.value = [];
}
</script>

<template>
  <div class="container">
    <w-form class="form">
      <w-input v-model="newItem" @keyup.enter="addItem()" label="Press enter to add new item." ></w-input>
      <w-button type="submit"   class="ml7 add-button text-upper" round>Add item</w-button>
    </w-form>

    <div class="list-container">
      <ul class="shopping-list mt12">
        <li v-for="item in items" :key="generateRandomKey()" class="d-flex align-center justify-space-between list">
          <div>{{ item }}</div>
          <w-button @click="removeItem(item)" class="ma1 text-upper remove-button" round color="error-dark1" outline lg>remove</w-button>
        </li>

      </ul>

      <w-button  v-if="items.length > 0" @click="deleteAllItems()" class="mt8 pa4 delete-button text-upper" round bg-color="error-dark1" color="white" lg>Delete all</w-button>

    </div>
  </div>

</template>

<style scoped>
.container {
  width: 70%;
  margin: 2rem auto;
}

.form {
  width: 40%;
  margin: 3rem auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.add-button {
  padding: 1rem;
  margin-left: 2rem;
}

.list-container {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.shopping-list {
  margin: 0 auto;
  width: 40%;
}
</style>
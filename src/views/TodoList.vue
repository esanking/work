<template>
  <div class="TodoList MtMargin">
    <div class="w-100 d-flex align-items-center flex-column p-5 ">
      <h3 class="text-success">Add Todo</h3>
      <div class="d-flex align-items-center">
        <input type="text" @keyup.enter.stop="AddTodo" class="AddInp" v-model="AddText" />
        <button type="button" class="btn-sm btn-success AddBtn" @click.stop="AddTodo">
          Add
        </button>
      </div>
    </div>
    <div class="w-100 d-flex align-items-center flex-column py-2">
      <h3 class="text-success">My TodoList</h3>
      <ul class="w-75 text-success">
        <li v-for="(item, key) in todo" :key="key" class="mt-1">
          <div class="d-flex justify-content-between align-items-center
            border border-success border-top-0 px-2">
            <span>{{ key + 1 }}. {{ item.TodoText }}</span>
            <i class="fas fa-times DelIcon text-danger" @click="RemoteTodo(item.Id)"></i>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <Message v-show="active" :errText="errText" @active="active=!active"></Message>
</template>
<script>
  import { ref, reactive, getCurrentInstance, onMounted } from 'vue';
  import { defineComponent } from "vue";
  import Message from '../components/Message.vue';
  export default defineComponent({
    components: { Message },
    setup() {
      let todo = ref([]);
      let AddText = ref('');
      let active = ref(false);
      let errText = ref('請輸入文字，請勿空白');
      const { proxy } = getCurrentInstance();

      onMounted(() => {
        FindAllTodo();
      })

      function AddTodo() {
        // const api = 'https://obscure-cove-49403.herokuapp.com/add';
        const api = 'https://obscure-cove-49403.herokuapp.com/TodoList/addTodo';
        // const api = 'http://localhost:3000/add';
        // const api = 'http://localhost:3000/TodoList/addTodo';
        if (active.value) return;
        if (AddText.value.trim().length !== 0) {
          proxy.$http.post(api, { AddText: AddText.value }).then(() => {
            AddText.value = '';
            FindAllTodo();
          });
        } else {
          AddText.value = '';
          active.value = true;
          errText.value = '請輸入文字，請勿空白';
        }
      }

      function FindAllTodo() {
        // const api = 'https://obscure-cove-49403.herokuapp.com/data';
        const api = 'https://obscure-cove-49403.herokuapp.com/TodoList/Todos';
        // const api = 'http://localhost:3000/data';
        // const api = 'http://localhost:3000/TodoList/Todos';
        proxy.$http.get(api).then((response) => {
          todo.value = response.data;
        });
      }

      function RemoteTodo(id) {
        // const api = `https://obscure-cove-49403.herokuapp.com/data/${id}`;
        const api = `https://obscure-cove-49403.herokuapp.com/TodoList/Todos/${id}`;
        // const api = `http://localhost:3000/data/${id}`;
        // const api = `http://localhost:3000/TodoList/Todos/${id}`;
        proxy.$http.delete(api).then(() => {
          FindAllTodo();
        });
      }

      return {
        todo,
        AddText,
        active,
        errText,
        AddTodo,
        FindAllTodo,
        RemoteTodo
      }
    }
  });
</script>
<style lang="scss">
  .AddInp {
    font-size: 18px;
    border-bottom-right-radius: 0%;
    border-top-right-radius: 0%;
  }

  .AddBtn {
    border-bottom-left-radius: 0%;
    border-top-left-radius: 0%;
  }

  .DelIcon {
    font-size: 26px;
  }

  .DelIcon:hover {
    cursor: pointer;
  }
</style>
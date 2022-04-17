<template>
  <div class="LoginBg">
    <div class="Login">
      <form class="Form p-3 text-white gologin col-md-5 col-sm-8 col-12">
        <h3>登入系統</h3>
        <label for="account" class="form-label">帳號</label>
        <input type="text" class="form-control" v-model="account.name" @keyup.enter="Login" name="name"
          placeholder="UserName" />
        <span class="text-success">請填寫帳號欄位</span>
        <label for="password" class="form-label">密碼</label>
        <input type="password" class="form-control" v-model="account.password" @keyup.enter="Login" name="password"
          placeholder="PassWord" />
        <span class="text-success">請填寫密碼欄位</span>
        <div class="d-flex justify-content-around w-100">
          <button type="button" class="btn btn-outline-danger text-white" @click="ClickChangeFrom">
            去註冊
          </button>
          <button type="button" class="btn btn-outline-primary text-white" @click="Login">
            登入
          </button>
        </div>
      </form>
      <form class="Form p-3 text-white gosign sign col-md-5 col-sm-8 col-12">
        <h3>註冊系統</h3>
        <label for="account" class="form-label">帳號</label>
        <input type="text" class="form-control" v-model="account.name" @keyup.enter="SignUp" name="name"
          placeholder="UserName" />
        <span class="text-success">請填寫帳號欄位</span>
        <label for="password" class="form-label">密碼</label>
        <input type="password" class="form-control" v-model="account.password" @keyup.enter="SignUp" name="password"
          placeholder="PassWord" />
        <span class="text-success">請填寫密碼欄位</span>
        <div class="d-flex justify-content-around w-100">
          <button type="button" class="btn btn-outline-danger text-white" @click="ClickChangeFrom">
            去登入
          </button>
          <button type="button" class="btn btn-outline-primary text-white" @click="SignUp">
            註冊
          </button>
        </div>
      </form>
    </div>
  </div>
  <Message v-show="active" :errText="errText" @active="active=!active"></Message>
</template>
<script>
  import { ref, reactive, onMounted, getCurrentInstance } from 'vue';
  import Message from '../components/Message.vue';
  import { defineComponent } from "vue";
  import { useRouter } from "vue-router";
  export default defineComponent({
    components: { Message },
    setup() {
      const router = useRouter();
      const { proxy } = getCurrentInstance();
      let account = reactive({ name: '', password: '' });
      let ChangeFrom = ref(true);
      let active = ref(false);
      let errText = ref('');
      function ClickChangeFrom() {
        if (ChangeFrom.value) {
          ChangeFrom.value = !ChangeFrom.value;
          document.querySelector(".gosign").style.transform = "rotateY(0deg)";
          document.querySelector(".gologin").style.transform = "rotateY(180deg)";
        } else {
          ChangeFrom.value = !ChangeFrom.value;
          document.querySelector(".gosign").style.transform = "rotateY(180deg)";
          document.querySelector(".gologin").style.transform = "rotateY(0deg)";
        }
      }
      function Login() {
        if (active.value) return;
        const regex = new RegExp(/^(?=.*\d)(?=.*[a-zA-Z]).{5,12}$/);
        if (!regex.test(account.name) || !regex.test(account.password)) {
          active.value = true;
          errText.value = '帳號、密碼需為英文大小寫和數字組成 5~12 字';
          return;
        }
        const api = 'https://obscure-cove-49403.herokuapp.com/Login/Login';
        // const api = 'http://localhost:3000/Login/Login';
        proxy.$axios.post(api, account)
          .then((res) => {
            if (!res.data.Status) {
              active.value = true;
              errText.value = res.data.Message;
              return;
            }
            RouterClock();
          })
          .catch((req) => {
            active.value = true;
            errText.value = req.response.data.Message;
            account.password = '';
          });
      }
      function RouterClock() {
        router.push(`/ClockIn/${account.name}`);
      }
      function SignUp() {
        if (active.value) return;
        const regex = new RegExp(/^(?=.*\d)(?=.*[a-zA-Z]).{5,12}$/);
        if (!regex.test(account.name) || !regex.test(account.password)) {
          active.value = true;
          errText.value = '帳號、密碼需為英文大小寫和數字組成 5~12 字';
          return;
        }
        const api = 'https://obscure-cove-49403.herokuapp.com/Login/SignUp';
        // const api = 'http://localhost:3000/SignUp';
        // const api = 'http://localhost:3000/Login/SignUp';
        proxy.axios.post(api, account)
          .then((res) => {
            active.value = true;
            errText.value = res.data.Message;
            account.password = '';
          })
          .catch((req) => {
            active.value = true;
            errText.value = req.response.data.Message;
            account.password = '';
          });
      }

      return {
        account,
        ChangeFrom,
        errText,
        active,
        Login,
        ClickChangeFrom,
        RouterClock,
        SignUp
      }
    }

  });
</script>
<style lang="scss">
  .LoginBg {
    height: 100vh;
    background: #5bb6b2;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .Login {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    perspective: 3000px;

    .Form {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      /* width: 450px; */
      border-radius: 10px;
      background-color: #590c45;
      transition: all 1s;
      backface-visibility: hidden;
    }

    .sign {
      transform: rotateY(180deg);
    }

    h1 {
      color: white;
      text-transform: uppercase;
    }

    input[type='text'],
    input[type='password'] {
      width: 200px;
      border: 0;
      background: none;
      margin: 10px auto;
      text-align: center;
      border: 2px solid #21c3dc;
      outline: none;
      color: white;
      border-radius: 10px;
      transition: 0.25s;
    }

    input[type='text']:focus,
    input[type='password']:focus {
      width: 240px;
      border-color: #e5ae38;
    }
  }
</style>
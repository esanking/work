<template>
  <div class="w-100 bg-pink MtMargin">
    <div class="ClockInImg"></div>
    <div class="ClockIn py-3">
      <h1 class="text-info fw-bold">打卡</h1>
      <div class="ClockInForm">
        <div class="FormUser">
          Hello {{ UserName }},
          <br />
          請打卡
        </div>
        <div class="ClockBtn bg-info" @click="GoToWork" v-if="!WorkCheck">
          <h1>上班</h1>
        </div>
        <div class="ClockBtn bg-info" @click="GoOffWork" v-if="WorkCheck">
          <h1>下班</h1>
        </div>
      </div>
    </div>
    <div class="ClockInRecord py-3">
      <h1 class="text-info fw-bold">打卡紀錄</h1>
      <div class="RecordList">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">姓名</th>
              <th scope="col">上班時間</th>
              <th scope="col">下班時間</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, key) in data.InTimeList" :key="key">
              <td>{{ UserName }}</td>
              <td>{{ data.InTimeList[key] }}</td>
              <td>{{ data.OutTimeList[key] }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <Message v-show="active" :errText="errText" @active="active=!active"></Message>
</template>
<script>
  import { ref, reactive, onMounted, getCurrentInstance } from 'vue';
  import { useRoute } from "vue-router";
  import { defineComponent } from "vue";
  import Message from '../components/Message.vue';

  export default defineComponent({
    components: { Message },
    setup() {
      const router = useRoute();
      let UserName = ref('');
      let Time = ref('');
      const { proxy } = getCurrentInstance();
      let data = ref({
        InTimeList: ref([]),
        OutTimeList: [],
        name: UserName,
        id: 0
      });
      let WorkCheck = ref(false);
      let active = ref(false);
      let errText = ref('');
      onMounted(() => {
        UserName.value = router.params.UserName;
        GetRecord();
      })
      async function GoToWork() {
        if(active.value) return;
        GetDate();
        data.value.InTimeList.push(Time.value)
        const api = 'https://obscure-cove-49403.herokuapp.com/CheckIn/CheckIn';
        // const api = 'http://localhost:3000/CheckIn/CheckIn';
        await proxy.$http.post(api, data.value).then((res) => {
          active.value = true;
          console.log(res.data.Message,'res.data.Message')
          errText.value = res.data.Message;
        });
        GetRecord();
      }
      async function GoOffWork() {
        if(active.value) return;
        GetDate();
        data.value.OutTimeList.push(Time.value)
        const api = 'https://obscure-cove-49403.herokuapp.com/CheckIn/CheckIn';
        // const api = 'http://localhost:3000/CheckIn/CheckIn';
        await proxy.$http.post(api, data.value).then((res) => {
          active.value = true;
          errText.value = res.data.Message;
        });
        GetRecord();
      }
      async function GetRecord() {
        const api = 'https://obscure-cove-49403.herokuapp.com/CheckIn/GetCheckInRecord';
        // const api = 'http://localhost:3000/CheckIn/GetCheckInRecord';
        await proxy.$http.get(api,{params:{name:UserName.value}}).then((response) => {
          if(response.data)
            data.value = response.data;
        });
        GetUser();
      }
      function GetDate() {
        Time.value = new Date().toLocaleString();
      }
      function GetUser() {
        if (!data.value.OutTimeList[data.value.InTimeList.length - 1] && data.value.InTimeList.length !== 0) {
          WorkCheck.value = true;
        } else {
          WorkCheck.value = false;
        }
      }
      return {
        data,
        UserName,
        WorkCheck,
        GoToWork,
        GoOffWork,
        GetDate,
        active,
        errText
      }
    }

  });
</script>
<style lang="scss">
  .ClockInImg {
    width: 100%;
    height: 650px;
    background-repeat: no-repeat;
    background-image: url(../assets/img/ClockIn.png);
    background-position: center;
  }

  @media (max-width: 991px) {
    .ClockInImg {
      height: 500px;
      background-size: cover;
    }
  }

  @media (max-width: 767px) {
    .ClockInImg {
      // background-position: top;
      height: 350px;
    }
  }

  @media (max-width: 576px) {
    .ClockInImg {
      height: 250px;
    }
  }

  .ClockIn {
    width: 90%;
    margin: 0 auto;
  }

  .ClockInRecord {
    width: 90%;
    margin: 0 auto;
  }

  .ClockInForm {
    display: flex;
    justify-content: center;

    .FormUser {
      width: 30%;
      text-align: center;
    }

    .ClockBtn {
      width: 100px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      color: #fff;
      cursor: pointer;
    }
  }

  @media (max-width: 576px) {
    .ClockInForm {
      justify-content: space-around;
    }
  }
</style>
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
            <tr v-for="(item, key) in data" :key="key">
              <td>{{ item.UserName }}</td>
              <td>{{ item.GoWorkTime }}</td>
              <td>{{ item.OffWorkTime }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
  import { ref, reactive, onMounted } from 'vue';
  import { useRoute } from "vue-router";
  // import { inject } from 'vue'
  export default {
    setup() {
      const router = useRoute();
      let UserName = ref('');
      let Time = ref('');
      let Record = reactive([]);
      let data = ref([]);
      let WorkCheck = ref(false);
      onMounted(() => {
        UserName.value = router.params.UserName;
        GetData();
        GetUser();
      })
      function GoToWork() {
        GetDate();
        data.value.push({
          UserName: UserName.value,
          GoWorkTime: Time.value,
          OffWorkTime: '',
        });
        const PushRecord = JSON.stringify(data.value);
        localStorage.setItem('Record', PushRecord);
        GetUser();
      }
      function GoOffWork() {
        GetDate();
        data.value.forEach((item, index) => {
          if (item.OffWorkTime === '') {
            data.value[index].OffWorkTime = Time.value;
            const PushRecord = JSON.stringify(data.value);
            localStorage.setItem('Record', PushRecord);
            data.value[index].OffWorkTime = Time.value;
          }
        });
        GetUser();
      }
      function GetData() {
        data.value = JSON.parse(localStorage.getItem('Record')) || [];
        fliterData();
      }
      function fliterData() {
        data.value = data.value.filter((item) => item.UserName === UserName.value);
      }
      function GetDate() {
        Time.value = new Date().toLocaleString();
      }
      function GetUser() {
        if (data.value.length === 0) {
          WorkCheck.value = false;
        } else if (data.value[data.value.length - 1].OffWorkTime === '') {
          WorkCheck.value = true;
        } else {
          WorkCheck.value = false;
        }
      }
      return {
        UserName,
        Time,
        Record,
        data,
        WorkCheck,
        GoToWork,
        GoOffWork
      }
    }

  };
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
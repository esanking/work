<template>
  <div class="w-100 MtMargin">
    <div class="header pt-4">
      <h3 class="w-100 text-center text-success">股票複利試算</h3>
    </div>
    <div class="main w-100 mt-4">
      <div class="outside w-100 d-flex justify-content-center">
        <div class="circle w-75 h-100 border border-success d-flex flex-column" style="font-size: 16px">
          <ul>
            <li class="m-2 d-flex align-items-center justify-content-center">
              <label for="" class="text-success w-25">每月存入</label>
              <input type="number" v-model="formdata.coin" class="coin w-50" />
            </li>
            <li class="m-2 d-flex align-items-center justify-content-center">
              <label for="" class="text-success w-25">每年額外存入</label>
              <input type="number" v-model="formdata.yearCoin" class="coin w-50" />
            </li>
            <li class="m-2 d-flex align-items-center justify-content-center">
              <label for="" class="text-success w-25">預存幾年</label>
              <input type="number" v-model="formdata.year" class="wantY w-50" />
            </li>
            <li class="m-2 d-flex align-items-center justify-content-center">
              <label for="" class="text-success w-25">殖利率</label>
              <input type="number" @keyup.enter="submit" v-model="formdata.rest" aria-label="%" placeholder="%"
                class="rest w-50" />
            </li>
            <li class="w-100 text-center mt-2">
              <div class="btn btn-success submit" @click="submit">submit</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer mt-4">
      <table class="table text-success">
        <thead>
          <tr>
            <th scope="col">年</th>
            <th scope="col">存金額</th>
            <th scope="col">金額加利息</th>
            <th scope="col">單年利息</th>
            <th scope="col">平均每月利息獲利</th>
          </tr>
        </thead>
        <tbody v-html="data" class="td"></tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import { ref, reactive } from 'vue';
  // import { inject } from 'vue'
  export default {
    setup() {
      let formdata = reactive({
        coin: [],
        yearCoin: [],
        year: [],
        rest: []
      }
      );
      let data = ref('');
      function submit() {
        let befint = 0;
        let coinTotal = 0;
        let TotalMoney = 0;
        let avgBefint = 0;
        let total = '';
        for (let i = 1; i <= formdata.year; i += 1) {
          coinTotal += formdata.coin * 12;
          befint = Math.round((formdata.coin * 12 + TotalMoney + formdata.yearCoin) * (formdata.rest / 100));
          TotalMoney = Math.round(formdata.coin * 12 + TotalMoney + befint + formdata.yearCoin);
          avgBefint = Math.round(befint / 12);
          total += `
                <tr>
                    <td>第${i}年</td>
                    <td>${coinTotal.toLocaleString()}</td>
                    <td>${TotalMoney.toLocaleString()}</td>
                    <td>${befint.toLocaleString()}</td>
                    <td>${avgBefint.toLocaleString()}</td>
                </tr>`;
        }
        data.value = total;
      }

      return {
        formdata,
        data,
        submit
      }
    }

  };
</script>
<style lang="scss">
  ul {
    padding: 0;
  }

  li {
    list-style-type: none;
  }
</style>
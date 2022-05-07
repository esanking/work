<template>
  <div class="ToolWeb">
    <div class="BgImg bg-info">
      <div class="Bgtext">
        <h1>
          <p class="BgText1">HELLO I'M</p>
          <p class="BgText2">WY HUANG</p>
        </h1>
      </div>
    </div>
    <div id="PersonalProfile" class="PersonalProfile py-3">
      <h3 class="title text-success border border-success border-top-0 border-start-0 border-end-0 border-2">Personal
        Profile
      </h3>
      <div class="Profile">
        <div class="FilePhotoCss">
          <div class="FilePhoto"></div>
        </div>
        <div class="ProfileText text-white">
          <h3>黃文毅 ( WEN - YI - HUANG )</h3>
          <p>
            大家好，我叫黃文毅，
            <br />
            透過網路資源接觸前端領域已經有1年多的時間了，前端的技術日新月異，
            <br />
            要一直保持樂觀學習，這裡會放置我做的小作品。
          </p>
        </div>
      </div>
    </div>
    <div class="Works pb-4 container">
      <div class="WorksTitle">
        <h3 class="title text-success border border-success border-top-0 border-start-0 border-end-0 border-2">My works
        </h3>
      </div>
      <ul class="my-2 row WorkList">
        <router-link v-for="(item, key) in works" :key="key" :to="{ path: item.link }"
          class="WorkItem col-xl-4 col-md-6 col-sm-12">
          <li>
            <div class="border border-2 worksImg" :style="{
              backgroundImage: `url(${item.img})`,
            }">
              <div class="Overlay">
                <p>{{ item.title }}</p>
              </div>
            </div>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
  import StockImg from '../assets/img/Stock.png';
  import TodoImg from '../assets/img/TodoList.png';
  import LoginImg from '../assets/img/Login.png';
  import ClockInImg from '../assets/img/ClockInHome.png';
  import { reactive } from 'vue';

  export default {
    setup() {
      const works = [
        {
          img: StockImg,
          link: '/CompoundInterest',
          title: '股票複利',
        },
        {
          img: TodoImg,
          link: '/TodoList',
          title: 'TodoList',
        },
        {
          img: LoginImg,
          link: '/Login',
          title: 'Login',
        },
        {
          img: ClockInImg,
          link: '/ClockIn',
          title: 'ClockIn',
        },
      ]
      return {
        works
      }
    }
  };
</script>
<style lang="scss">
  .BgImg {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 50px;
    background-image: linear-gradient(to right top, rgba(176, 192, 215, 0.4), rgb(11 22 39 / 80%)),
      url('../assets/img/Kenting.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    clip-path: polygon(0% 56px, 100% 56px, 100% 85%, 0% 100%);
    width: 100%;
    height: 100vh;

    .Bgtext {
      position: absolute;
      right: 10%;
      top: 30%;
      color: rgb(247, 225, 225);
      text-transform: uppercase;
    }

    .BgText1 {
      font-weight: 500;
      font-size: 1.5rem;
      letter-spacing: 10px;
    }

    .BgText2 {
      font-weight: 500;
      font-size: 3rem;
      letter-spacing: 20px;
      word-spacing: 10px;
    }
  }

  .PersonalProfile {
    display: flex;
    flex-direction: column;
    align-items: center;

    .Profile {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;

      .FilePhotoCss {
        margin: 0 auto;
      }

      .FilePhoto {
        background-image: url(../assets/img/FilePhoto.jpg);
        background-position: center;
        background-size: cover;
        border: 1px solid #000;
        border-radius: 50%;
        width: 270px;
        height: 270px;
      }

      .ProfileText {
        width: 50%;
      }
    }
  }

  @media (max-width: 767px) {
    .PersonalProfile {
      .Profile {
        flex-direction: column;

        .ProfileText {
          margin-top: 10px;
          width: 90%;
        }
      }
    }
  }

  .WorksTitle {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
  }

  ul {
    padding: 0;
  }

  .WorkItem {
    display: flex;
    justify-content: center;
    margin-top: 10px;

    .worksImg {
      width: 300px;
      height: 200px;
      background-size: cover;
      background-position: center;

      .Overlay {
        position: absolute;
        width: 300px;
        height: 200px;
        background: rgba(31, 44, 108, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        transform: scale(0);
        transition: 0.5s;

        p {
          display: inline-block;
          text-align: center;
          font-size: 26px;
          font-weight: 700;
          color: rgb(232, 241, 240);
        }
      }
    }
  }

  @media (max-width: 991px) {
    .WorkItem {
      .worksImg {
        .Overlay {
          max-width: 300px;
          height: 200px;
        }
      }
    }
  }

  @media (max-width: 767px) {
    .WorkItem {
      .worksImg {
        .Overlay {
          width: 300px;
          height: 200px;
        }
      }
    }
  }

  .worksImg:hover .Overlay {
    transform: scale(1);
  }
</style>
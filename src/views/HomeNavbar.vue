<template>
  <div class="wrap">
    <nav class="navbar bg-info">
      <div class="container-fluid">
        <router-link to="/" class="RouterLink"
          ><h1 class="WebIcon">蚊子工具網</h1></router-link
        >
        <router-link to="/" class="RouterLink"
          ><h3 class="WebIcon">首頁</h3></router-link
        >
      </div>
    </nav>
    <div class="Container bg-success">
      <router-view></router-view>
    </div>
    <footer class="w-100 py-5 bg-dark footer">
      <h1 class="WebIcon">蚊子工具網</h1>
      <ul>
        <li>
          <i class="far fa-envelope IconSz"> asd500373@gmail.com</i>
        </li>
        <li>
          <a href="https://github.com/esanking"
            ><i class="fab fa-github IconSz"></i
          ></a>
        </li>
      </ul>
    </footer>
  </div>
</template>
<script>
</script>
<style lang="scss">
.wrap {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.navbar {
  position: fixed;
  width: 100%;
  padding: 0;
  height: 56px;
  z-index: 100;
}
.MtMargin {
  margin-top: 56px;
}
.RouterLink {
  text-decoration: none;
}
.Container {
  height: 100%;
  flex: 1;
}
.WebIcon {
  background-clip: text;
  font-family: cursive, fantasy, "Microsoft JhengHei";
  -webkit-background-clip: text;
  color: #CCFF66;
}
li {
  list-style-type: none;
}
.footer {
  display: flex;
  justify-content: space-evenly;
  color: #CCFF66;
  .IconSz {
    font-size: 24px;
    margin-right: 10px;
    color: #CCFF66;
  }
}
@media (max-width: 767px) {
  .footer {
    flex-direction: column;
    align-items: center;
  }
}
</style>

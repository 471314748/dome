<template>
  <div class="mian">
    <!-- <input type="button"
           value="显示弹窗"
           @click="showToast"> -->

    <!-- <button @click="login">登录</button> -->

    <!-- <button @click="login2">封装的api登录</button> -->
    <div class="dome">
      <div class="box">
        <el-button type="primary"
                   value="显示弹窗"
                   @click="showToast">显示轻提示</el-button>
        <el-button type="primary"
                   @click="login">主要按钮</el-button>
        <el-button type="primary"
                   @click="login2">主要按钮</el-button>
      </div>
    </div>

  </div>
</template>

<script>
import { setLocal, getLocal } from '@/utils/mylocal.js'
import { userInfo } from '@/api/login.js'
export default {
  name: 'home',
  methods: {
    showToast () {
      this.$toast({
        text: '我是轻提示',
        type: 'info',
        duration: 3000
      })
    },
    login () {
      this.$axios({
        url: '/v1_0/authorizations',
        method: 'POST',
        data: {
          mobile: '13611111111',
          code: '246810'
        }
      })
    },
    async login2 () {
      let res = await userInfo({
        mobile: '13611111111',
        code: '246810'
      })
      console.log(res)
      setLocal('token', res.data.token)
      console.log(getLocal('token'))
    }
  }
}
</script>

<style lang="less" scoped>
.mian {
  .dome {
    width: 500px;
    height: 300px;
    border: 1px solid #ccc;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    // 子水平垂直居中
    display: flex;
    justify-content: center;
    align-items: center;
    // text-align: center;
  }
}
</style>

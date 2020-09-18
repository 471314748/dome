<template>
  <div class="dome">
    <input type="button"
           value="显示弹窗"
           @click="showToast">
    <br />
    <button @click="login">登录</button>
    <br />
    <button @click="login2">封装的api登录</button>
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
        text: '我是消息',
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

<style>
</style>
<template>
  <Row class="login">
    <Col span="12" offset="6">
      <Card :bordered="false" class="box-card">
        <p slot="title">后台管理系统</p>
        <Form ref="form" :model="form">
          <FormItem prop="username">
            <Input type="text" v-model="form.username" placeholder="账号">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="form.password" placeholder="密码">
            <Icon type="ios-locked-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem class="login-btn">
            <Button type="primary" @click="logIn(form)">登录</Button>
            <p v-if="msg">
              <Icon type="information-circled"></Icon>{{msg}}
            </p>
          </FormItem>
        </Form>
      </Card>
    </Col>
  </Row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'form',
      'msg'
    ])
  },
  methods: {
    ...mapActions([
      'logIn'
    ])
  }
}
</script>

<style scoped lang='scss'>
.ivu-form{
  padding:  10px 30px;
}
.login {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #324157;
  .box-card {
    width: 420px;
    margin: 0 auto;
    margin-top: 30%;
    border: 1px solid #ccc;
    text-align: center;
    .login-btn {
      text-align: center;
      margin: 0;
      button {
        width: 100%;
        height: 36px;
      }
      p {
        width: 100%;
        color: #ed3f14;
        line-height: 1;
        margin-top: 20px;
        i {
          margin-right: 4px;
        }
      }
    }
  }
}
</style>
<template>
  <el-dialog title="编辑" :visible.sync="visible">
    <el-form :model="accident" :rules="rules" status-icon ref="accidentForm"
             label-position="left" label-width="70px">

      <el-form-item label="时间" prop="time">
        <el-input v-model="accident.time" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="地址" prop="address">
        <el-input v-model="accident.address" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="纬度" porp="lat">
        <el-input v-model="accident.lat" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="经度" prop="lng">
        <el-input v-model="accident.lng" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="当事人" prop="userId">
        <el-input v-model="accident.userId" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="描述" prop="description">
        <el-input v-model="accident.description" auto-complete="off"></el-input>
      </el-form-item>

    </el-form>

    <div slot="footer" class="dialog-footer">
      <el-button :plain="true" @click="save">确定</el-button>
      <el-button :plain="true" type="danger" v-on:click="close">取消</el-button>
    </div>
  </el-dialog>
</template>

<script>
  const refreshEvent = 'accidentRefreshEvent';
  const editEvent = 'accidentEditEvent';
  const itemUrl = '/api/accident/';

  export default {
    name: 'AccidentEditModal',
    data() {
      const checkTime = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入时间'));
        } else {
          callback();
        }
      };
      const checkAddress = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入时间'));
        } else {
          callback();
        }
      };
      const checkLat = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入时间'));
        } else {
          callback();
        }
      };
      const checkLng = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入时间'));
        } else {
          callback();
        }
      };
      const checkUserId = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入时间'));
        } else {
          callback();
        }
      };
      const checkDescription = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入时间'));
        } else {
          callback();
        }
      };
      return {
        visible: false,
        accident: {},
        rules: {
          time: [
            {validator: checkTime, trigger: 'blur'}
          ],
          address: [
            {validator: checkAddress, trigger: 'blur'}
          ],
          lat: [
            {validator: checkLat, trigger: 'blur'}
          ],
          lng: [
            {validator: checkLng, trigger: 'blur'}
          ],
          userId: [
            {validator: checkUserId, trigger: 'blur'}
          ],
          description: [
            {validator: checkDescription, trigger: 'blur'}
          ]
        }
      }
    },
    mounted() {
      this.reset();
      this.$Bus.$on(editEvent, (res) => {
        this.reset();
        this.user = res;
        this.user.rePassword = res.password;
        this.visible = true;
      });
    },
    methods: {
      submit() {
        this.$refs[this.ref].validate((valid) => {
          if (valid) {
            this.save();
          }
        });
      },
      save() {
        this.$http.put(itemUrl, this.user,
          () => {
            this.$Bus.$emit(refreshEvent);
            this.visible = false;
            this.$message.success('提交成功!');
          },
          (res) => this.$message.error('提交失败[' + res.status + ']:' + res.message)
        );
      },
      close() {
        this.visible = false;
      },
      reset() {
        const ref = this.$refs[this.ref];
        if (ref !== undefined) {
          ref.resetFields();
        }
      }

    }
  }
</script>

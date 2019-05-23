<template>
  <el-dialog title="编辑" :visible.sync="visible"
             :before-close="handleClose">
    <el-form :model="item" :rules="rules" status-icon :ref="ref"
             label-position="left" label-width="70px">

      <el-form-item label="时间" prop="time">
        <el-date-picker
          v-model="item.time"
          type="datetime"
          value-format="yyyy-MM-dd HH:mm:ss"
          placeholder="选择日期">
        </el-date-picker>
      </el-form-item>

      <el-form-item label="地址" prop="address">
        <el-input v-model="item.address" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="纬度" porp="lat">
        <el-input v-model="item.lat" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="经度" prop="lng">
        <el-input v-model="item.lng" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="当事人" prop="userId">
        <el-input v-model="item.userId" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="描述" prop="description">
        <el-input v-model="item.description" auto-complete="off"></el-input>
      </el-form-item>

    </el-form>

    <div slot="footer" class="dialog-footer">
      <el-button :plain="true" @click="submit">确定</el-button>
      <el-button :plain="true" type="danger" v-on:click="close">取消</el-button>
    </div>
  </el-dialog>
</template>

<script>
  const refreshEvent = 'violationRefreshEvent';
  const editEvent = 'violationEditEvent';
  const itemUrl = '/violation/';

  export default {
    name: 'ViolationEditModal',
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
          callback(new Error('请输入地址'));
        } else {
          callback();
        }
      };
      const checkLat = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入纬度'));
        } else {
          callback();
        }
      };
      const checkLng = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入经度'));
        } else {
          callback();
        }
      };
      const checkUserId = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入用户id'));
        } else {
          callback();
        }
      };
      const checkDescription = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入详情描述'));
        } else {
          callback();
        }
      };
      return {
        ref: 'violationForm',
        visible: false,
        item: {},
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
        this.item = res;
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
        this.$http.post(itemUrl, this.item,
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
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(()=> {
            done();
          })
          .catch(_ => {});
      }
    }
  }
</script>

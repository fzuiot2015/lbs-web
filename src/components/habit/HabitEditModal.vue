<template>
  <el-dialog title="编辑" :visible.sync="visible">
    <el-form :model="item" :rules="rules" status-icon :ref="ref"
             label-position="left" label-width="70px">

      <el-form-item label="用户ID" prop="userId">
        <el-input v-model="item.userId" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="油耗" prop="oil">
        <el-input-number v-model="item.oil" :precision="2" :step="0.1" :min="0" :max="1000"></el-input-number>
      </el-form-item>

      <el-form-item label="行程" prop="distance">
        <el-input-number v-model="item.distance" :precision="2" :step="0.1" :min="0" :max="1000"></el-input-number>
      </el-form-item>

      <el-form-item label="交通事故次数" prop="accidentCount">
        <el-input-number v-model="item.accidentCount" :min="0" :max="1000"></el-input-number>
      </el-form-item>

      <el-form-item label="时间" prop="time">
        <el-date-picker
          v-model="item.time"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择日期">
        </el-date-picker>
      </el-form-item>

      <el-form-item label="急加速次数" prop="harshAccelerationNum">
        <el-input-number v-model="item.harshAccelerationNum" :min="0" :max="1000"></el-input-number>
      </el-form-item>

      <el-form-item label="急刹车次数" prop="harshBreakingNum">
        <el-input-number v-model="item.harshBreakingNum" :min="0" :max="1000"></el-input-number>
      </el-form-item>

      <el-form-item label="急转弯次数" prop="harshSteeringNum">
        <el-input-number v-model="item.harshSteeringNum" :min="0" :max="1000"></el-input-number>
      </el-form-item>

    </el-form>

    <div slot="footer" class="dialog-footer">
      <el-button :plain="true" @click="submit">确定</el-button>
      <el-button :plain="true" type="danger" v-on:click="close">取消</el-button>
    </div>
  </el-dialog>
</template>

<script>
  const refreshEvent = 'habitRefreshEvent';
  const editEvent = 'habitEditEvent';
  const itemUrl = '/api/habit/';

  export default {
    name: "HabitEditModal",
    data() {
      const checkUserId = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入油耗'));
        } else {
          callback();
        }
      };

      return {
        ref: 'habitForm',
        visible: false,
        item: {},
        rules: {
          userId: [
            {validator: checkUserId, trigger: 'blur'}
          ],
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
        this.$http.put(itemUrl, this.item,
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

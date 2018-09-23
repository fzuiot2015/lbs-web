<template>
  <el-dialog title="编辑" :visible.sync="visible">
    <el-form :model="accident" label-position="left" label-width="70px">
      <el-form-item label="时间">
        <el-input v-model="accident.time" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="地址">
        <el-input v-model="accident.address" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="纬度">
        <el-input v-model="accident.lat" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="经度">
        <el-input v-model="accident.lng" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="当事人">
        <el-input v-model="accident.userId" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="描述">
        <el-input v-model="accident.description" auto-complete="off"></el-input>
      </el-form-item>


    </el-form>

    <div slot="footer" class="dialog-footer">
      <el-button :plain="true" @click="save(accident)">确定</el-button>
      <el-button :plain="true" type="danger" v-on:click="close">取消</el-button>
    </div>
  </el-dialog>
</template>

<script>
  export default {
    name: 'AccidentEditModal',
    data() {
      return {
        visible: false,
        accident: {}
      }
    },
    mounted() {
      this.user = {};
      this.$Bus.$on('accidentEditEvent', (res) => {
        console.log(res);
        this.accident = res;
        this.visible = true;
      });
    },
    methods: {
      save(item) {
        this.$http.put('/api/accident', item, () => {
            this.$Bus.$emit('accidentRefreshEvent');
            this.visible = false;
          }
        )
      },
      close() {
        this.visible = false;
      }
    }
  }
</script>

const queryEvent = 'userQueryEvent';
const refreshEvent = 'userRefreshEvent';
const editEvent = 'userEditEvent';

const listUrl = '/api/user/list';
const itemUrl = '/api/user/';

export default {
  name: 'UserTable',
  components: {UserEditModal},
  data() {
    return {
      items: [],
      params: {},
      pageNum: 0,
      total: 0,
    }
  },
  mounted() {
    this.get();
    this.$Bus.$on(queryEvent, (queryParams) => {
      this.params = queryParams;
      this.get()
    });
    this.$Bus.$on(refreshEvent, () => {
      this.params.pageNum = 0;
      this.get();
    });
  },
  methods: {
    //通过HttpGet方法从服务器获取数据
    get() {
      this.$http.get(listUrl, this.params,
        (data) => this.setData(data),
        (res) => this.$message.error('数据获取失败[' + res.status + ']:' + res.message)
      )
    },
    //设置表格的数据内容
    setData(data) {
      this.items = data.result;
      this.pageNum = data.pageNum + 1;
      this.total = data.total;
    },
    //翻页
    changePage(pageNum) {
      this.params.pageNum = pageNum - 1;
    },
    //触发编辑框的编辑事件
    edit(item) {
      this.$Bus.$emit(editEvent, item);
    },
    //弹出删除确认窗口
    deleteConfirm(item) {
      this.$confirm('此操作将永久删除该记录, 是否继续?', '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }
      )
        .then(() => this.delete(item))
        .catch(() => this.$message.info('已取消删除'));
    },
    //删除指定数据项
    delete(item) {
      this.$http.delete(itemUrl, item.id,
        () => {
          this.$message.success('删除成功!');
          this.get();
        },
        (res) => this.$message.error('删除失败[' + res.status + ']:' + res.message)
      )
    }
  }
}

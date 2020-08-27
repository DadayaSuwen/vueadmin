

var _index;
new Vue({
			el: '#weibolist',
			methods: {
			      // searchUser(){
			      //   console.log(this.searchForm.name)
			      //   var username = this.searchForm.name;
			      //   let resultdata = this.userlist.filter(users =>{
			      //     if(users.name == username|| users.name.indexOf(username) != -1)
			      //     {
			      //       console.log("已找到！")
			      //       return true;
			      //     }
			      //   });
			      //   this.userlist = resultdata;
			      // },
			      selsChange:function(val){  //点击选中
			        console.log(val);
			        this.selected = val;
			      },
			      // 直接新增一行空行
			      // handleAdd(val) {
			      //   this.dialogStatus = 'create';
			      //   this.ViewVisible = true;
			//       },
			//       addRow(users,event){//新增一行
			//  //之前一直想不到怎么新增一行空数据，最后幸亏一位朋友提示：表格新增一行，其实就是源数据的新增，从源数据入手就可以实现了，于是 恍然大悟啊！
			//     this.FormVisible = true;
			//     users.push({ name: '', price: '',reserve:'',desc:''})
			//  },
			      // 点击新增
			      addRow(users,event) {
			        this.FormVisible = true;
			        this.Form = {
			          id: 0,
			          name: '',
			          price: 0,
			          reserve:'',
			          data:'',
			          desc: '',
			        };
			        this.dialogStatus = "addEquipment"
			        this.addBtnshow = true
			        this.editBtnshow = false
			      },
			      // 点击确定（新增）
			      confirmAdd() { 
			        // this.users = this.users || []
			        this.users.push({
			        name: this.Form.name,
			        price: this.Form.price,
			        reserve: this.Form.reserve,
			        data: this.Form.data,
			        desc: this.Form.desc
			      })
			      // storage.set('users', this.users);
			      this.FormVisible = false;      
			      },
			      //点击编辑
			      handleEdit:function(index, row) {
			        this.FormVisible = true;
			        this.Form = Object.assign({}, row); //这句是关键！！！
			        _index = index;
			        console.log(index);
			        console.log(_index);
			        
			        this.dialogStatus = "editEquipment"
			        this.addBtnshow = false
			        this.editBtnshow = true
			      },   
			      // 点击确定（编辑）  
			      confirmEdit(){
			        var editdata = _index;
			        console.log(editdata);
			        this.users[editdata].name=this.Form.name;
			        this.users[editdata].price=this.Form.price;
			        this.users[editdata].reserve=this.Form.reserve;
			        this.users[editdata].data=this.Form.data;
			        this.users[editdata].desc=this.Form.desc;
			        this.FormVisible = false;
			        // 我的 更新的时候就把弹出来的表单中的数据写到要修改的表格中
			        // var postdata = {
			        //   name: this.Form.name,
			        //    price: this.Form.price,
			        //    reserve: this.Form.reserve,
			        //    data: this.Form.data,
			        //    desc: this.Form.desc,
			        // }
			        //这里再向后台发个post请求重新渲染表格数据
			        // this.$set(this.users,'name')
			        // let studenteList=this.Form;
			        // console.log(studenteList);
			        // let {name,price,reserve,data,desc} = studenteList;
			              
			            },
			      //点击关闭dialog
			      handleClose(done) {
			        //  done();
			        //  location.reload();
			        this.FormVisible = false;
			      },     
			      //点击取消
			      handleCancel(formName) {
			        this.FormVisible = false;
			      },
			      // 删除   
			      handleDelete(index, row) {
			        console.log(index, row);
			        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
			          confirmButtonText: '确定',
			          cancelButtonText: '取消',
			          type: 'warning'
			        }).then(() => {
			          this.$message({
			            // delete:row.splice(index, 1),
			            type: 'success',
			            message: '删除成功!',
			            delete: row.splice(index, 1)   //splice 删除对象是数unfuntion组   如果是对象会出现错误  row.solice not is
			 
			            // url: this.$router.push('/')
			          });
			        }).catch(() => {
			          this.$message({
			            type: 'info',
			            message: '已取消删除'
			          });
			        });
			      },
			      removeUsers() {
			          this.$confirm('此操作将永久删除 ' + this.selected.length + ' 个用户, 是否继续?', '提示', { type: 'warning' })
			          .then(() => {
			          console.log(this.selected);
			          var ids = [];
			          //提取选中项的id
			          $.each(this.selected,(i, users)=> {
			          ids.push(users.id);
			          });
			          // 向请求服务端删除
			          //  var resource = this.$resource(this.url);
			          resource.remove({ids: ids.join(",") })
			          .then((response) => {
			          this.$message.success('删除了' + this.selected.length + '个用户!');
			          this.getUsers();
			          })
			          .catch((response) => {
			          this.$message.error('删除失败!');
			          });
			          })
			          .catch(() => {
			          this.$message('已取消操作!');
			          });
			      }
			},
			data: function() {
				return {
							tabs:[
							{
								name:"详细数据",
							},
							{
								name:"表格数据",
							}],
							pickerOptions: {
					          disabledDate(time) {
					            return time.getTime() > Date.now();
					          }
					        },
					        titleMap: {
					            addEquipment:'新增',
					            editEquipment: "编辑"
					        },
					                 //新增和编辑弹框标题
					        dialogStatus: "",
					        Form: {
							  id: 0,
							  name: '',
							  price: 0,
					          reserve:'',
					          data: '',
					          desc: '',      
					        },
					        users:[
					        {name:'牙刷',price:'13',reserve:'13',data:'',desc:'11'},
					        {name:'牙膏',price:'13',reserve:'12',data:'',desc:'22'},
					        {name:'旁氏洗面奶',price:'33',reserve:'45',data:'',desc:'33'},
					        {name:'无印良品水乳',price:'22',reserve:'34',data:'',desc:'55'},
					        {name:'悦风诗吟',price:'113',reserve:'56',data:'',desc:'99'}
					        ],  
					        editFormRules:{
					          name: [
					            { required: true, message: '请输入商品名称', trigger: 'blur' }
					          ],
					          reserve: [
					            { required: true, message: '请输入商品库存', trigger: 'blur' }
					          ],
					          desc: [
					            { required: true, message: '请输入商品描述', trigger: 'blur' }
					          ],
					        },
					        FormVisible: false,
					        currentRow:[],
					        ids:[],
					        listLoading:'',
					        addBtnshow:false,
					        editBtnshow:false,
					        editLoading:'', 
					        dialogStatus: '',
					        selected:[],
					        editid:'',
					        searchForm:[]
				}
			}
		})
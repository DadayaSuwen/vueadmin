new Vue({
		el: '#app',
		methods: {
			openUrl: function (url,msg) {
				this.iframeUrl=url;
			},
			collapseStatus() {
				this.isCollapse = !this.isCollapse;
			},
		},
		data:  {
				iframeUrl: "./user.html",
				isCollapse: false,
				weiboSearch:'',
				items:[{
					input: '',
					id:"1",
					data:'',
					name:"首页",
					url:"./user.html",
					ico:"el-icon-menu"
					
				},
				{
					id:"2",
					name:"详细数据",
					ico:"el-icon-s-platform",
					data:[{
						id:"2-1",
						dataname:"表格数据",
						dataurl:"./detailed_table.html",
						dataico:"el-icon-s-cooperation"
					},
					{
						id:"2-2",
						dataname:"列表数据",
						dataurl:"./iframe.html",
						dataico:"el-icon-s-ticket"
					}]
				},
				{
					id:"3",
					data:'',
					name:"用户页面",
					url:"./user.html",
					ico:"el-icon-paperclip"
				},
				{
					id:"4",
					data:'',
					name:"数据测试",
					url:"./detailed_table.html",
					ico:"el-icon-suitcase"
				},
				],
				logo:"image/logo.png",
				useradmin:[
					{
						name:"admin",
					},
					{
						name:"修改密码",
					},
					{
						name:"退出登录",
					},
				],
				welcome:"欢迎使用 admin 后台！！！",
				screenWidth: 300
			}
})
new Vue({
            el: '#weibolist',
            data:  {
                    activeName:"first",
					weiboSearch:'',
					lists:[{
						image:"image/headVar.jpg",
						title:"信息",
						solf:"这是简介11111111111231123",
						time:"2020-8-12 10:30:38"
					},{
						image:"image/vue.png",
						title:"vue",
						solf:"这是简介",
						time:"2020-8-18 10:30:38"
					},
					{
						image:"image/headVar.jpg",
						title:"vue2sad",
						solf:"这是简介sadasdasdasd",
						time:"2020-8-18 10:30:38"
					},
					{
						image:"image/vue.png",
						title:"vue3",
						solf:"这是简介",
						time:"2020-8-18 10:30:38"
					},
					{
						image:"image/logo.png",
						title:"vue8",
						solf:"这是简介",
						time:"2020-8-18 10:30:38"
					}],
					tabs:[
					{
						name:"详细数据",
					},
					{
						name:"列表数据",
					}]
                },
        })
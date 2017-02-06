var is = new ImageService()

var imageVue = new Vue({
	el: '#image',
	data: {
		presentedImage: ''
	},
	mounted() {
		is.getImage(function (data) {
			imageVue.setImage(data)
		})
	},
	methods: {
		getImage : function () {
			is.getImage(function (data) {
				imageVue.setImage(data)
			})
		},
		setImage: function (data) {
			data = JSON.parse(data)
			var selectedImage = data.large_url || data.url
			imageVue.presentedImage = selectedImage
			document.getElementById("image").style.cssText = `
    		background: url('${imageVue.presentedImage}');
			background-repeat: no-repeat;
    		background-attachment: fixed;
    		background-size: cover;
			`
		}
	}
})
function ImageService() {
	var url = 'http://bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://www.splashbase.co/api/v1/images/random'
	var apiUrl = url + encodeURIComponent(url2);

	this.getImage = function (cb) {
		return $.get(apiUrl, { images_only: true}, function (res) {
			console.log('Image Data:', res)
			JSON.parse(res)
			cb(res)
		})
	}
}

(function () {

	var wc = this;
	var weatherService = new WeatherService();



	var weatherController = new Vue({
		el: '#weather',
		data: {
			temperature: '',
			city: "Boise",
			type: '',
			toggleWeather: true

		},
		mounted() {
			weatherService.getWeather((weather) => {
				var parsed = JSON.parse(weather)
				var kelvinToF = 1.8 * (parsed.main.temp - 273) + 32
				var fahrenheit = kelvinToF.toFixed()
				this.temperature = fahrenheit
				this.type = ' F'

			})
		},
		methods: {
			changeWeather: function () {
				this.toggleWeather = !this.toggleWeather
				debugger
				if (this.toggleWeather === false) {
					this.temperature = ((5 / 9) * (this.temperature - 32)).toFixed()
					this.type = ' C'

				} else {
					this.temperature = ((this.temperature * 1.8) + 32).toFixed()
					this.type = ' F'
				}

			}
		}
	})







}())
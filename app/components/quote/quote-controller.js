(function () {
	var qc = this;
	var qs = new QuoteService();



	qs.getQuote(function (x) {
		var parsed = JSON.parse(x)

		new Vue({
			el: '#quote',
			data: {
				quote: parsed,
				Quoteauthor: parsed.author,
				QuoteText: parsed.quote,
				authorShow: true
			}
		})

		console.log("did the api return an author? " + parsed.author)


	})


}())
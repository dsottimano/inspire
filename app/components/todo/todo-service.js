function TodoService() {
	
	this.getTodos = function (cb) {
		var t = localStorage.getItem('todo');
		if (t) {
			console.log('Todo Data:', t)
			t = JSON.parse(t)
			t.forEach(function (x) {
				cb(x)
			})

		}

	}

	this.saveTodos = function (todos) {

		localStorage.setItem('todo', JSON.stringify(todos));
		console.log('Todo Data Saved:', todos);

	}



	this.deleteTodo = function (index) {

		localStorage.removeItem('todo', index);
		console.log('Todo Data deleted:', index);

	}

}
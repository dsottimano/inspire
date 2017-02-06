(function () {
	// new up the TodoService that has already been configured for your use
	// There are two methods getTodos returns and array
	// saveTodos accepts an array and stores it to your local storage

	var ts = new TodoService()


	var td = new Vue({
		el: '#todo',
		data: {
			todo: [],
			userInput: '',

		},
		mounted() {

			ts.getTodos((data) => {
				
				this.todo.push(data)


			})
		},
		methods: {
			pushTodos: function () {

					this.todo.push({
						task: this.userInput,
						completed: false
					})
				
				
					ts.saveTodos(this.todo)
					this.userInput = ''


			},
			deleteTodo: function (index) {
				this.todo.splice(index, 1)
				localStorage.setItem('todo',JSON.stringify(this.todo))
			},
			completeTodo: function (index) {
				this.todo[index].completed = !this.todo[index].completed
				
			}
		}
	})









}())
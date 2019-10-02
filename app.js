var app = angular.module('app',[]);

app.controller('IndexCtrl',function($scope){
	$scope.todos= [
	{
		todo:"설거지",
		done : false
		
	},
	{
		todo:"설거지",
		done : false
		
	},
	{
		todo:"설거지",
		done : false
		
	}
	];
	
	$scope.newTodo='';
	
	$scope.addTodo = function(){
		
		if ($scope.newTodo !== ''){
			$scope.todos.push({
				todo:$scope.newTodo,
				done:false
			});
		$scope.newTodo='';
		}
	}

	$scope.remove = function(index) {
		this.todos.splice(index, 1);
	}
	
	$scope.done = function(todo){
		todo.done=!todo.done;
	}
	
});
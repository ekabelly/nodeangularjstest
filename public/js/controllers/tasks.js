app.controller('Tasks', ($scope, $http, services) => {

	const initPage = () =>{
		fetchTasks();
	}

	const fetchTasks = () =>{
		services.fetchTasks().then(res=>{
			console.log(res.data.data);
			$scope.tasks = res.data.data;
		}).catch(e=>console.log(e));
	}

	$scope.updateTask = (taskId, bool) =>services.updateTask(taskId, bool).then(res=>console.log(res)).catch(e=>console.log(e));

	$scope.deleteTask = (taskId, i) =>services.deleteTask(taskId).then(res=>{
		delete $scope.tasks[i];
	}).catch(e=>console.log(e));


	initPage();

});
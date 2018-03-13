app.factory('services', $http=>{
	services = {
		fetchTasks: ()=>$http.get("/app/tasks"),
		fetchCustomers:()=>$http.get("/app/customers"),
		createTask:task=>$http.post('/app/task', task),
		updateTask:(taskId, bool)=>$http.put('/app/'+taskId+'/task', {complete:bool}),
		deleteTask:taskId=>$http.delete('/app/'+taskId+'/task')

	}

	return services;
});
app.controller('Customers', ($scope, services) => {

	const initPage = () =>{
		fetchCustomers();
	}

	const fetchCustomers = () =>{
		services.fetchCustomers().then(res=>{
			console.log(res.data.data);
			$scope.customers = res.data.data;
		}).catch(e=>console.log(e));
	}

	$scope.createTask = () =>{
		const task = {
			customer:JSON.parse($scope.customer)._id,
			date:new Date(),
			complete:false,
			desc:$scope.desc
		};
		console.log(task);
		services.createTask(task).then(res=>console.log(res)).catch(e=>console.log(e));
	}

	initPage();

});
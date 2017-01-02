function get_todos(){
	var todos = new Array;
	var todos_str = localStorage.getItem('todo');
	if (todos_str != null){
		todos = JSON.parse(todos_str);
	}
	return todos;
}

function add(){
	var d = new Date();

	//var task = document.getElementById('task').value + '     ' + '(' 
	//	+ '<b>Added: </b>'+ d.getMonth() + '-' + d.getDay() + '-' + d.getFullYear() + ')';

	var n = d.toDateString();
	if(document.getElementById('task').value != ''){
		var task = '<span>' + document.getElementById('task').value+ '</span>' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + '<span>' + '('
			+ '<b>Added: </b>' + n + ')</span>';
	
		var todos = get_todos();
		todos.push(task);
		localStorage.setItem('todo', JSON.stringify(todos));
		document.getElementById('task').value = null;
	
		show();
	} else {
		alert("You must enter something!");
	}
	
	return false;
}

function remove(){
	var id = this.getAttribute('id');
	console.log(id);
	var todos = get_todos();
	todos.splice(id, 1);
	localStorage.setItem('todo', JSON.stringify(todos));
	
	show();
	
	return false;
}

function show(){
	var todos = get_todos();
	
	var html = '<ol>';
	for (var i = 0; i< todos.length; i++){
		html += '<li id="list">' + todos[i] + '<span><button class="remove" id ="' + i + '">x</button></span></li>';
	};
	
	html += '</ol>';
	
	document.getElementById('todos').innerHTML = html;
	
	var buttons = document.getElementsByClassName('remove');
	for(var i = 0; i < buttons.length; i++){
		buttons[i].addEventListener('click', remove);
	};
}


show();
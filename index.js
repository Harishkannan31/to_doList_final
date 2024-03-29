// document.querySelector("li").classList.toogle("done");
// here for done class we should add styling as text decoration:line-through;
// function hello(){
// var hell=document.getElementById("check").value;
// if (hell=="on"){
//     alert(hell);

// }
// }

window.addEventListener('load', () => {
	const form = document.querySelector("#form_task");
	const input = document.querySelector("#task_textbox");
	const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;
		// console.log("the value is",task);
		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);
		if (task.length!=0){

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text_content');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');
		// console.log("the value is",task);
		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('re_write');
		task_edit_el.innerText = 'RE-WRITE';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('remove');
		task_delete_el.innerText = '- REMOVE';
	

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "re-write") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "RE-WRITE";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
	};
	});

});

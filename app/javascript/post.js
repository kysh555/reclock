function post() {
  const submit = document.getElementById('submit-btn');
  submit.addEventListener('click', (e) => {
    const formData = new FormData(document.getElementById('form'));
    const XHR = new XMLHttpRequest();
    XHR.open('POST', '/plans', true);
    XHR.responseType = 'json';
    XHR.send(formData);
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      }
      const item = XHR.response.plan;
      const list = document.getElementById('todo_area');
      const formText = document.getElementById('text-form');
      const HTML = `
        <li class="todo-list">
          <div class="todo" data-id=${item.id} data-done=${item.done}>
            ${item.todo}
          </div>
          <div class="scheduled_date">
            ${item.scheduled_date.MM}月
          </div>
          <div>
            <a href='/plans/${item.id}' data-method='delete' class='delete-btn'>×</a>
          </div>
        </li>
        `;
      list.insertAdjacentHTML('beforeend', HTML);
      formText.value = '';
    };
    e.preventDefault();
  });
}
window.addEventListener('load', post);
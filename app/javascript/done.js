function done () {
  const todoList = document.querySelectorAll('.todo');
  todoList.forEach(function (list) {
    if (list.getAttribute("data-load") != null) {
      return null;
    }
    list.setAttribute('data-load', 'true');
    list.addEventListener('click', () => {
      const dataId = list.getAttribute('data-id');
      const XHR = new XMLHttpRequest();
      XHR.open('GET', `/plans/${dataId}`, true);
      XHR.responseType = 'json';
      XHR.send();
      XHR.onload = () => {
        if (XHR.status != 200) {
          alert(`Error ${XHR.status}: ${XHR.statusText}`);
          return null;
        }
        const item = XHR.response.plan;
        if (item.done === true) {
          list.setAttribute('data-done', 'true');
        } else if (item.done === false) {
          list.removeAttribute('data-done');
        }
      };
    });
  });
}
setInterval(done, 1000);
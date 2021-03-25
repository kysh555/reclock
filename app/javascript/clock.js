function tick () {
  // 日付と時間を表示する関数
  const dateArea = document.getElementById('date_area');
  const timeArea = document.getElementById('time_area');
  
  
  setInterval(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    
    const dateHtml = `
    ${year} / ${month} / ${day}
    `
    const timeHtml = `
    ${hour} : ${min} : ${sec}
    `
    
    dateArea.innerHTML = dateHtml
    timeArea.innerHTML = timeHtml
    
    
    // タイムラインの幅を時間ごとに変更する処理
    const passedArea = document.getElementById("passed");

    if ( hour == 0 ) {
      passedArea.setAttribute('style', 'width: 0');
    } else if ( hour == 1 ) {
      passedArea.setAttribute('style', 'width: calc(100%/(24/1))');
    } else if ( hour == 2 ) {
      passedArea.setAttribute('style', 'width: calc(100%/(24/2))');
    } else if ( hour == 3 ) {
      passedArea.setAttribute('style', 'width: calc(100%/(24/3))');
    } else if ( hour == 4 ) {
      passedArea.setAttribute('style', 'width: calc(100%/(24/4))');
    } else if ( hour == 5 ) {
      passedArea.setAttribute('style', 'width: calc(100%/(24/5))');
    } else if ( hour == 6 ) {
      passedArea.setAttribute('style', 'width: calc(100%/(24/6))');
    } else if ( hour == 7 ) {
      passedArea.setAttribute('style', 'width: calc(100%/(24/7))');
    } else if ( hour == 8 ) {
      passedArea.setAttribute('style', 'width: calc(100%/(24/8))');
    } else if ( hour == 9 ) {
      passedArea.setAttribute('style', 'width: calc(100%/(24/9))');
    } else if ( hour == 10 ) {
      passedArea.setAttribute('style', 'width: calc(100%/(24/10))');
    } else if ( hour == 11 ) {
      passedArea.setAttribute('style', 'width: calc(100%/(24/11))');
    } else if ( hour == 12 ) {
      passedArea.setAttribute('style', 'width: calc(100%/(24/12))');
    } else if ( hour == 13 ) {
      passedArea.setAttribute('style', 'width: calc(100%/(24/13))');
    } else if ( hour == 14 ) {
      passedArea.setAttribute('style', 'width: calc(100%/(24/14))');
    } else if ( hour == 15 ) {
      passedArea.setAttribute('style', 'width: calc(100%/(24/15))');
    } else if ( hour == 16 ) {
      passedArea.setAttribute('style', 'width: calc(100%/(24/16))');
    } else if ( hour == 17 ) {
      passedArea.setAttribute('style', 'width: calc(100%/(24/17))');
    } else if ( hour == 18 ) {
      passedArea.setAttribute('style', 'width: calc(100%/(24/18))');
    } else if ( hour == 19 ) {
      passedArea.setAttribute('style', 'width: calc(100%/(24/19))');
    } else if ( hour == 20 ) {
      passedArea.setAttribute('style', 'width: calc(100%/(24/20))');
    } else if ( hour == 21 ) {
      passedArea.setAttribute('style', 'width: calc(100%/(24/21))');
    } else if ( hour == 22 ) {
      passedArea.setAttribute('style', 'width: 100%/(24/22)');
    } else if ( hour == 23) {
      passedArea.setAttribute('style', 'width: 100%/(24/23)');
    };

  }, 100);
};

window.addEventListener('load', tick);
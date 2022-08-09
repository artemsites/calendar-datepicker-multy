document.addEventListener('DOMContentLoaded', function () {


  
  var datepickerCircleTricks = document.querySelector('.calendar-datepicker-multiple');
  var instance = M.Datepicker.init(datepickerCircleTricks);



  datepickerCircleTricks.addEventListener('click', function () {
    if (instance.isOpen) {
      var dataDayList = document.querySelectorAll('[data-day]');
      var cursorActive = false;



      document.addEventListener('mousedown', function () {
        cursorActive = true;
        console.log('cursorActive = true;');
      });

      document.addEventListener('mouseup', function () {
        cursorActive = false;
        console.log('cursorActive = false;');
      });



      dataDayList.forEach(function (day) {
        day.addEventListener('mouseover', function () {
          console.log('mouseover');
          if (cursorActive) {
            console.log('cursorActive');
            day.classList.add('is-selected');
            day.setAttribute('aria-selected', 'true');
          }
          if (!cursorActive) {
            console.log('!cursorActive');
          }
        });
      });



    }
  });



});
$(function(){

   var getPosition = new Promise(function (resolve, reject) {
       var options = {
               enableHighAccuracy: false,
               timeout: 20000
           };
       navigator.geolocation.getCurrentPosition(success, error, options );
       function error(err) {
           reject(error);
       }
       function success(pos) {
           resolve({long: pos.coords.longitude, lat: pos.coords.latitude});
       }
   })

   function getData(long, lat) {
       return new Promise(function (resolve,reject) {
           $.ajax({
               url: "https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+long+"&APPID=bf07f60d267a574ff99016ab2f279264"
           }).done(function (data) {
               resolve(data)
           }).fail(function (err) {
               reject(err);
           })
       })
   };
   getPosition
       .then(
           function (result) {
               return getData(result.long, result.lat);
           }
       )
       .then(
           function (data) {
               renderData(data);
               console.log(data);
           }
       )
       .catch(function (error) {
           console.log(alert(error.message + ' ' + error.code));
       });
     });
       /*function getTime(dat){
              let newDateWithArrTime = [];
              $.each(dat.list, function(key, value){
                  let newDate = new Date(value.dt_txt);
                  newDate = newDate.setHours(0,0,0,0);
                  let dateWithTime = newDateWithArrTime.find(function(elem){
                      if(elem.newDate == newDate){
                          return true;
                      }else{
                          return false;
                      }
                  });
                  if(!dateWithTime){
                      let times = [value];
                      let newElem = {newDate, times};
                      newDateWithArrTime.push(newElem);
                  }else{
                      dateWithTime.times.push(value);
                  }
              });
              return newDateWithArrTime;
           }

          function renderData(param){
              let newArr = getTime(param);
              let newHtml = "";
              $.each(newArr, function(key, value){
                  let tabDate = new Date(value.newDate);
                  let getDayList = tabDate.getDate();
                  let getMonthList = tabDate.getMonth() + 1;
                  newHtml =
                      "<h3>" + "Число: " + getDayList + " Месяц: " + getMonthList + "</h3>" +
                          "<div>" +
                              "<div class='cityName'>" + param.city.name + " " + param.city.country + "</div>" +
                              "<ul class='weatherParam'>";
                                  $.each(value.times, function(timesKey, timesValue){
                                      let currentDate = moment(timesValue.dt_txt).format('HH:mm:ss');
                                      newHtml = newHtml + "<li>" +
                                          "<ul class='wheatherItems'>" +
                                              "<li>" + "<img src='http://openweathermap.org/img/w/" + timesValue.weather[0].icon + ".png' alt='" + timesValue.weather[0].description + "'>" + "</li>" +
                                              "<li>" + "T макс: " + ((timesValue.main.temp_max - 273.15)+ " ").substring(0,4) + " C" + "</li>" +
                                              "<li>" + "T мин: " + ((timesValue.main.temp_min - 273.15)+ " ").substring(0,4) + " C" + "</li>" +
                                              "<li>" + "Давление: " + ((timesValue.main.pressure/1000) + " ").substring(0,5) + " бар" +
                                              "<li>" + "Часы: " + currentDate + "</li>" +
                                          "</ul>" +
                                          "</li>";
                                  });
                  newHtml = newHtml + "</ul>" + "</div>" + "</div>";
                  $("#accordion").append(newHtml);
              });
              $("#accordion" ).accordion({
                       heightStyle: "content",
                       collapsible: true
                   });
          }

       })

*/

/*var getPosition = new Promise(function (resolve, reject) {
  navigator.geolocation.getCurrentPosition(success, error);
  function error(err) {
      reject(error);
  }
  function success(pos) {
      resolve({long: pos.coords.longitude, lat: pos.coords.latitude});// установили значение функцииж
  }
});
function getData() {
   return new Promise(function (resolve,reject) {
       $.ajax({
           url: 'http://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+long+'&appid=bf07f60d267a574ff99016ab2f279264'
       }).done(function (data) {
           resolve(data)
       }).fail(function (err) {
           reject(err);
       })
   })
};
getPosition.then(
   function (result) {
       console.log(result);
       return getData(result.long, result.lat);
   }
)
   .then(
       function (data) {
          // render data
          console.log(data);
       }
)*/
  // .catch(function (error) {
  // console.log(alert(error.message + ' ' + error.code));
//});

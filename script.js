$(function(){
  App = {};
  App.Utils = {
    DateFormatYmd: function(y, m){
      var yyyy = ('000' + y).slice(-4);
      var MM   = ('0' + m) .slice(-2);
      return function(day){
        var dd = ('0' + day).slice(-2);
        return yyyy + MM + dd;
      };
    }
  };
  var daysInMonth = function(year, month){
        // 今月の日数を計算
    var firstDay = new Date(year, month - 1);
    var lastDay  = new Date(year, month);
    var dayCount = (lastDay - firstDay) / (86400 * 1000);
    // yyyyMMdd型で該当月の日のリストを作成
    return _.map(_.range(1, dayCount+1), App.Utils.DateFormatYmd(year, month));

  };
  
  var days = daysInMonth(2014,6);
  // bodyに表示
  $(document.body).empty();
  var template = _.template('<span class="cell" data-date="<%-ymd%>"><%-day%></span>');
  _.each(days, function(ymd){
    var param = {
      'ymd': ymd,
      'day': ymd.slice(-2)
    };
    var cell = $(template(param));
    if(new Date(ymd.slice(0,4), parseInt(ymd.slice(4,6)) - 1, ymd.slice(6,8)).getDay() == 0){
      cell.addClass('first');
    }
    $(document.body).append(cell);
  });
  
});
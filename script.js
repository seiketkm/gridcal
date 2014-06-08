$(function(){
  var daysInMonth = function(year, month){
    var firstDay = new Date(year, month - 1);
    var lastDay  = new Date(year, month);
    var dayCount = (lastDay - firstDay) / (86400 * 1000);
    var dateFormatter = (function(y, m){
      var yyyy = ('000' + y).slice(-4);
      var MM   = ('0' + m) .slice(-2);
      return function(day){
        var dd = ('0' + day).slice(-2);
        return yyyy + MM + dd;
      };
    })(year, month);
    var days = _.map(_.range(1, dayCount+1), dateFormatter);
    
  };

  var dateFormat = function(year, month ,day){
    return ('000'+ year).slice(-4) + ('0' + month).slice(-2) + ('0' + day).slice(-2);
  };

  var days = daysInMonth(2014,6);
});
$(document).ready(function() {
  var city, map;
  map = $('.ct-map');
  city = map.find('.ct-city');
  city.each(function() {
    var button, that;
    that = $(this);
    button = that.find('.ct-city__button');
    return button.on('click', function() {
      city.not(that).removeClass('active');
      if (that.hasClass('active')) {
        that.removeClass('active');
        return map.removeClass('popup-open');
      } else {
        that.addClass('active');
        return map.addClass('popup-open');
      }
    });
  });
});

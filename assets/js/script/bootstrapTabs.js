
$(document).ready(function() {
  $('.jsTabLink a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
  });
});

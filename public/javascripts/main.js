'use strict'

$(document).ready(function () {
    $('body').on('click', '.btn.contact', function (e) {
        var url = $(this).attr('data-url');

        $.ajax({
            type: 'GET',
            url: url,
            // dataType: 'json',
            success: function (data) {
                console.log(data);
                $('.main-content').empty();
                $('.main-content').append($(data));
            }
        });
    });

    $('body').on('click', '.btn.gallery', function (e) {
        var url = $(this).attr('data-url');

        $.ajax({
            type: 'GET',
            url: url,
            data: { stefcho: 'emnogo gotin' },
            success: function (data) {
                console.log(data);
                $('.main-content').empty();
                $('.main-content').append($(data));
            }
        });
    });
});

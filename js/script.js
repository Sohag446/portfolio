$(document).ready(function(){
    $('.tab li').click(function(){
        var tab_id = $(this).attr('data-tab')
        $('.tab li').removeClass('active')
        $('.tab_docu').removeClass('active')
        $(this).addClass('active')
        $("#"+tab_id).addClass('active')
    })
})

$(document).ready(function() {
    // Function to update the circular progress bar based on percentage
    function updateProgressBar(container, percentage) {
        var degree = (percentage / 100) * 360;
        var gradient;
        if (percentage <= 50) {
            gradient = `linear-gradient(90deg, #969292 50%, transparent 50%, transparent),
                        linear-gradient(${95 + degree}deg, #0BF 50%, #969292 50%, #efefef)`;
        } 
        else if (percentage <= 65) {
            gradient = `linear-gradient(90deg, #efefef 50%, transparent 50%, transparent),
                        linear-gradient(${150 - degree}deg, #0BF 50%, #efefef 50%, #efefef)`;
        }
        else {
            gradient = `linear-gradient(${degree + 60}deg, #0BF 50%, transparent 50%, transparent),
                        linear-gradient(270deg, #0BF 50%, #969292 50%, #efefef)`;
        }
        container.css('background-image', gradient);
        container.attr('data-percentage', percentage);
        
        // Update the progress number in the avatar
        container.find('.progress-number').text(percentage + '%');
    }

    // On input change (progress bar control), update the percentage and circle
    $('.progress-control').on('input', function() {
        var $container = $(this).closest('.avatar-container');
        var percentage = $(this).val();
        updateProgressBar($container, percentage);
    });

    // Initialize all progress bars based on current values
    $('.avatar-container').each(function() {
        var percentage = $(this).data('percentage');
        updateProgressBar($(this), percentage);
    });
});

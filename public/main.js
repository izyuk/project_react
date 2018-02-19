$(document).ready(function () {
 //    $('.rateclass-eventskill-heading').click(function (e){
 //        if(!$('.youtube-icon').is(e.target)){
 //            var panel_to_collapse = $(this).siblings('.panel-collapse');
 //            if(panel_to_collapse)
 //            {
 //                panel_to_collapse.toggleClass('collapse');
 //            }
 //        }
 //    });
 	$('.center-block').on('click','.rateclass-eventskill-heading', function (e){
        if(!$('.youtube-icon').is(e.target)){
            var panel_to_collapse = $(this).siblings('.panel-collapse');
            if(panel_to_collapse)
            {
                panel_to_collapse.toggleClass('collapse');
            }
        }
    });
})
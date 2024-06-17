

$(document).ready(function()
{
    $(".card").hover(
        function()
        {
            $(this).find(".repo-name").hide();
            $(this).find('.repo-description').css("overflow","visible");
            $(this).find(".repo-stats").hide();
        },
        function()
        {
            $(this).find(".repo-name").show();
            $(this).find(".repo-stats").show();
            $(this).find('.repo-description').css("overflow","");
        }
    );
});
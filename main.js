//Animate Smooth Scroll
$('#breakfastnav').on('click', function(){
    const breakfast = $('#breakfast').position().top;

    $('html,body').animate(
        {
        scrollTop: breakfast
    },
    900
    );
});


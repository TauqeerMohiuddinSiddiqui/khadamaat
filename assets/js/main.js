$(function(){
    $('.login-wrapper').hide();
    function verifyOTP() {

        $("#btnSendOTP").on('click',function(){
            $("#txtRegistration").val('testmail@gmail.com');
            $(this).hide();
            $('.login-wrapper').show();
            
        });
        
    }




    // intialization of functions
    verifyOTP();

});
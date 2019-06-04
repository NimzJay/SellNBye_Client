$(document).on("click", "#addUser", function()
{

    jQuery.ajax({
        url     : 'http://localhost:8099/user/add',
        async   : true,
        dataType: 'json',
        type    : 'POST',
        data    : {
            
            fname : jQuery("#addUser_fname").val(),
            lname : jQuery("#addUser_lname").val(),
            username : jQuery("#addUser_username").val(),
            password : jQuery("#addUser_password").val(),
            dob : jQuery("#addUser_dob").val(),
            nic : jQuery("#addUser_nic").val(),
            email : jQuery("#addUser_email").val(),
            phone : jQuery("#addUser_phone").val(),
            address : jQuery("#addUser_address").val(),
            type : jQuery("#addUser_type").val()
            
        }
    }).done(function() {
        alert("Insert complete");
    }).fail(function(xhr, status, error) {
        alert("error:"+error.toString()+status.toString()+xhr.toString());
    });
});

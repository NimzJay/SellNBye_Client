$("#user_userlist").ready(function () {

    $.ajax("http://localhost:8099/user/all", {
        contentType: 'application/json',
        type: 'GET'
    }).done(function (response) {
        var newItem = "";
        $.each(response, function (index, value) {

            newItem += `<hr class="soften">
            <div class="row-fluid">
                <div class="span6">                
                    <h5 class="user_header_id">User ID: ${value.uid}</h5>
                    <p>
                       Last Name: ${value.fname}
                    </p>
                    <p>
                       Last Name: ${value.lname}
                    </p>
                    </br>
                    <p>
                       Username: ${value.username}
                    </p>
                    </br>
                    <p>
                       Password : ${value.password}
                    </p>
                    </br>
                    <p>
                       Date fo Birth: ${value.dob}
                    </p>
                    </br>
                    <p>
                       NIC: ${value.nic}
                    </p>
                    </br>
                    <p>
                       Email: ${value.email}
                    </p>
                    </br>
                    <p>
                        Phone Number: ${value.phone}
                    </p>
                    <br>
                    <p>
                       Address: ${value.address}
                    </p>
                    </br>
                    <p>
                       User Type: ${value.type}
                    </p>
                    </br>
                </div>
                <div class="span4 alignR">
                    <form class="form-horizontal qtyFrm">
                        <div class="btn-group">
                        <button type="button" id="editUser_btn" class="btn btn-primary">
                            EDIT
                        </button>
                        <br/>
                        <br/>
                        <br/>
                        <button type="button" id="deleteUser_btn" class="btn btn-danger">
                            DELETE
                        </button>
                        </div>
                    </form>
                </div>
            </div>`;
        });

        $("#user_userlist").append(newItem);
    });
});

$('body').on('click', '#editUser_btn', function (event) {
    var uid = $(event.target).parent().parent().parent().parent().find('.user_header_id').html();

    $.ajax(`http://localhost:8099/user/find/${uid}`, {
        contentType: 'application/json',
        type: 'GET'
    }).done(function (response) {
        $("#editUser_fname").val(response.fname);
        $("#editUser_lname").val(response.lname);
        $("#editUser_username").val(response.username);
        $("#editUser_pass").val(response.password);
        $("#editUser_dob").val(response.dob);
        $("#editUser_nic").val(response.nic);
        $("#editUser_email").val(response.email);
        $("#editUser_phone").val(response.phone);
        $("#editUser_address").val(response.address);
        $("#editUser_type").val(response.type);
    });

    $('#exampleModal1').modal('show');
});


$('body').on('click', '#deleteUser_btn', function (event) {
	var uid = $(event.target).parent().parent().parent().parent().find('.user_header_id').html();

	$.ajax(`http://localhost:8099/user/delete/${uid}`, {
        contentType: 'application/json',
        type: 'DELETE'
    }).done(function (response) {
        location.reload();
        if (response) {
            alert("Successfully Deleted");
        } else {
            alert("Delete Failed");
        }
    });
});

$("#user_form").submit(function (event) {
    event.preventDefault();
    var user = $(event.target).parent().parent().parent().parent().find('.user_header_id').html();

    var requestData = {
        uid : user.val(),
        fname : $("#editUser_fname").val(),
    	lname : $("#editUser_lname").val(),
    	username : $("#editUser_username").val(),
    	password : $("#editUser_pass").val(),
    	dob : $("#editUser_dob").val(),
    	nic : $("#editUser_nic").val(),
    	email : $("#editUser_email").val(),
    	phone : $("#editUser_phone").val(),
    	address : $("#editUser_address").val(),
    	type : $("#editUser_type").val()
        
    };
    console.log(requestData);

    $.ajax("http://localhost:8099/user/update", {
                data: JSON.stringify(requestData),
                contentType: 'application/json',
                type: 'PUT'
            }).done(function (response) {
                if (response === true) {
                    location.reload();
                    alert("Successfully Updated");
                }
                else {
                    alert("Update Failed");
                }
            });

    $('#exampleModal').modal('toggle');
});
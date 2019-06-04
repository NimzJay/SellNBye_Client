$("#user_userlist").ready(function () {

    $.ajax("http://localhost:8099/user", {
        contentType: 'application/json',
        type: 'GET'
    }).done(function (response) {
        var newItem = "";
        $.each(response, function (index, value) {

            newItem += `<hr class="soften">
            <div class="row-fluid">
                <div class="span6">
                    
                    <h5 class="productName_header_id">${value.productName}</h5>
                    <p>
                       Product Creator: ${value.creator}
                    </p>
                    </br>
                    <p>
                        Available Quantity: ${value.productCount}
                    </p>
                </div>
                <div class="span4 alignR">
                    <form class="form-horizontal qtyFrm">
                        <h3>Rs: ${value.productPrice}</h3><br>
                       
                    </form>
                </div>
            </div>`;
        });

        $("#user_userlist").append(newItem);
    });
});

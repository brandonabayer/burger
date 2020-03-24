$(document).ready(function () {
    $("#burgerSubmit").on("click", function (event) {
        event.preventDefault();
        $.ajax({
            method: "POST",
            url: "/api/createburger",

            data: {
                burger: $("#burgerID").val()
            },
            success: function (textStatus, status) {
                console.log(textStatus);
                console.log(status);
                location.reload();
            },
            error: function (xhr, textStatus, error) {
                console.log(xhr.responseText);
                console.log(xhr.statusText);
                console.log(textStatus);
                console.log(error);
            }
        });
    });

    $(".eatBurger").on("click", function (event) {
        event.preventDefault();
        let id = $(this).data("id");
        let qurl = `/api/updateburger/${id}`;
        console.log(qurl);
        //console.log(id);
        $.ajax({
            method: "PUT",
            url: qurl,
            dataType: "json",
            contentType: "application/json"
        })
            .done(function () {
                alert("success");
                console.log("working");
            })
            .fail(function (jqXHR, textStatus) {
                //location.reload();
                console.log(jqXHR);
                console.log(textStatus);
            });
    });
});
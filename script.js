var id;


$(document).ready(function () {
    $('#consumption-account').select2({
        ajax: {
            url: 'get_payment_category.php',
            dataType: "json",
            type: "post",
            delay: 5,
            data: function (params) {
                return {
                    searchTerm: params.term,
                };
            },
            processResults: function (response) {
                return {
                    results: response
                };
            },
            cache: true
        }
    });
});

$(document).ready(function () {
    $('#consumption-expense').select2({
        ajax: {
            url: 'get_cf_category.php',
            dataType: "json",
            type: "post",
            delay: 5,
            data: function (params) {
                return {
                    searchTerm: params.term,
                };
            },
            processResults: function (response) {
                return {
                    results: response
                };
            },
            cache: true
        }
    });
});


$(document).ready(function () {
    $('#transfer-from-account').select2({
        ajax: {
            url: 'get_payment_category.php',
            dataType: "json",
            type: "post",
            delay: 5,
            data: function (params) {
                return {
                    searchTerm: params.term,
                };
            },
            processResults: function (response) {
                return {
                    results: response
                };
            },
            cache: true
        }
    });
});

$(document).ready(function () {
    $('#transfer-to-account').select2({
        ajax: {
            url: 'get_payment_category.php',
            dataType: "json",
            type: "post",
            delay: 5,
            data: function (params) {
                return {
                    searchTerm: params.term,
                };
            },
            processResults: function (response) {
                return {
                    results: response
                };
            },
            cache: true
        }
    });
});



function consumption_sendData() {

    let consumption_sum = document.getElementById('consumption-sum').value;
    let consumption_date = document.getElementById('consumption-date').value
    let consumption_account = $('#consumption-account :selected').text();
    // let consumption_currency = document.getElementById('consumption-currency').value
    let consumption_rate = document.getElementById('consumption-rate').value
    let consumption_expense = $('#consumption-expense :selected').text();
    let consumption_note = document.getElementById('consumption-note').value

    let consumption_array = [[consumption_sum, consumption_date, consumption_account,
        consumption_rate, consumption_expense, consumption_note, id]];

    $.ajax({
        url: 'consumption_sendData.php',
        method: 'post',
        dataType: 'json',
        data: { consumption_array: consumption_array },

        success: function (data) {
            alert(data);
        }
    });

    clearForm();
}

function transfer_sendData() {

    let transfer_from_account = $('#transfer-from-account :selected').text();
    let transfer_sum = document.getElementById('transfer-sum').value
    let transfer_date = document.getElementById('transfer-date').value
    let transfer_note = document.getElementById('transfer-note').value
    let consumption_rate = document.getElementById('consumption-rate').value = 0
    let consumption_expense = $('#consumption-expense :selected').value = "Перевод"

    let transfer_array = [[id, transfer_sum, transfer_date, transfer_from_account,
        consumption_rate, consumption_expense, transfer_note]]

    $.ajax({
        url: 'transfer_sendData.php',
        method: 'post',
        dataType: 'json',
        data: { transfer_array: transfer_array },

        success: function (data) {
            alert(data);
        }
    });


    let transfer_to_account = $('#transfer-to-account :selected').text();
    let transfer_sum1 = document.getElementById('transfer-sum').value
    let transfer_date1 = document.getElementById('transfer-date').value
    let transfer_note1 = document.getElementById('transfer-note').value
    let consumption_rate1 = document.getElementById('consumption-rate').value = 0
    let consumption_expense1 = $('#consumption-expense :selected').value = "Перевод"

    let transfer_array_update = [[id, transfer_sum1, transfer_date1, transfer_to_account,
        consumption_rate1, consumption_expense1, transfer_note1]];

    $.ajax({
        url: 'transfer_Update.php',
        method: 'post',
        dataType: 'json',
        data: { transfer_array_update: transfer_array_update },

        success: function (data) {
            alert(data);
        }
    });
}


$('#transfer-from-account').on('select2:select', function (e) {
    var data = e.params.data;

    if (data.id == 3) {
        let el = document.getElementById('transfer-sum');

        el.addEventListener('input', function () {
            let sum = document.getElementById('transfer-sum').value
            let sum_convert = document.getElementById('transfer-convert').value

            let result = document.getElementById('transfer-rate').value = sum / sum_convert;
            result.toFixed(2);
        })
    } else if (data.id == 8 || data.id == 9) {
        let el = document.getElementById('transfer-sum');

        el.addEventListener('input', function () {
            let sum = document.getElementById('transfer-sum').value
            let sum_convert = document.getElementById('transfer-convert').value

            let result = document.getElementById('transfer-rate').value = sum_convert / sum;
            result.toFixed(2);
        })
    } else {
        document.getElementById('transfer-rate').value = 0;
    }


})





function digits_int(target) {
    val = $(target).val().replace(/[^0-9]/g, '');
    val = val.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    $(target).val(val);
}

$(function ($) {
    $('body').on('input', '#consumption-sum', function (e) {
        digits_int(this);
    });
    digits_int('#consumption-sum');
});

// $(function ($) {
//     $('body').on('input', '#transfer-sum', function (e) {
//         digits_int(this);
//     });
//     digits_int('#transfer-sum');
// });

// $(function ($) {
//     $('body').on('input', '#transfer-convert', function (e) {
//         digits_int(this);
//     });
//     digits_int('#transfer-convert');
// });

// $(function ($) {
//     $("#transfer-convert").on('click', function () {
//         $("#transfer-commission-block").hide()
//     })

//     $("#transfer-convert").mouseout(function () {
//         $("#transfer-commission-block").show()
//     })
// })


function clearForm() {
    document.getElementById('consumption-sum').value = null;
    document.getElementById('consumption-rate').value = null;
    document.getElementById('consumption-note').value = "";
}


$(function rdBtn() {
    $("#consumption").on('click', function () {
        $("#block2").hide()
        $("#block3").hide()
        $("#block1").show("slow");

    })

    $("#transfer").on('click', function () {
        $("#block1").hide();
        $("#block3").hide()
        $("#btnblock1").hide()
        $("#block2").show("slow");
        $("#btnblock2").show()
    })

    $("#convert").on('click', function () {
        $("#block1").hide();
        $("#block2").hide();
        $("#btnblock1").hide()
        $("#btnblock2").hide()
        $("#block3").show("slow");
    })

});
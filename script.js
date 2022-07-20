disableCommission();
cuurentDate();

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

function consumption_getMaxId() {
    hide_button();
    let temp_id = 1;
    $.ajax({
        url: 'getMaxId.php',
        method: 'GET',
        dataType: 'json',

        success: function (data) {
            $.id = Number(data[0]) + temp_id;
            console.log(data)
            //id = Number(data[0]) + 1;
            consumption_sendData();
            clearFormConsumption();
            show_button();
        }
    });
}

function consumption_sendData() {
    //console.log("Вне функции:", $.id)
    let consumption_sum = (document.getElementById('consumption-sum').value).replace(/\s/g, '') * -1;
    let consumption_date = document.getElementById('consumption-date').value
    let consumption_account = $('#consumption-account :selected').text();
    // let consumption_currency = document.getElementById('consumption-currency').value
    let consumption_rate = document.getElementById('consumption-rate').value
    let consumption_expense = $('#consumption-expense :selected').text();
    let consumption_note = document.getElementById('consumption-note').value
    let consumption_array = [[$.id, consumption_sum, consumption_date, consumption_account,
        consumption_rate, consumption_expense, consumption_note]];

    $.ajax({
        url: 'consumption_sendData.php',
        method: 'post',
        dataType: 'json',
        data: { consumption_array: consumption_array },

        success: function (data) {
            alert(data);
        }
    });
    //$('#btnblock1').addClass("hidden").attr('disabled', 'disabled');
    //clearFormConsumption();
    //$('#btnblock1').removeClass("hidden").removeAttr('disabled', 'disabled');
}

function transfer_getMaxId() {
    hide_button();
    let temp_id = 1;
    $.ajax({
        url: 'getMaxId.php',
        method: 'GET',
        dataType: 'json',

        success: function (data) {
            $.id = Number(data[0]) + temp_id;
            //id = Number(data[0]) + 1;
            transfer_sendData();
            clearFormTransfer();
            show_button();
        }
    });
}

function transfer_sendData() {
    let transfer_from_account = $('#transfer-from-account :selected').text();
    let transfer_sum = (document.getElementById('transfer-sum').value).replace(/\s/g, '') * -1;
    let transfer_date = document.getElementById('transfer-date').value
    let transfer_note = document.getElementById('transfer-note').value
    let consumption_rate = document.getElementById('transfer-rate').value
    let consumption_expense = $('#consumption-expense :selected').value = "Перевод"

    let transfer_array = [[$.id, transfer_sum, transfer_date, transfer_from_account,
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

    convert = document.getElementById('transfer-convert').value;
    if (convert != "" || 0) {

        let transfer_to_account = $('#transfer-to-account :selected').text();
        let transfer_sum1 = (document.getElementById('transfer-convert').value).replace(/\s/g, '');
        let transfer_date1 = document.getElementById('transfer-date').value
        let transfer_note1 = document.getElementById('transfer-note').value
        let consumption_rate1 = document.getElementById('transfer-rate').value
        let consumption_expense1 = $('#consumption-expense :selected').value = "Перевод"

        let transfer_array_update = [[$.id, transfer_sum1, transfer_date1, transfer_to_account,
            consumption_rate1, consumption_expense1, transfer_note1]];

        $.ajax({
            url: 'transfer_Update1.php',
            method: 'post',
            dataType: 'json',
            data: { transfer_array_update: transfer_array_update },

            success: function (data) {
                alert(data);
            }
        });
    } else {
        let transfer_to_account = $('#transfer-to-account :selected').text();
        let transfer_sum1 = (document.getElementById('transfer-sum').value).replace(/\s/g, '');
        let transfer_date1 = document.getElementById('transfer-date').value
        let transfer_note1 = document.getElementById('transfer-note').value
        let consumption_rate1 = document.getElementById('transfer-rate').value
        let consumption_expense1 = $('#consumption-expense :selected').value = "Перевод"

        let transfer_array_update = [[$.id, transfer_sum1, transfer_date1, transfer_to_account,
            consumption_rate1, consumption_expense1, transfer_note1]];

        $.ajax({
            url: 'transfer_Update1.php',
            method: 'post',
            dataType: 'json',
            data: { transfer_array_update: transfer_array_update },

            success: function (data) {
                alert(data);
            }
        });
    }

    let commission = (document.getElementById('transfer-commission').value).replace(/\s/g, '') * - 1;
    let transfer_from_account2 = $('#transfer-from-account :selected').text();
    let transfer_date2 = document.getElementById('transfer-date').value
    let transfer_note2 = document.getElementById('transfer-note').value
    let consumption_rate2 = document.getElementById('transfer-rate').value = 0;
    let consumption_expense2 = $('#consumption-expense :selected').value = "Комиссия банка"


    let transfer_array_commission = [[$.id, commission, transfer_date2, transfer_from_account2,
        consumption_rate2, consumption_expense2, transfer_note2]];

    if (commission != "" || 0) {
        $.ajax({
            url: 'transfer_Update2.php',
            method: 'post',
            dataType: 'json',
            data: { transfer_array_commission: transfer_array_commission },

            success: function (data) {
                alert(data);
            }
        });
    }
}

$('#transfer-from-account').on('select2:select', function (e) {
    let transfer_from_account = e.params.data;

    if (transfer_from_account.id == 1 || transfer_from_account.id == 3 || transfer_from_account.id == 4
        || transfer_from_account.id == 5 || transfer_from_account.id == 6 || transfer_from_account.id == 7) {

        let el = document.getElementById('transfer-convert');
        el.addEventListener('input', function () {
            let sum = (document.getElementById('transfer-sum').value).replace(/\s/g, '');
            let sum_convert = (document.getElementById('transfer-convert').value).replace(/\s/g, '');
            document.getElementById('transfer-rate').value = (parseFloat(sum) / parseFloat(sum_convert)).toFixed(2);

            if (isNaN(sum) || isNaN(sum_convert)) {
                sum.innerHTML = 'Неверный ввод данных';
                sum_convert.innerHTML = 'Неверный ввод данных';
            }
        })

        let el1 = document.getElementById('transfer-sum');
        el1.addEventListener('input', function () {
            let sum = (document.getElementById('transfer-sum').value).replace(/\s/g, '');
            let sum_convert = (document.getElementById('transfer-convert').value).replace(/\s/g, '');
            document.getElementById('transfer-rate').value = (parseFloat(sum) / parseFloat(sum_convert)).toFixed(2);

            if (isNaN(sum) || isNaN(sum_convert)) {
                sum.innerHTML = 'Неверный ввод данных';
                sum_convert.innerHTML = 'Неверный ввод данных';
            }

        })
    } else if (transfer_from_account.id == 8 || 9) {
        let el = document.getElementById('transfer-convert');
        el.addEventListener('input', function () {
            let sum = (document.getElementById('transfer-sum').value).replace(/\s/g, '');
            let sum_convert = (document.getElementById('transfer-convert').value).replace(/\s/g, '');

            document.getElementById('transfer-rate').value = (parseFloat(sum_convert) / parseFloat(sum)).toFixed(2);
        })

        let el1 = document.getElementById('transfer-sum');
        el1.addEventListener('input', function () {
            let sum = (document.getElementById('transfer-sum').value).replace(/\s/g, '');
            let sum_convert = (document.getElementById('transfer-convert').value).replace(/\s/g, '');

            document.getElementById('transfer-rate').value = (parseFloat(sum_convert) / parseFloat(sum)).toFixed(2);
        })
    } else {
        document.getElementById('transfer-rate').value = 0;
    }
});

function digits_int(target) {
    val = $(target).val().replace(/[^0-9,.]/g, '');
    val = val.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    $(target).val(val);
}

$(function ($) {
    $('body').on('input', '#consumption-sum', function (e) {
        digits_int(this);
    });
    digits_int('#consumption-sum');
});

$(function ($) {
    $('body').on('input', '#transfer-sum', function (e) {
        digits_int(this);
    });
    digits_int('#transfer-sum');
});

$(function ($) {
    $('body').on('input', '#transfer-convert', function (e) {
        digits_int(this);
    });
    digits_int('#transfer-convert');
});

$(function ($) {
    $('body').on('input', '#transfer-commission', function (e) {
        digits_int(this);
    });
    digits_int('#transfer-commission');
});

function disableCommission() {

    let element = document.getElementById("transfer-convert");

    if (element.text != "" || 0) {
        element.addEventListener('input', function () {
            $('#transfer-commission').addClass("bg-gray-100").attr('disabled', 'disabled');
        })
    }
}

function clearFormConsumption() {
    document.getElementById('consumption-sum').value = null;
    $('#consumption-account').empty();
    document.getElementById('consumption-rate').value = null;
    $('#consumption-expense').empty();
    document.getElementById('consumption-note').value = "";
    cuurentDate();
}

function clearFormTransfer() {
    $('#transfer-commission').removeClass("bg-gray-100").removeAttr('disabled', 'disabled');
    document.getElementById('transfer-sum').value = "";
    document.getElementById('transfer-convert').value = "";
    document.getElementById('transfer-rate').value = null;
    document.getElementById('transfer-commission').value = "";
    document.getElementById('transfer-note').value = "";
    $('#transfer-from-account').empty();
    $('#transfer-to-account').empty();
    cuurentDate();
}

function hide_button() {
    $('#consumption-button').addClass("hidden").attr('disabled', 'disabled');
    $('#transfer-button').addClass("hidden").attr('disabled', 'disabled');
}
function show_button() {
    $('#consumption-button').removeClass("hidden").removeAttr('disabled', 'disabled');
    $('#transfer-button').removeClass("hidden").removeAttr('disabled', 'disabled');
}

function cuurentDate() {
    let date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    let today = year + "-" + month + "-" + day;

    document.getElementById('consumption-date').value = today;
    document.getElementById('transfer-date').value = today;
    document.getElementById('lids-date').value = today;
}

//$("#block1").addClass("hidden")
$(function rdBtn() {
    $("#lids").on('click', function () {
        $("#lids-block").show("slow");
        $("#block1").hide();
        $("#block2").hide();

    })

    $("#consumption").on('click', function () {
        $("#block1").removeClass("hidden");
        $("#lids-block").hide();
        $("#block2").hide();
        $("#block1").show("slow");
        $("#btnblock2").hide();
        $("#btnblock1").show();
        //$('#transfer-commission').removeClass("bg-gray-100").removeAttr('disabled', 'disabled');

    })

    $("#transfer").on('click', function () {
        $("#lids-block").hide();
        $("#block1").hide();
        $("#block2").show("slow");
        $("#btnblock1").hide();
        $("#btnblock2").show("slow");
    })

});




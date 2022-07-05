window.onload = function () {
    google.script.run.withSuccessHandler(currentUser).getCurrentUser();
    google.script.run.withSuccessHandler(incomeCategory).getIncomeCategory();
    google.script.run.withSuccessHandler(consumCategory).getConsumptionCategory();
    google.script.run.withSuccessHandler(bill).getBill();
    google.script.run.withSuccessHandler(posts).getPosts();
    google.script.run.withSuccessHandler(currencyCategory).getCurrency();
    google.script.run.withSuccessHandler(name).getName();
    google.script.run.withSuccessHandler(clientPay).getClient();
    google.script.run.withSuccessHandler(providerName).getProvider();
    google.script.run.withSuccessHandler(employeeName).getEmployee();
}

function sendValues(values) {
    google.script.run.setValues(values);
}

function sendValues1(values) {
    google.script.run.setValues1(values);
}

function sendValues2(values) {
    google.script.run.setValues2(values);
}

function sendValuesConv(values) {
    google.script.run.setValuesConv(values);
}

function sendValuesClient(values) {
    google.script.run.setValuesClient(values);
}

function sendValuesProvider(values) {
    google.script.run.setValuesProvider(values);
}




//добавление списка в категории и счета------------------------------------------------------------------------------------------------------------------------------------

function bill(data) {
    for (i in data) {
        var element = document.createElement('option');
        element.textContent = data[i];
        element.value = i;
        document.getElementById('selectbill').appendChild(element);
        //document.querySelectorAll("#selectbill, #selectbill1, #selectbill2, #selectbill3, #selectbill4").appendChild(element);
    }

    for (i in data) {
        var element = document.createElement('option');
        element.textContent = data[i];
        element.value = i;
        document.getElementById('selectbill1').appendChild(element);
        //document.querySelectorAll("#selectbill, #selectbill1, #selectbill2, #selectbill3, #selectbill4").appendChild(element);
    }

    for (i in data) {
        var element = document.createElement('option');
        element.textContent = data[i];
        element.value = i;
        document.getElementById('selectbill2').appendChild(element);
        //document.querySelectorAll("#selectbill, #selectbill1, #selectbill2, #selectbill3, #selectbill4").appendChild(element);
    }
    for (var i = 0; i < data.length - 3; i++) {
        var element = document.createElement('option');
        element.textContent = data[i];
        element.value = i;
        document.getElementById('selectbill3').appendChild(element);
        //document.querySelectorAll("#selectbill, #selectbill1, #selectbill2, #selectbill3, #selectbill4").appendChild(element);
    }
    for (var i = 0; i < data.length - 3; i++) {
        var element = document.createElement('option');
        element.textContent = data[i];
        element.value = i;
        if (i == 4) {
            element.selected = true;
        }
        document.getElementById('selectbill4').appendChild(element);
        //document.querySelectorAll("#selectbill, #selectbill1, #selectbill2, #selectbill3, #selectbill4").appendChild(element);
    }
    for (i = 4; i < data.length; i++) {
        var element = document.createElement('option');
        // if (i>6 && i < 10){
        element.textContent = data[i];
        element.value = i;
        document.getElementById('selectbillConv1').appendChild(element);
        // }
        //document.querySelectorAll("#selectbill, #selectbill1, #selectbill2, #selectbill3, #selectbill4").appendChild(element);
    }
    for (i = 4; i < data.length; i++) {
        var element = document.createElement('option');
        // if (i > 7 && i < 10){
        element.textContent = data[i];
        element.value = i;
        if (i == 5) {
            element.selected = true;
        }
        document.getElementById('selectbillConv2').appendChild(element);
        // }
        //document.querySelectorAll("#selectbill, #selectbill1, #selectbill2, #selectbill3, #selectbill4").appendChild(element);
    }

    for (i in data) {
        var element = document.createElement('option');

        element.textContent = data[i];
        element.value = i;
        document.getElementById('selectbillClient').appendChild(element);

        //document.querySelectorAll("#selectbill, #selectbill1, #selectbill2, #selectbill3, #selectbill4").appendChild(element);
    }

    for (i in data) {
        var element = document.createElement('option');
        element.textContent = data[i];
        element.value = i;
        document.getElementById('selectbillProvider').appendChild(element);

        //document.querySelectorAll("#selectbill, #selectbill1, #selectbill2, #selectbill3, #selectbill4").appendChild(element);
    }

}



function posts(data) { //выбор сотрудника/контрагента
    // for(i in data){
    //     var element = document.createElement('option');
    //     element.textContent = data[i];
    //     element.value = i;
    //     document.getElementById('selectpost1').appendChild(element);
    //     //document.querySelectorAll("#selectbill, #selectbill1, #selectbill2, #selectbill3, #selectbill4").appendChild(element);
    // }
    // for(i in data){
    //     var element = document.createElement('option');
    //     element.textContent = data[i];
    //     element.value = i;
    //     document.getElementById('selectpost3').appendChild(element);
    //     //document.querySelectorAll("#selectbill, #selectbill1, #selectbill2, #selectbill3, #selectbill4").appendChild(element);
    // }
    for (i in data) {
        var element = document.createElement('option');
        element.textContent = data[i];
        element.value = i;
        document.getElementById('selectpost').appendChild(element);
        //document.querySelectorAll("#selectbill, #selectbill1, #selectbill2, #selectbill3, #selectbill4").appendChild(element);
    }
}

function employeeName(data) {
    for (i in data) {
        var element = document.createElement('option');
        element.textContent = data[i];
        element.value = i;
        document.getElementById('selectEmployee').appendChild(element);
    }
}

function incomeCategory(data) {
    for (i in data) {
        var element = document.createElement('option');
        element.textContent = data[i];
        element.value = i;
        document.getElementById('selectcategory').appendChild(element);
    }
}

function consumCategory(data) {
    for (i in data) {
        var element = document.createElement('option');
        element.textContent = data[i];
        element.value = i;
        document.getElementById('selectcategory1').appendChild(element);
    }
}

function clientPay(data) {
    for (i in data) {
        var element = document.createElement('option');
        element.textContent = data[i];
        element.value = i;
        document.getElementById('selectClient').appendChild(element);
    }
}

function providerName(data) {
    for (i in data) {
        var element = document.createElement('option');
        element.textContent = data[i];
        element.value = i;
        document.getElementById('selectProvider').appendChild(element);
    }
}

function currencyCategory(data) { // валюта

    for (i in data) {
        var element = document.createElement('option');
        element.textContent = data[i];
        element.value = i;
        document.getElementById('selectCurrency').appendChild(element);
    }


    for (i in data) {
        var element = document.createElement('option');
        element.textContent = data[i];
        element.value = i;
        document.getElementById('selectCurrency1').appendChild(element);
    }

    for (i in data) {
        var element = document.createElement('option');
        element.textContent = data[i];
        element.value = i;
        document.getElementById('selectCurrency3').appendChild(element);
    }

    for (i in data) {
        var element = document.createElement('option');
        element.textContent = data[i];
        element.value = i;
        document.getElementById('selectCurrencyProvider').appendChild(element);
    }

}

//Считыватель курса при конвертации валют------------------------------------------------------------------------------------------------------------------------------------

function curConvert() {

    var conv1 = document.getElementById("selectbillConv1").value;
    var conv2 = document.getElementById("selectbillConv2").value;
    var sumConv1 = document.getElementById("theSumConv1").value;
    var sumConv2 = document.getElementById("theSumConv2").value;
    var bool = false;

    if ((conv1 == 4 && conv2 == 5) || (conv1 == 4 && conv2 == 6)) {
        document.getElementById("KursConv").value = parseFloat(sumConv1) / parseFloat(sumConv2);
    }
    else if ((conv1 == 5 && conv2 == 4) || (conv1 == 6 && conv2 == 4)) {
        document.getElementById("KursConv").value = parseFloat(sumConv2) / parseFloat(sumConv1);
    }
    else {
        document.getElementById("KursConv").value = '';
    }

}


//Привязка валюты  к счету------------------------------------------------------------------------------------------------------------------------------------

function curAddict() {
    var checkVal = document.getElementById("selectbill").selectedIndex;
    var checkCur = document.getElementById("selectCurrency");
    if (checkVal == 5) {
        checkCur.selectedIndex = "1";
    }
    else if (checkVal == 6) {
        checkCur.selectedIndex = "2";
    }
    else {
        checkCur.selectedIndex = "0";
    }
}

function curAddict1() {
    var checkVal1 = document.getElementById("selectbill1").selectedIndex;
    var checkCur1 = document.getElementById("selectCurrency1");
    if (checkVal1 == 5) {
        checkCur1.selectedIndex = "1";
    }
    else if (checkVal1 == 6) {
        checkCur1.selectedIndex = "2";
    }
    else {
        checkCur1.selectedIndex = "0";
    }
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Hunter income only

function currentUser(data) {
    var username = data;
    if (username == "hunter.fragrancia@gmail.com") {
        document.getElementById("radio2").style.display = "none";
        document.getElementById("radio4").style.display = "none";
        document.getElementById("radio5").style.display = "none";
        document.getElementById("radio11").style.display = "none";
    }
}



//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Отправление данных в таблицу
var theSum = '';
var theBillselect;
var theBilloption;
var theCurrencySelect;
var theCurrencyOption;
var exchange = '';
var theCategoryselect;
var theCategoryoption;
var note = '';
var date = '';

function getName() {
    var user = getCurrentUser();
    var emails = sspostname.getRange("A2:A20").getValues();
    var allnames = sspostname.getRange("B2:20").getValues();
    var name;
    for (i in emails) {
        if (user == emails[i]) {
            name = allnames[i];
        }
    }
    // Logger.log(name);
    return name;
}

function sendData() {


    if (document.getElementById("income").checked) {
        theSum = document.getElementById("theSum1").value
        theBillselect = document.getElementById("selectbill")
        theBilloption = theBillselect[theBillselect.selectedIndex].textContent
        theCurrencySelect = document.getElementById("selectCurrency")
        theCurrencyOption = theCurrencySelect[theCurrencySelect.selectedIndex].textContent
        exchange = document.getElementById("Kurs").value
        thePostselect = document.getElementById('selectpost')
        thePostoption = thePostselect[thePostselect.selectedIndex].textContent
        theCategoryselect = document.getElementById('selectcategory')
        theCategoryoption = theCategoryselect[theCategoryselect.selectedIndex].textContent


        note = document.getElementById('note').value
        date = document.getElementById('date').value
        if (theSum == "") {
            alert("Введите сумму")
        }
        else {
            sendValues(["", Number(theSum.replaceAll(" ", "")), "", theCurrencyOption, exchange, theBilloption, thePostoption, theCategoryoption, note, date]);


            $("#successblock").show();
            setTimeout(hideblock, 2000);
            var height = $(window).height();
            $(window).scrollTop(height);
            showAlert()

        }
    }

    else if (document.getElementById('consumption').checked) {
        theSum = (document.getElementById('theSum2').value).replace(/\s/g, '');
        theBillselect = document.getElementById("selectbill1")
        theBilloption = theBillselect[theBillselect.selectedIndex].textContent
        theCurrencySelect = document.getElementById("selectCurrency1")
        theCurrencyOption = theCurrencySelect[theCurrencySelect.selectedIndex].textContent
        theCategoryselect = document.getElementById('selectcategory1')
        theCategoryoption = theCategoryselect[theCategoryselect.selectedIndex].textContent
        exchange = document.getElementById("Kurs1").value
        thePostselect = document.getElementById('selectEmployee')
        thePostoption = thePostselect[thePostselect.selectedIndex].textContent
        note = document.getElementById('note1').value
        date = document.getElementById('date1').value
        if (document.getElementById('theSum2').value == "") {
            alert("Введите сумму")
        }
        else {
            sendValues2(["", "", theSum, theCurrencyOption, exchange, theBilloption, thePostoption, theCategoryoption, note, date]);


            $("#successblock").show();
            setTimeout(hideblock, 2000);
            var height = $(window).height();
            $(window).scrollTop(height);
            showAlert()

        }
    }

    else if (document.getElementById('transfer').checked) {

        theSum = (document.getElementById('theSum4').value).replace(/\s/g, '');
        theBillselect = document.getElementById("selectbill3")
        theBilloption = theBillselect[theBillselect.selectedIndex].textContent
        var theBillselect1 = document.getElementById("selectbill4")
        var theBilloption1 = theBillselect1[theBillselect1.selectedIndex].textContent
        // thePostselect = document.getElementById('selectpost3')
        // thePostoption = thePostselect[thePostselect.selectedIndex].textContent
        thePostoption = '';
        theCategoryoption = "Перевод между картами"
        note = document.getElementById('note3').value
        date = document.getElementById('date3').value

        if (theSum == "") {
            alert("Введите сумму")
        }
        else {
            sendValues1([Number(theSum.replaceAll(" ", "")), theCurrencyOption, exchange, theBilloption, theBilloption1, thePostoption, theCategoryoption, note, date])

            $("#successblock").show();
            setTimeout(hideblock, 2000);
            var height = $(window).height();
            $(window).scrollTop(height);
            showAlert()
        }

    }

    else if (document.getElementById('convert').checked) {

        theSum1 = (document.getElementById('theSumConv1').value).replace(/\s/g, '');
        theSum2 = (document.getElementById('theSumConv2').value).replace(/\s/g, '');
        theBillselect = document.getElementById('selectbillConv1')
        theBilloption = theBillselect[theBillselect.selectedIndex].textContent
        var theBillselect1 = document.getElementById("selectbillConv2")
        var theBilloption1 = theBillselect1[theBillselect1.selectedIndex].textContent
        exchange = document.getElementById("KursConv").value



        thePostoption = '';
        theCategoryoption = "Перевод между картами (Конвертация)"
        note = document.getElementById('note4').value
        date = document.getElementById('date4').value


        if (theSum1 == "") {

            alert("Fragrancia", "Введите сумму 1", "warning")
        }
        else {
            if (theSum2 == "") {
                alert("Fragrancia", "Введите сумму 2", "warning")
            }
            else {
                sendValuesConv([Number(theSum1.replaceAll(" ", "")), theSum2, exchange, theBilloption, theBilloption1, thePostoption, theCategoryoption, note, date])


                $("#successblock").show();
                setTimeout(hideblock, 2000);
                var height = $(window).height();
                $(window).scrollTop(height);
                showAlert()
            }
        }
    }

    // else if (document.getElementById('providerPay').checked) {

    //     theSum = (document.getElementById('theSumProvider').value).replace(/\s/g, '');

    //     theBillselect = document.getElementById("selectbillProvider");
    //     theBilloption = theBillselect[theBillselect.selectedIndex].textContent;

    //     theCategoryoption = "Выплата долга (поставщик)";

    //     thePostselect = document.getElementById('selectProvider');
    //     thePostoption = thePostselect[thePostselect.selectedIndex].textContent;

    //     note = document.getElementById('noteProvider').value;
    //     date = document.getElementById('dateProvider').value;
    //     exchange = document.getElementById("KursProvider").value;

    //     if (theSum == "") {
    //         alert("Введите сумму")
    //     }
    //     else {
    //         sendValuesProvider([theSum, theBilloption, thePostoption, note, date, theCategoryoption, exchange]);

    //         $("#successblock").show();
    //         setTimeout(hideblock, 2000);
    //         var height = $(window).height();
    //         $(window).scrollTop(height);
    //         showAlert()
    //     }

    // }
}



//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------


$(document).ready(function () {

    $('.selectbill').select2();
    $('.selectCurrency').select2();
    $('.selectcategory').select2();
    $('.js-example-basic-single').select2();
    $('.selectpost').select2();
    $('.selectbill1').select2();
    $('.selectCurrency1').select2();
    $('.selectcategory1').select2();
    $('.selectEmployee').select2();
    $('.selectbill3').select2();
    $('.selectbill4').select2();
    $('.selectbillConv1').select2();
    $('.selectbillConv2').select2();
    $('.selectbillClient').select2();
    $('.selectClient').select2();
    $('.selectbillProvider').select2();
    $('.selectCurrencyProvider').select2();
    $('.selectProvider').select2();

    document.getElementById('date').valueAsDate = new Date();
    document.getElementById('date1').valueAsDate = new Date();
    document.getElementById('date2').valueAsDate = new Date();
    document.getElementById('date3').valueAsDate = new Date();
    document.getElementById('date4').valueAsDate = new Date();
    document.getElementById('dateClient').valueAsDate = new Date();
    document.getElementById('dateProvider').valueAsDate = new Date();



    $("#block1").hide();
    $("#block3").hide();
    $("#block4").hide();
    $("#block5").hide();
    $("#block6").hide();
    $("#block7").hide();
    $("#successblock").hide();
    $("#income").on('click', function () {
        if ($(this).is(':checked')) {
            $("#block2").show("slow");
            $("#block3").hide();
            $("#block4").hide();
            $("#block5").hide();
            $("#block6").hide();
            $("#block7").hide();
            // $("#block1").hide();
            $("#btn").show();
        }
    });

    $("#consumption").on('click', function () {
        if ($(this).is(':checked')) {
            // $("#block1").hide();
            $("#block3").hide();
            $("#block4").hide();
            $("#block5").hide();
            $("#block6").hide();
            $("#block7").hide();
            $("#block2").show("slow");
            $("#btn").show();
        }
    });

    $("#debt").on('click', function () {
        if ($(this).is(':checked')) {
            // $("#block1").hide();
            $("#block2").hide();
            $("#block4").hide();
            $("#block5").hide();
            $("#block6").hide();
            $("#block7").hide();
            $("#block3").show("slow");
            $("#btn").show();
        }
    });

    $("#transfer").on('click', function () {
        if ($(this).is(':checked')) {
            // $("#block1").hide();
            $("#block3").hide();
            $("#block2").hide();
            $("#block5").hide();
            $("#block6").hide();
            $("#block7").hide();
            $("#block4").show("slow");
            $("#btn").show();
        }
    });


    $("#debt").on('click', function () {
        if ($(this).is(':checked')) {
            // $("#block1").hide();
            $("#block2").hide();
            $("#block4").hide();
            $("#block5").hide();
            $("#block6").hide();
            $("#block7").hide();
            $("#block3").show("slow");
            $("#btn").show();
        }
    });

    $("#convert").on('click', function () {
        if ($(this).is(':checked')) {
            // $("#block1").hide();
            $("#block2").hide();
            $("#block4").hide();
            $("#block3").hide();
            $("#block6").hide();
            $("#block7").hide();
            $("#block5").show("slow");
            $("#btn").show();
        }
    });

    $("#clientPay").on('click', function () {
        if ($(this).is(':checked')) {
            // $("#block1").hide();
            $("#block2").hide();
            $("#block4").hide();
            $("#block3").hide();
            $("#block5").hide();
            $("#block7").hide();
            $("#block6").show("slow");
            $("#btn").show();
        }
    });

    // $("#providerPay").on('click', function () {
    //     if ($(this).is(':checked')) {
    //         $("#block1").hide();
    //         $("#block2").hide();
    //         $("#block4").hide();
    //         $("#block3").hide();
    //         $("#block5").hide();
    //         $("#block6").hide();
    //         $("#block7").show("slow");
    //         $("#btn").show();
    //     }
    // });


});

function hideblock() {
    $("#successblock").hide();
}

function showAlert(text, reload) {
    document.getElementById("alert-msg").innerHTML = "Данные успешно отправлены!";
    document.querySelector(".modal-fade").style.display = "block";
    document.getElementById('alert-btn').setAttribute('reload', reload);
}
function hideAlert() {
    var reload = document.getElementById('alert-btn').getAttribute('reload');
    document.querySelector(".modal-fade").style.display = "none";
    window.open("https://script.google.com/macros/s/AKfycbzLopUrh-_YYtz9IpZFvXWCdUuXT8U3FwCoZXqudlkne8AaS2eOh6NdAtyADJywReBhkw/exec", '_top');
}
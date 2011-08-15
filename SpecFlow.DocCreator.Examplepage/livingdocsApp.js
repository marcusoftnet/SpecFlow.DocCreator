var viewModel = {
    features: ko.observableArray(reportViewModel)
};

ko.applyBindings(viewModel);

//jQuery(function () {
//    $(".feature").accordion({
//        autoHeight: false,
//        navigation: true
//    });
//});
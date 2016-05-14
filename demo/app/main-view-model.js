var Observable = require("data/observable").Observable;
var AppList = require('nativescript-applist');


function createViewModel() {
    var viewModel = new Observable();
    AppList.getInstalledApps(function(installedApps) {
        viewModel.set("apps", installedApps);
    }, {
        withIcons: true
    });

    return viewModel;
}
exports.createViewModel = createViewModel;

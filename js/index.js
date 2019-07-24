"use strict";

// ANCHOR DATACTRL
const DataCtrl = (() => {

    const data = {
        default: {
            flowTemperature: 70,
            returnTemperature: 60,
            roomTemperature: 20,
            heatValue: 1800,
            heatExponent: 1.337
        },
        user: {}
    };

    // Copy data.default and assign it to data.user
    Object.assign(data.user, data.default);

    // ANCHOR public data
    return {
        data: data
    };

})();

// ANCHOR VIEWCTRL
const ViewCtrl = (() => {

    // ANCHOR public view
    return {

    }

})();

// ANCHOR APPCTRL
const App = ((dataCtrl, viewCtrl) => {

    // ANCHOR public app
    return {
        init() {
            console.log('App is running!');
        }
    };

})(DataCtrl, ViewCtrl);

App.init();

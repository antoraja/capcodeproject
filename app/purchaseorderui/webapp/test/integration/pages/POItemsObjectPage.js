sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'purchaseorderui.purchaseorderui',
            componentId: 'POItemsObjectPage',
            entitySet: 'POItems'
        },
        CustomPageDefinitions
    );
});
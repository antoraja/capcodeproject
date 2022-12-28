sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'purchaseorderui/purchaseorderui/test/integration/FirstJourney',
		'purchaseorderui/purchaseorderui/test/integration/pages/POsList',
		'purchaseorderui/purchaseorderui/test/integration/pages/POsObjectPage',
		'purchaseorderui/purchaseorderui/test/integration/pages/POItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, POsList, POsObjectPage, POItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('purchaseorderui/purchaseorderui') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOsList: POsList,
					onThePOsObjectPage: POsObjectPage,
					onThePOItemsObjectPage: POItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);
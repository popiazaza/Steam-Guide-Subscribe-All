(function()
{
	if( location.href.match( /^https:\/\/steamcommunity\.com\/id\/0825771\/myworkshopfiles\/?/ ) === null )
	{
		alert( 'Please run this on Torte de Lini\'s guide page: https://steamcommunity.com/id/0825771/myworkshopfiles/?section=guides&p=1&numperpage=30' );

		window.location = 'https://steamcommunity.com/id/0825771/myworkshopfiles/?section=guides&p=1&numperpage=30';

		return;
	}
	
	var guideList = [];
	var subscribedList = [];
	
	jQuery("script").each(function(){
		var guidematch = jQuery(this).html().match(/SharedFileBindMouseHover\( "(.*?)", true, (.*?) \);/);
		if(guidematch){
			var guidedetail = jQuery.parseJSON(guidematch[2]);
			guideList.push(guidedetail.id);
			subscribedList[guidedetail.id] = guidedetail.user_subscribed;
		}
	});
	
	var i = 0,
	    loaded = 0,
	    package = 0,
	    total = guideList.length,
	    modal = ShowBlockingWaitDialog( 'Executing…',
	    	'Please wait until all requests finish. Ignore all the errors, let it finish.' );
	
	for( ; i < total; i++ )
	{
		guideid = guideList[ i ];
		
		if( subscribedList[ guideid ] )
		{
			loaded++;
			continue;
		}
		
		jQuery.post(
			'//steamcommunity.com/sharedfiles/subscribe',
			{
				appid: 570,
				id: guideid,
				sessionid: g_sessionID
			}
		).always( function( )
			{
				loaded++;
				
				modal.Dismiss();
				
				if( loaded >= total )
				{
					location.reload();
				}
				else
				{
					modal = ShowBlockingWaitDialog( 'Executing…',
						'Loaded <b>' + loaded + '</b>/' + total + '.' );
				}
			}
		);
	}
}());

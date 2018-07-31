//get all guide id - repeat in all pages to get complete guide ids

var guideList = [];

jQuery("script").each(function(){
		var guidematch = jQuery(this).html().match(/SharedFileBindMouseHover\( "(.*?)", true, (.*?) \);/);
		if(guidematch){
			var guidedetail = jQuery.parseJSON(guidematch[2]);
			guideList.push(guidedetail.id);
		}
	});
	
console.log('var guideList = ' + JSON.stringify(guideList) + ';');

//get all pages - not complete code

var allpages = jQuery('.workshopBrowsePagingControls a.pagelink');
	var allpages2 = allpages[allpages.length-1];
	var allpages3 = Number(allpages2.text)+1;
	var i = 1;
	for( ; i < total; i++ )
	{
		var guidepage = jQuery.get("?section=guides&p="+i+"&numperpage=30");
	}

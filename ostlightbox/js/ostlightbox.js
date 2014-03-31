jQuery(document).ready(function(){
	jQuery(document).keypress(function(e){	if(e.keyCode == 27){ jQuery(".confirmon-overlay,.confirmon-box").hide();} });
	jQuery("a.ostlightbox").click(function(e){
		var link = jQuery(this).attr("href");
		loadForm(link);
		e.preventDefault();
	});

	jQuery("#msgBoxDiv").remove();
	jQuery(".confirmon-box").remove();
	jQuery('body').append('<div id="msgBoxDiv" class="confirmon-overlay"></div><div class="confirmon-box" ><div class="closeDiv"></div><div id="ostLightbox"></div></div>');
});
//-----------------------------------------------
function loadForm(task){
		
	jQuery("#ostLightbox").html('<div class="ajaxLoader" style="display:block;width:100%;height:100%;"><div class="ajaxBackground"></div><div class="loaderImage "></div></div>');
	jQuery(".confirmon-overlay,.confirmon-box").show();
	center();

	jQuery(document).on( "click", ".closeDiv", function() {	jQuery(".confirmon-overlay,.confirmon-box").hide(); });

	jQuery.ajax({
			url: task ,
			type: 'POST',
			data:  'id=1',
			mimeType:"multipart/form-data",
			contentType: false,
			cache: false,
			processData:false,
			success: function(result, textStatus, jqXHR)
			{

				jQuery("#ostLightbox").html(result);
				center();
			},
			error: function(jqXHR, textStatus, errorThrown)
			{
				alert("Error loading lightbox.")
			}          
	   });

	jQuery(".confirmon-overlay,.confirmon-box").show();
	return false;
}


function center(){
	var boxheight = jQuery(".confirmon-box").height();
	var boxwidth  = jQuery(".confirmon-box").width();
		//alert(window.innerWidth + "- " +boxwidth);
    jQuery(".confirmon-box").css("top", Math.max(0, (50)) + "%");
    jQuery(".confirmon-box").css("margin-top", Math.min(0, -(boxheight/2)) + "px");

	jQuery(".confirmon-box").css("left", Math.max(0, (50)) + "%");
	jQuery(".confirmon-box").css("margin-left", Math.min(0, -(boxwidth/2)) + "px");
}
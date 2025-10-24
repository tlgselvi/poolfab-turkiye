jQuery(document).ready(function(){
    jQuery('#show-border').mousedown(function(){
        jQuery('#border-options').slideToggle();
        //http://stackoverflow.com/questions/4702000/toggle-input-disabled-attribute-using-jquery/#answer-9489400
        jQuery("#border-options input, #border-options select").prop('required', function(i, v) { return !v; });
    });

    jQuery('#custom-icons').click(function(){    
        jQuery('#icon-options').slideToggle();
    });

     // Add Color Picker to all inputs that have 'color-field' class
    jQuery('.color-field').wpColorPicker();

    jQuery('#icon-options .remove').click(function(){
        jQuery(this).closest('div').remove();
    });
    jQuery('#icon-options .add').click(function(){
        jQuery('#icon-options #icon_list').append('<div><i class="fa fa-minus-circle remove"></i><input type="text" name="icons[]" placeholder="Icon Name" value="" /> <input type="text" name="icon-title[]" placeholder="Title" value="" /></div>');
    });
});




/* Login CAPTCHA */
jQuery(document).ready(function($){
    $('.show-border').mousedown(function(){
        $(this).closest('td').find('.border-options').slideToggle();
        //http://stackoverflow.com/questions/4702000/toggle-input-disabled-attribute-using-jquery/#answer-9489400
        $(this).closest('td').find('.border-options input, .border-options select').prop('required', function(i, v) { return !v; });
    });
});



// IMAGE PICKER FOR WPLIC
jQuery(document).ready(function($) {
    $( "body" ).on('click', ".upload_image_button", function(e) { 
        e.preventDefault();
        var thisID = $(this).attr('id');
        var custom_uploader = wp.media({
            title: 'Select Image',
            button: {
                text: 'Select'
            },
            multiple: false  // Set this to true to allow multiple files to be selected
        })
        .on('select', function() {
            var attachment = custom_uploader.state().get('selection').first().toJSON();
            $('.'+thisID+' .thisImage').val(attachment.url);
            $('<image src="'+attachment.url+'" style="max-height:300px;" class="showImage">').insertAfter('.'+thisID+' .thisImage');
            $('.'+thisID+' .upload_image_button').remove();
            $('.'+thisID+' .logo-btns').html('<input class="remove_image_button button button-primary" id="'+thisID+'" style="margin: 10px 0; width: initial;" type="button" value="Remove Image" />');
        })
        .open();
    });
    
    
    $( "body" ).on('click', ".remove_image_button, .upload_image_button", function(e) { 
        e.preventDefault();
        var thisID = $(this).attr('id');
        $('.'+thisID+' .thisImage').val("");
        $('.'+thisID+' .showImage, .'+thisID+' .remove_image_button').remove();
        $('.'+thisID+' .logo-btns').html('<input class="upload_image_button button button-primary" type="button" id="'+thisID+'" value="Set Image" style="margin: 10px 0; width: initial;" />');
    });
});


//http://jsfiddle.net/MahshidZeinaly/CgQ5c/
jQuery(document).ready(function($){
  $("[type=range]").change(function(){
    var newval=$(this).val();
    newval = (newval * 0.1).toFixed(1);
    $(this).closest("td").find(".slidernumber").text(newval);
  });
});
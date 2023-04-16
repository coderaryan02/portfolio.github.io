$('#experience').on('click',function(){
	$('.experience').show(300);
	$('.skills').hide(300);
	$('.education').hide(300);
	$('.interest').hide(300);
})
$('#skills').on('click',function(){
	$('.experience').hide(300);
	$('.skills').show(300);
	$('.education').hide(300);
	$('.interest').hide(300);

})
$('#education').on('click',function(){
	$('.experience').hide(300);
	$('.skills').hide(300);
	$('.education').show(300);
	$('.interest').hide(300);

})
$('#interest').on('click',function(){
	$('.experience').hide(300);
	$('.skills').hide(300);
	$('.education').hide(300);
	$('.interest').show(300);

})
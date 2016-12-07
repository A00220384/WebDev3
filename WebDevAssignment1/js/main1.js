/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var rootURL = "http://localhost/WebDevAssignment1/api/materials";

var currentMaterial;

jQuery(document).ready(function($){});


function findByName(searchKey) {
	console.log('findByName: ' + searchKey);
	$.ajax({
		type: 'GET',
		url: rootURL + '/search/' + searchKey,
		dataType: "json",
		success: renderList 
	});
}

function renderList(data) {
	// JAX-RS serializes an empty list as null, and a 'collection of one' as an object (not an 'array of one')
	var list = data === null ? [] : (data.material instanceof Array ? data.material : [data.material]);

	$('#materialList li').remove();
	$.each(list, function(index, material) {
		$('#materialList').append('<li><a href="#" data-identity="' + material.id + '">'+material.name+'</a></li>');
	});
}

var findAll=function() {
	console.log('findAll');
	$.ajax({
		type: 'GET',
		url: rootURL,
		dataType: "json", // data type of response
		success: renderList
	});
};
function renderDetails(material) {
	
	$('#name').val(material.name);
	$('#type').val(material.type);
	$('#quantity').val(material.quantity);
	$('#diameter').val(material.diameter);
	$('#length').val(material.length);
	//$('#pic').attr('src', 'pics/' + material.picture);
	$('#thickness').val(material.thickness);
        $('#outdoor').val(material.outdoor);
        $('#color').val(material.color);
        $('#materialId').val(material.id);
}

// Helper function to serialize all the form fields into a JSON string
function formToJSON() {
	return JSON.stringify({
		
		"name": $('#name').val(), 
		"type": $('#type').val(),
		"quantity": $('#quantity').val(),
		"diameter": $('#diameter').val(),
		"length": $('#length').val(),
		//"picture": currentMaterial.picture,
		"thickness": $('#thickness').val(),
                "outdoor": $('#outdoor').val(),
		//"picture": currentMaterial.picture,
		"color": $('#color').val(),               
                "id": $('#materialId').val()
                
		});
}
$('#btnSearch').click(function() {
	search($('#searchKey').val());
	return false;
});
findAll();



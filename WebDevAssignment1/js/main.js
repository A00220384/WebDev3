// The root URL for the RESTful services
var rootURL = "http://localhost:4009/WebDevAssignment1/api/materials";

var currentMaterial;

var search =function(searchKey) {
	if (searchKey == '') 
		findAll2();
	else
		findByName(searchKey);
};

var newMaterial=function () {
	$('#btnDelete').hide();
	currentMaterial = {};
	renderDetails(currentMaterial); // Display empty form
};

var findAll=function() {
	console.log('findAll');
	$.ajax({
		type: 'GET',
		url: rootURL,
		dataType: "json", // data type of response
		success: renderListTable               
	}); 
};
var findAll2=function() {
	console.log('findAll');
	$.ajax({
		type: 'GET',
		url: rootURL,
		dataType: "json", // data type of response
		success: renderList               
	});
};
var findMaxId= function() {
	console.log('findMaxId: ');
	$.ajax({
		type: 'GET',
		url: rootURL + '/max',
		dataType: "json",
		success: function(data){
			console.log('findMax: ' + data.MAX(ID));
			currentMaterial = data;
			renderID(currentMaterial);
		} 
	});
};
var findByName= function(searchKey) {
	console.log('findByName: ' + searchKey);
	$.ajax({
		type: 'GET',
		url: rootURL + '/search/' + searchKey,
		dataType: "json",
		success: renderList 
	});
};

var findById= function(id) {
	console.log('findById: ' + id);
	$.ajax({
		type: 'GET',
		url: rootURL + '/' + id,
		dataType: "json",
		success: function(data){
			$('#btnDelete').show();
			console.log('findById success: ' + data.name);
			currentMaterial = data;
			renderDetails(currentMaterial);
		}
	});
};

var addMaterial = function () {
	console.log('addMaterial');
	$.ajax({
		type: 'POST',
		contentType: 'application/json',
		url: rootURL,
		dataType: "json",
		data: formToJSON(),
		success: function(data, textStatus, jqXHR){
			alert('Material created successfully');
			$('#btnDelete').show();
			$('#materialId').val(data.id);
                        findAll2();
		},
		error: function(jqXHR, textStatus, errorThrown){
			alert('addMaterial error: ' + textStatus);
		}
	});
};

var updateMaterial= function () {
	console.log('updateMaterial');
	$.ajax({
		type: 'PUT',
		contentType: 'application/json',
		url: rootURL + '/' + $('#materialId').val(),
		dataType: "json",
		data: formToJSON(),
		success: function(data, textStatus, jqXHR){
			alert('Material updated successfully');
                         findAll2();
		},
		error: function(jqXHR, textStatus, errorThrown){
			alert('updateMaterial error: ' + textStatus);
		}
	});
};

var deleteMaterial=function() {
	console.log('deleteMaterial');
	$.ajax({
		type: 'DELETE',
		url: rootURL + '/' + $('#materialId').val(),
		success: function(data, textStatus, jqXHR){
			alert('Material deleted successfully');
                         findAll2();
		},
		error: function(jqXHR, textStatus, errorThrown){
			alert('deleteMaterial error');
		}
	});
};
//
var renderList= function(data) {
	// JAX-RS serializes an empty list as null, and a 'collection of one' as an object (not an 'array of one')
	//var list = data == null ? [] : (data instanceof Array ? data : [data]);
        //var list = data === null ? [] : (data.material instanceof Array ? data.material : [data.material]);
        var list=data.Materials;
    //console.log(data.material);
	$('#materialList tr').remove();
	$.each(list, function(index, Materials) {
		$('#materialList').append('<tr><td style="width: 250px;"><a href="#" id="' + Materials.ID + '">'+Materials.Name+'</a></td></tr>');
                                      
	});
};
var renderListName= function(data) {
	// JAX-RS serializes an empty list as null, and a 'collection of one' as an object (not an 'array of one')
	//var list = data == null ? [] : (data instanceof Array ? data : [data]);
        //var list = data === null ? [] : (data.material instanceof Array ? data.material : [data.material]);
        var list=data;
        
    //console.log(data.material);
	$('#materialList li').remove();
        $('#materialList').append('<li><a href="#" id="' + list.ID + '">'+list.Name+'</a></li>');
                                      
	
};
var renderListTable= function(data) {
	// JAX-RS serializes an empty list as null, and a 'collection of one' as an object (not an 'array of one')
	//var list = data == null ? [] : (data instanceof Array ? data : [data]);
    var list=data.Materials;
    console.log("response")
    //console.log(data.material);
	//$('#materialList li').remove();
	$.each(list, function(index, Material) {
		$('#table_body').append('<tr><td>'+Material.ID+'</td><td>'+Material.Name+'</td><td>'+Material.Type+
                  '</td><td>'+Material.Quantity+'</td><td>'+Material.Diameter+'</td><td>'+Material.Length+'</td><td>'+
                  Material.Thickness+'</td><td>'+Material.Outdoor+'</td><td>'+Material.Colour+'</td><td>'
                  +Material.price+'</td><tr>');
	});
        $('#table_id').dataTable();
};

var renderDetails=function(Materials)  {
        $('#materialId').val(Materials.ID);
        $('#name').val(Materials.Name);
	$('#type').val(Materials.Type);
	$('#quantity').val(Materials.Quantity);
	$('#diameter').val(Materials.Diameter);
	$('#length').val(Materials.Length);
        $('#pic').attr('src', 'pics/' + Materials.Image);
	//$('#pic').attr('img src="pics/'+Materials.Image+'" alt = "image not working"');
	$('#thickness').val(Materials.Thickness);
        $('#outdoor').val(Materials.Outdoor);
        $('#colour').val(Materials.Colour);
        $('#price').val(Materials.price);
        //$('#materialId').val(Materials.id);
};

// Helper function to serialize all the form fields into a JSON string
var formToJSON=function () {
	var materialId = $('#materialId').val();
	return JSON.stringify({
                "ID": materialId == "" ? null : materialId,
		"Name": $('#name').val(), 
		"Type": $('#type').val(),
		"Quantity": $('#quantity').val(),
		"Diameter": $('#diameter').val(),
		"Length": $('#length').val(),
		//"picture": currentMaterial.picture,
		"Thickness": $('#thickness').val(),
                "Outdoor": $('#outdoor').val(),
		//"picture": currentMaterial.picture,
		"Colour": $('#colour').val(), 
                "price": $('#price').val()
                //"id": materialId == "" ? null : materialId
		});
};

//When the DOM is ready.
$(document).ready(function()
{
	// Nothing to delete in initial application state
	$('#btnDelete').hide();

	// Register listeners
	$('#btnSearch').click(function() {
		search($('#searchKey').val());
		return false;
	});

	// Trigger search when pressing 'Return' on search key input field
	$('#searchKey').keypress(function(e){
		if(e.which == 13) {
			search($('#searchKey').val());
			e.preventDefault();
			return false;
	    }
	});

	$('#btnAdd').click(function() {
		newMaterial();
		return false;
	});

	$('#btnSave').click(function() {
		if ($('#materialId').val() == '')
			addMaterial();
		else
			updateMaterial();
		return false;
	});

	$('#btnDelete').click(function() {
		deleteMaterial();
		return false;
	});

	//$('#materialList a').on("click",function() {
	//	findById($(this).data('identity'));
	//});
	
	$(document).on("click", '#materialList a', function(){findById(this.id);});

	// Replace broken images with generic material bottle
	//$("img").error(function(){
	 // $(this).attr("src", "pics/generic.jpg");

	//});
	//reset form
        $('#materialId').val("");
	$('#name').val("");
	$('#type').val("");
	$('#quantity').val("");
	$('#diameter').val("");
	$('#length').val("");
	//$('#pic').attr('src', 'pics/' + material.picture);
	$('#thickness').val("");
        $('#outdoor').val("");
        $('#colour').val("");
        $('#price').val("");
        
        
    findAll();
});


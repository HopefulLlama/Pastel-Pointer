var sizes = ['sm', 'md', 'lg'];
var cursors = ['normal select', 'help select', 'working in background', 'busy', 'precision select', 'text select', 'handwriting', 'unavailable', 'vertical resize', 'horizontal resize', 'diagonal resize 1', 'diagonal resize 2', 'move', 'alternate select', 'link select'];

var html = "";
html += '<table class="table table-bordered">';
html += '<tr><td>Cursor Name</td>';

sizes.forEach(function (size){
	html += '<td>' + size + '</td>';
});

html += '</tr>';

cursors.forEach(function (cursor){
	html += '<tr>';
	html += '<td class="cursorLeadCell capitalize">' + cursor + '</td>';
	sizes.forEach(function (size){
		html += '<td class="previewArea" data-cursor="'+cursor+'" data-size="'+size+'"></td>';
	});
});
html += '</table>';

$(window).load(function (event){
	$("#content").html(html);
	$(".previewArea").each(function (index){
		var cursor = $(this).attr("data-cursor");
		var size = $(this).attr("data-size");
		var url = size + "/png/" + cursor.replace(/ /g, "%20") + ".png";
		
		$(this).css("cursor", "url("+ url + "), auto");
		console.log($(this).css("cursor"));
	});
});
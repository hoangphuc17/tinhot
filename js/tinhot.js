$(function() {
    $('.calendar').pignoseCalendar({
    	date: moment(),
    	select: selectDate,

    });
});

function selectDate(){
	console.log("abod");
}
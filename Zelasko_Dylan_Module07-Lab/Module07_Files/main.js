function getQuote(){
	quoteContainer = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
	$(document).load(quoteContainer, function(resource){
		quoteContainer = JSON.parse(resource);
		$("#rsquote").text(quoteContainer);
	});
}

function getFox(){
	foxContainer ="https://randomfox.ca/floof/";
	$(document).load(foxContainer, function(resource){
		foxContainer = JSON.parse(resource);
		$("#jobfox").attr("src",foxContainer.image);
	});

}
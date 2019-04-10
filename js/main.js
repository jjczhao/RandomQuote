const updateQuote = (quote) =>{
    $('#text').html(quote.quote);
    $('#author').html(quote.author);
    $('#tweet-quote').prop('href','https://twitter.com/intent/tweet?hastags=quotes&text='+ '" '+ quote.quote +' "' + ' -' + quote.author);
}


const newQuote = () => {
    updateQuote(quotes[Math.floor(Math.random() * quotes.length)]);
}



$(document).ready(
    function(){
        $('#new-quote').click(newQuote);
        newQuote();
    }
);
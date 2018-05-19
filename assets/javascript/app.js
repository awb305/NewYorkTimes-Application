// Built by LucyBot. www.lucybot.com
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "eb8f997d084344e1bb820d9afaeb7f7f",
  'q': "north korea",
  'begin_date': "20150101",
  'end_date': "20180101",
  'page': 10
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});
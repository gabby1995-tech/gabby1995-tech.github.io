
var currentSaying = '';
  var saying = [' "I hate young people, that\'s why I listen to Frank Zappa "', ' *Talking to sister* Gabs: "I almost cried at Toy Story 4" Sister: "You\'re a pussy" ', ' "Who are the Pixies?"',
  '*Two annoying white girls talking to each other* Girl 1: "OMG are you excited that we\'re rooming together at college this fall?" Girl 2: "Totally, what should we do when we first check into the dorms?" Gabs: "I don\'t know, Les out?"',
  '"While I am a virgin, I\'m ready for the big leagues when I get down. I\'ve probably eclipsed a 1000 hours of watching porn, which are basically training videos"' ,
  '"Does Alton have black people?"' , '*Talking to friends from Alton* Gabs: "Do you guys have indoor plumbing in Alton?"', '"I equate jerking off to a drug addiction, I\'m just trying to chase the dragon of the first ejaculation I had when I was 13"',
  '"Have you ever eaten a bratwurst while laying on your bed?"', '"Would you guys ever pee on a girl if she told you to?"', '"You\'re as useless as a old civil war air conditioner"', '"Why don\'t we shower as a team?"', '"Can I be called Miroslav from now on instead of Gabs?"',];


function newQuote() {
  currentSaying = saying
[Math.floor(Math.random() * saying.length)];
$('#message').html(currentSaying);
$('#tweetQuote').attr('href', 'https://twitter.com/intent/tweet?text='+currentSaying).attr('target', '_blank');
}

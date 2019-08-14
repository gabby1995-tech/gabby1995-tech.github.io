
var currentSaying = '';
  var saying = [' "I hate young people, that\'s why I listen to Frank Zappa "', ' *Talking to sister* Gabs: "I almost cried at Toy Story 4" Sister: "You\'re a pussy" ', ' "Who are the Pixies?"',
  '*Two annoying white girls talking to each other* Girl 1: "OMG are you excited that we\'re rooming together at college this fall?" Girl 2: "Totally, what should we do when we first check into the dorms?" Gabs: "I don\'t know, Les out?"',
  '"While I am a virgin, I\'m ready for the big leagues when I get down. I\'ve probably eclipsed a 1000 hours of watching porn, which are basically training videos"' ,
  '"Does Alton have black people?"' , '*Talking to friends from Alton* Gabs: "Do you guys have indoor plumbing in Alton?"', '"I equate jerking off to a drug addiction, I\'m just trying to chase the dragon of the first ejaculation I had when I was 13"',
  '"Have you ever eaten a bratwurst while laying on your bed?"', '"Would you guys ever pee on a girl if she told you to?"', '"You\'re as useless as a old civil war air conditioner"', '"Why don\'t we shower as a team?"', '"Can I be called Miroslav from now on instead of Gabs?"',
  '"Would you ever date a hot girl if she was named Chubs?"', '*Gabs in 5th grade, yelling at teacher and principal* "This school sucks! Gold star school my ass!" *Yes he actually said that when he was 11 years old and got kicked out of school due to that*',
  '"Do you guys ever just enjoy the smell of your own balls?"', '*Tinder and Bumble bio quote* "Will eat ass" *Still doesn\'t get a match*', '"Yes ladies, I will eat ass, but there is one condition, I have to talk like Harry Caray while doing it"',
  '"I enjoy amateur porn"', '"I don\'t actually have a small penis, I just have a big FUPA"', '"I think Nurse Ratched from One Flew Over the Cuckoo\'s Nest is pretty hot"', '"Dear God, what did they do to Louise Fletcher?"',
  '*Gabs in 2nd grade Catholic school class* "I take drugs" *Teacher looks at him with horror* Gabs: "They\'re good drugs"',
  '"I\'m a ninja when it comes to watching porn, whenever I hear someone approaching the room, I flip up the underwear waistband and act like I\'m reading the online version of the Wall Street Journal"',
  '"Let me motorboat dem titties" *Gets kicked off of Bumble*', '"I just got beat by a 13 year old in 1 on 1 basketball. I feel like a guy with a small wiener...oh wait"',
  '"Chafing effects 99 percent of people over 240 pounds. The other 1 percent have the Golden Taint"', '"Is it depressing that I\'m waiting outside an ice hockey teammate\'s house in Tower Grove while looking at a half naked model\'s Bumble profile and getting aroused?"',
  '"Who hasn\'t masturbated to Aladdin?"', '"Enemy at the Gates has the most underrated sex scene in film history"',
  '"You guys ever seen the video of Chuck Berry farting into a hooker\'s mouth? I want a statue of that in the Delmar Loop"',
  '"Maybe I should be the first guy who can lick his own butthole"', '"My dick does smell funky, so I\'ll give you that"', '"I\'s turtleneck time bitches"',
  '"You couldn\'t hit titties while falling out of a boat when you shoot the puck"', '"Any of you like being pegged?',
  '"*Hot girl on Skype about to show Gabs her titties* Hot Girl: "Are you ready?" Gabs: "Yes!!!!!!" *Gabs starts jerking off* *Turns out the hot girl was a middle-eastern man who recorded him and blackmailed him for 1,000 bucks*',
  '"You guys ever watch the Whitezilla videos on Pornhub?"', '"Forrest Gump\'s mom was one fine looking piece of ass"',
  '"Wish I was named Chad right now. Need some love on Bumble"', '"You peasants, you\'re dealing with royalty in myself"',
  ];




function newQuote() {
  currentSaying = saying
[Math.floor(Math.random() * saying.length)];
$('#message').html(currentSaying);



}

		while( saying === currentSaying ) {
		 	currentSaying = Math.floor( Math.random() * saying.length );
		}

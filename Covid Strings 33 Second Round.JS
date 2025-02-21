doc.type html
script
html
head
utf8
viewport content=width=device-width,initial-scale=one
title covid strings33 second round bracket
filename=covid strings33 second round.js
highest remaining seed=(greatest remaining num value in covid strings list)
lowest remaining seed= (lowest remaining num value in covid strings list)
intermediate seed1=(first middle remaining value in covid strings list)
intermediate seed2=(second middle remaining value in covid strings list)
round=create element(div);
create round=covid strings33 second round 
round.class list.add(round);
for (let i = zero; i < teams.length; i += two) 
round.append child(create matchup(teams[i],teams[i+one]));
return round;
bracket.append child(create round(teams));
matchup1=(lowest remaining seed versus highest remaining seed)
matchup=document.create element(div);
matchup.class list.add(matchup);
matchup.inner html =div>${team1}</div><div>${team2}</div>;
return matchup;
matchup2=(intermediate seed two versus intermediate seed one)
matchup=document.create element(div);
matchup.class list.add(matchup);
matchup.inner html =div>${team1}</div><div>${team2}</div>;
return matchup;
java util.scanner
java.util
questions[]questions={
question16
question17
question18
question19
question20
question21
question22
question23
question24
question25
collections.shuffle(arrays.as list(questions)
advance teams=slice(current teams)
result=declare winner(matchup1)
if highest remaining seed score>=forty:
console.log(highest remaining seed advances)
else:
console.log(lowest remaining seed advances)
result=declare winner(matchup2)
if intermediate seed1 score>=forty:
console.log(intermediate seed1 advances)
else:
console.log(intermediate seed2 advances)
return filename

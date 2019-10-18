var scoreCard=document.getElementById('scoreCard');
var quizbox=document.getElementById('questionBox');
var option1=document.getElementById('option1');
var option2=document.getElementById('option2');
var option3=document.getElementById('option3');
var option4=document.getElementById('option4');

//Questions set-up
var app={
  questions:[
    {q:'When was HTML officially released?',options:[1995,1989,1986,2002],answer:1},
    {q:'On a cool night lit only by the orange glow of fire, we rushed to my grandfather’s home as his decades-old barn burned to the ground. The firemen let us stand nearby as they pumped water from the creek a quarter mile away. We watched the barn go up in flames, which stirred memories of jumping off foot-wide wooden beams into the hay below. The real sadness came as my elderly grandfather, who did not get out of bed, quietly asked if his cows were safe. He hadn’t had dairy cows in a dozen years. What was burning?',options:['Toes','Chickens','Cat','Barn'],answer:4},
    {q:'Who is this?<img src="images/pikachu.png height="10">',options:['Who cares','Pikachu','Mickey','CatDog'],answer:2},
    {q:'When was BootStrap 4 Beta 3 officially released?',options:[2089,2018,1986,1452],answer:2},
    {q:'A neighborhood kid with branches and leaves sticking out of his pockets and a headband came into our front yard. He looked like a little soldier in camouflage. “I’m acting like a tree so butterflies will come,” he said. As he waited on the grass, I brought out a huge blue preserved butterfly I’d purchased in Malaysia and hid it behind my back. I walked over, kneeled, pulled out the butterfly, and said, “A butterfly has come to see you.” He gasped, and his eyes widened. His wishes won’t always come true, but one did that day. What was the child pretending to be?',options:['Tree','Owl','Dollar','Crab'],answer:1},
  ],

  index:0,
  load:function(){
    quizbox.innerHTML=this.questions[this.index].q;
    option1.innerHTML=this.questions[this.index].options[0];
    option2.innerHTML=this.questions[this.index].options[1];
    option3.innerHTML=this.questions[this.index].options[2];
    option4.innerHTML=this.questions[this.index].options[3];

  },

  next:function(){
    this.index++;
    this.load();
  },

//function to check that questions are correct and are being counted
  check:function(ele){
    var id=ele.id.split('')
    if(id[id.length-1]==this.questions[this.index].answer){
      this.score++;
      ele.className="correct";
      ele.innerHTML="correct";
      this.scoreCard();
    }
    else {
      ele.className="wrong";
      ele.innerHTML="wrong";
    }
  },
  score:0,
  scoreCard:function(){
    scoreCard.innerHTML=this.questions.length+"/"+this.score;
  }

}
window.onload=app.load();

function button(ele){
  app.check(ele);
}

function next(){
  app.next();
}

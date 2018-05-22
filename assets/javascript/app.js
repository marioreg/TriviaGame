$("#start-button").on("click", function(){
    game.start();
})

$(document).on('click', '#end', function(){

    game.done();
})

var triviaQuestions =[{
question:"What actor plays Forrest Gump?",
answers:["Tom Hanks", "Tommy Lee Jones", "Javier Bardem"],
correctAnswer: "Tom Hanks"},

{
question:"What actor plays the Godfather?",
answers:["Tom Hanks", "Marlon Brando", "Javier Bardem"],
correctAnswer: "Marlon Brando"},

{
question:"What actor plays Iron Man?",
answers:["Tom Hanks", "Tommy Lee Jones", "Robert Downey Jr."],
correctAnswer: "Robert Downey Jr."},

{
question:"What actor plays The Gladiator?",
answers:["Tom Hanks", "Tommy Lee Jones", "Russell Crowe"],
correctAnswer: "Russell Crowe"}

];

var game = {

    correct:0,
    incorrect:0,
    counter:60,
    countdown:function(){
        game.counter--;
        $("#counter").html(game.counter);
        if(game.counter <= 0){

            console.log("time is up!");
            game.done();
        }
    },

    start:function(){
        timer= setInterval(game.countdown, 1000);
        $("#sub").prepend('<h3>Time remaining: <span id="counter">60</span> Seconds</h3>');
        $("#start-button").remove();
        for (var i=0; i<triviaQuestions.length; i++){
            $("#sub").append('<h3>'+ triviaQuestions[i].question +'</h3>');
            for(var j = 0; j < triviaQuestions[i].answers.length; j++){

                $("#sub").append("<input type= 'radio' name='question-" + i + "' value='" + triviaQuestions[i].answers[j] + "'>" +triviaQuestions[i].answers[j]);
        }

    }
    $("#sub").append('<br><button id="end">Submit answers</button>');
    },

    done:function(){

        $.each($("input[name='question-0']:checked"), function(){

            if ($(this).val() == triviaQuestions[0].correctAnswer){

                game.correct++;
            } else{

                game.incorrect++;
            }

        });

        $.each($("input[name='question-1']:checked"), function(){

            if ($(this).val() == triviaQuestions[1].correctAnswer){

                game.correct++;
            } else{

                game.incorrect++;
            }

        });

        $.each($("input[name='question-2']:checked"), function(){

            if ($(this).val() == triviaQuestions[2].correctAnswer){

                game.correct++;
            } else{

                game.incorrect++;
            }

        });

        $.each($("input[name='question-3']:checked"), function(){

            if ($(this).val() == triviaQuestions[3].correctAnswer){

                game.correct++;
            } else{

                game.incorrect++;
            }

        });

        this.result();

    },

        result: function(){

            clearInterval(timer);
            $("#sub").empty();

            $("#sub").html("<h2> All done!</h2>");
            $("#sub").append("<h3> Correct Answers: " + this.correct + "</h3>");
            $("#sub").append("<h3> Incorrect Answers: " + this.incorrect + "</h3>");
            $("#sub").append("<h3> Unanswered: " + (triviaQuestions.length - (this.incorrect + this.correct)) + "</h3>");
            console.log("done");
        }
    

}
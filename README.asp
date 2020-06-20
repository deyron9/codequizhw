<!DOCTYPE html>
<html>
    <head>
        <title> Deyron's Quiz </title>
        <link rel="stylesheet" href="quiz.css">
        <script src="quiz.js"></script>
        <link href="https://fonts.googleapis.com/css2?family=MuseoModerno:wght@100&display=swap" rel="stylesheet">
        
    </head>

    <body>
        <h1>How many can you guess right?</h1>

        <form id = quiz name = quiz></form>

        <p>What is the capital of Ohio</p>
        <input type="text" name="Question 1" id="textbox">

        <p>What is the capital of the state of New York</p>
        <input type="radio" name="Question 2" id="mc"   value="Albany">Albany<br>
        <input type="radio" name="Question 2" id="mc" value="Allbunny">Allbunny<br>
        <input type="radio" name="Question 2" id="mc" value="New York City">New York City<br>         
    
        <p>What Great Lake is near Ohio?
        </p>
        <input type="radio" name="Question 3" id="mc" value="Lake Erie">Lake Erie<br>
        <input type="radio" name="Question 3" id="mc" value="Lake Michigan">Lake Michigan<br>
         <input type="radio" name="Question 3" id="mc" value="Lake Militonka">Lake Militonka<br>

         <p>How many states are in the U.S.A</p>
         <input type="radio" name="Question 4" id="mc" value="52">52 <br>
         <input type="radio" name="Question 4" id="mc" value="37">37 <br>
         <input type="radio" name="Question 4" id="mc" value="50">50 <br>

         <input type="button" name="IM FINISHED" id="button" value="I'M FINISHED" onclick="check();">
    </body>
</html>

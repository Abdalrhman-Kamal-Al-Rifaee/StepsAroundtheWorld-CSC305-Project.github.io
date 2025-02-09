//this code is used to generate a quiz
//the goal of the quiz is to help the user to choose a country to travel to
//the user will answer 9 questions each with 4 possible answers
//each possible answer will add a weights to the final answer, 'decisionArray'

/*e.g. say user picked sequence AAAAAAAAA (A nine times)
question 1 (A): [5, 3, 1, 1, 0, 1, 1, 0, 0, 0, 5, 0, 5, 5, 0, 5, 5, 0]
question 2 (A): [5, 3, 1, 1, 0, 1, 1, 0, 0, 0, 5, 0, 5, 5, 0, 5, 5, 0]
question 3 (A): [5, 3, 1, 1, 0, 1, 1, 0, 0, 0, 5, 0, 5, 5, 0, 5, 5, 0]
question 4 (A): [5, 0, 1, 1, 0, 1, 0, 1, 0, 0, 5, 1, 5, 5, 0, 5, 5, 0]
question 5 (A): [3, 2, 1, 1, 3, 2, 3, 2, 3, 3, 2, 2, 2, 3, 3, 1, 1, 3]
question 6 (A): [3, 3, 0, 0, 3, 0, 2, 3, 0, 2, 3, 2, 2, 0, 3, 3, 2, 1]
question 7 (A): [2, 3, 0, 2, 3, 0, 2, 3, 2, 0, 0, 2, 2, 3, 2, 1, 3, 0]
question 8 (A): [3, 0, 3, 2, 2, 3, 0, 2, 0, 2, 0, 2, 3, 2, 0, 2, 2, 3]
question 9 (A): [3, 0, 2, 3, 3, 3, 2, 2, 3, 3, 3, 2, 3, 3, 3, 3, 3, 2]
decisionArray:  [34, 17, 10, 12, 14, 12, 12, 13, 8, 10, 28, 11, 32, 31, 11, 30, 31, 9]
the highest element in decisionArray is 34, the first number in the array, which corresponds to Egypt
so Egypt is the choice
*/

const questions = [
    "What type of landscape excites you the most?",
    "Which cuisine appeals to you the most?",
    "What kind of city experience do you enjoy?",
    "What kind of adventure sounds best?",
    "What climate do you prefer?",
    "What kind of cultural experience do you seek?",
    "What type of accommodation do you prefer?",
    "What kind of shopping experience excites you?",
    "What type of beach experience do you prefer?"
];
  
const answers = [
    ["Deserts and ancient wonders", "Lush oases and vibrant markets", "Mountains and wide-open landscapes", "Tropical jungles and exotic wildlife"],
    ["Rich spices and traditional stews", "Mediterranean flavors with fresh ingredients", "Savory meats and bold flavors", "Fresh seafood and tropical fruits"],
    ["Bustling cities with historic charm", "Coastal towns with a laid-back feel", "Modern cities with diverse cultures", "Remote, peaceful retreats"],
    ["Exploring ruins and ancient civilizations", "Trekking through mountain trails", "Diving into the ocean to see marine life", "Experiencing thrilling wildlife safaris"],
    ["Hot and dry, perfect for warm adventures", "Mild and breezy with seasonal changes", "Tropical, warm with occasional rain", "Cool and refreshing with crisp air"],
    ["Ancient traditions and spiritual sites", "Fusion of old and modern cultural experiences", "Indigenous heritage and natural beauty", "Art, music, and contemporary cultural scenes"],
    ["Luxury resorts with breathtaking views", "Traditional guesthouses with local charm", "Eco-lodges immersed in nature", "Cozy boutique hotels in the city center"],
    ["Handmade crafts and unique local souvenirs", "Luxury brands and designer fashion", "Bargain markets with endless treasures", "High-tech gadgets and innovative products"],
    ["Remote beaches with untouched nature", "Famous beaches with lively atmospheres", "Hidden coves with crystal-clear waters", "Long sandy shores perfect for surfing"]
];

const countries = [
    "Egypt", 
    "Morocco", 
    "Argentina", 
    "Uruguay",
    "Brazil", 
    "Belize", 
    "New Zealand", 
    "Palau", 
    "Japan", 
    "Thailand", 
    "India", 
    "Aruba",
    "Turkey",
    "Spain",
    "Netherlands", 
    "Qatar", 
    "UAE", 
    "Lebanon"
];

const answerWeights = [
    //each outer array corresponds to a question
    //each array of numbers corresponds to a possible answer
    //each number is a weight that corresponds to a country in the order of the 'countries' array
    /*Question 1*/[/*A*/[5,3,1,1,0,1,1,0,0,0,5,0,5,5,0,5,5,0], /*B*/[3,5,1,1,0,3,0,0,0,0,0,5,1,1,0,0,0,0], /*C*/[1,1,5,5,1,1,5,1,5,1,1,1,1,1,5,1,1,5], /*D*/[0,0,1,1,5,5,1,5,1,5,1,5,1,1,0,1,1,0]],
    /*Question 2*/[/*A*/[5,3,1,1,0,1,1,0,0,0,5,0,5,5,0,5,5,0], /*B*/[3,5,1,1,0,3,0,0,0,0,0,5,1,1,0,0,0,0], /*C*/[1,1,5,5,1,1,5,1,5,1,1,1,1,1,5,1,1,5], /*D*/[0,0,1,1,5,5,1,5,1,5,1,5,1,1,0,1,1,0]],
    /*Question 3*/[/*A*/[5,3,1,1,0,1,1,0,0,0,5,0,5,5,0,5,5,0], /*B*/[3,5,1,1,0,3,0,0,0,0,0,5,1,1,0,0,0,0], /*C*/[1,1,5,5,1,1,5,1,5,1,1,1,1,1,5,1,1,5], /*D*/[0,0,1,1,5,5,1,5,1,5,1,5,1,1,0,1,1,0]],
    /*Question 4*/[/*A*/[5,0,1,1,0,1,0,1,0,0,5,1,5,5,0,5,5,0], /*B*/[3,0,5,5,1,1,5,0,1,0,0,1,1,5,0,1,1,0], /*C*/[1,5,0,0,5,1,1,0,1,1,1,1,5,1,0,1,1,5], /*D*/[0,0,1,1,0,5,1,1,5,5,1,0,1,0,5,1,1,0]],
    /*Question 5*/[/*A*/[3,2,1,1,3,2,3,2,3,3,2,2,2,3,3,1,1,3], /*B*/[0,0,0,0,1,2,0,3,3,1,0,2,2,0,0,0,0,2], /*C*/[3,3,3,2,3,2,3,3,2,1,2,3,3,3,2,3,3,2], /*D*/[0,0,2,3,0,0,0,0,0,1,0,1,0,0,1,2,3,3]],
    /*Question 6*/[/*A*/[3,3,0,0,3,0,2,3,0,2,3,2,2,0,3,3,2,1], /*B*/[2,2,0,0,2,0,2,2,0,3,3,2,2,2,3,3,2,0], /*C*/[2,3,3,0,2,3,3,3,0,3,2,2,2,1,2,3,2,1], /*D*/[3,2,2,0,2,2,0,1,3,3,1,2,3,2,3,2,3,3]],
    /*Question 7*/[/*A*/[2,3,0,2,3,0,2,3,2,0,0,2,2,3,2,1,3,0], /*B*/[3,2,3,0,3,3,3,0,3,2,2,3,3,3,3,2,2,3], /*C*/[2,2,2,3,3,2,2,3,0,0,2,1,2,3,2,3,2,3], /*D*/[3,3,3,3,3,0,2,0,3,2,2,2,3,2,3,3,3,2]],
    /*Question 8*/[/*A*/[3,0,3,2,2,3,0,2,0,2,0,2,3,2,0,2,2,3], /*B*/[2,0,2,0,3,2,3,2,3,3,2,3,2,3,2,3,2,3], /*C*/[3,3,2,3,0,2,3,3,3,3,3,2,3,3,3,3,2,2], /*D*/[3,3,3,3,3,3,3,3,2,2,3,2,3,3,3,2,2,2]],
    /*Question 9*/[/*A*/[3,0,2,3,3,3,2,2,3,3,3,2,3,3,3,3,3,2], /*B*/[3,2,3,3,3,2,3,3,3,3,2,3,2,3,3,3,2,3], /*C*/[3,3,3,2,2,3,3,3,3,3,3,3,3,3,3,3,2,3], /*D*/[2,3,3,3,3,3,3,3,2,2,3,3,3,3,2,3,3,3]]
];

//this array carries the score for each country, starts at zero for all countries
var decisionArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const quizContainer = document.getElementById("quizContainer");

for(var i = 0; i < questions.length; i++){
    quizContainer.innerHTML += "<li><label>" + questions[i] + "</label><br>";

    for(var j = 0; j < answers[i].length; j++){
        quizContainer.innerHTML += "<div><input type='radio' name='question" + i + "' id='answer" +  i + j + "' value='" + answers[i][j] + "'>" + answers[i][j] + "</div><br>";
    }

    quizContainer.innerHTML += "</li>";
}

var button = document.getElementById("button");
button.addEventListener("click", checkAnswers);

//this function modifies array1
//adds each element of array2 to array1
function addArrayElements(array1, array2){
    if(array1.length == array2.length){
        for(var i = 0; i < array1.length; i++){
            array1[i] += array2[i];
        }
    }
}

//gives the index for the largest element in an array
//used to determine each country to choose
function indexForLargestArrayElement(array){
    var maxIndex = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i] > array[maxIndex]){
            maxIndex = i;
        }
    }
    return maxIndex;
}

//this function is used to determine the country of choice
//it goes through each possible input radio id and determines if it is checked or not
//if checked, it will the weight elements of the related array to the decisionArray
function checkAnswers(){
    for(var i = 0; i < questions.length; i++){
        for(var j = 0; j < answers[i].length; j++){
            if(document.getElementById("answer" + i + j).checked){
                addArrayElements(decisionArray, answerWeights[i][j]);
                break;
            }
        }
    }
    var index = indexForLargestArrayElement(decisionArray);
    document.getElementById("result").innerHTML = countries[index];
    decisionArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}
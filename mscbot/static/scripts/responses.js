function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    } else if (input == "Arsenal or Man utd") {
        return "Arsenal ofc ! The best team in the world"
    }

    // Simple responses
    if (input == "hello" || "hi") {
        return "Hello there! How can i help you?";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }

}
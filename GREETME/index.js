var messages = [
    "Hello World",
    "Hello Serverless",
    "It's a great day today",
    "Yay, I'm learnig someting new today",
    "On cloud nine",
    "Over the moon",
    "Shooting for the stars",
    "On top of the World",
    "World at my feet",
    "Doing everything I love"
]

exports.handler = async (event, context) => {
    let message =  messages[Math.floor(Math.random()*10)];
    console.error("An error ocurred");
    console.log("A log message");
    console.info("An informative message");
    console.warn("Warning message");
    return message;
}
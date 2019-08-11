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
    return message;
    let name = event.pathParameters.name;
    let {lang, ...info} = event.queryStringParameters || {};

    let message = `${greeting[lang] ? greeting[lang] : greeting['en'] } ${name}`;
    let response = {
        message: message,
        info: info,
        timestamp: moment().unix()
    }

    return {
        statusCode: 200,
        body: JSON.stringify(response)
    }
}
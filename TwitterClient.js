const {TwitterApi} = require("twitter-api-v2")

const client = new TwitterApi({
    appKey: 'm5JiPUqLYUR3xLvsl6Lfpn6Dc',
    appSecret: 'RJOWBPLQbuxSVmwsTSkUQYKJ0AztJa5Z0tzJdUFq9zuZfakpyj',
    accessToken: '1589523327219290114-9Pmi506xmXBtCkmQUITn2YRAk2kaex',
    accessSecret: 'Q8ZIwSbGt1qVu2Qp6GWKKZyawvZABA13pRLNw5V229LtD',
}) 

const rwClient = client.readWrite

module.exports = rwClient
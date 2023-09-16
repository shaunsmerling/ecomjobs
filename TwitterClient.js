const {TwitterApi} = require("twitter-api-v2")

const client = new TwitterApi({
    appKey: 'gmLBUHHMukLHNxxPu5vRhMAzY',
    appSecret: 'wM3ZnXlUuJJy0sSGk9OTQ2LpVqZKedvbbJqzdpej6uSXuvK0jb',
    accessToken: '1589523327219290114-F3p1G5CsbgSsqa9diPw1TokUjzB1HC',
    accessSecret: 'mGBgV54cr3Hnu8SGORT1EtZTfMk2GjJRgBM6nJPZ03zMQ',
}) 

const rwClient = client.readWrite

module.exports = rwClient
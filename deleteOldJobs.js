const { MongoClient } = require('mongodb');
require('dotenv').config();

async function deleteOldJobs() {
    const mongoURI = process.env.DB_URL;
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set the time to midnight for precise date comparison
    const thirtyDaysAgo = new Date(today);
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30); // Calculate 30 days ago

    const client = new MongoClient(mongoURI, { useUnifiedTopology: true });

    try {
        await client.connect();

        const db = client.db();
        const jobsCollection = db.collection('Job'); // Change 'Job' to your actual collection name

        const jobsToDelete = await jobsCollection.find({
            postedat: { $lt: thirtyDaysAgo.toLocaleDateString() },
        }).toArray();

        const deletedJobIds = [];

        for (const job of jobsToDelete) {
            // Convert the "postedat" date string to a JavaScript Date object
            const postedAtDate = new Date(job.postedat);

            // Check if the postedAtDate is before thirtyDaysAgo
            if (postedAtDate < thirtyDaysAgo) {
                // Add the job's _id to the list of jobs to be deleted
                deletedJobIds.push(job._id);
            }
        }

        const result = await jobsCollection.deleteMany({
            _id: { $in: deletedJobIds },
        });

        console.log(`${result.deletedCount} old jobs were deleted`);
    } finally {
        await client.close();
    }
}

deleteOldJobs();

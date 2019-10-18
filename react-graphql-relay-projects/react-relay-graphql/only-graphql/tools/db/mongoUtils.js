
let db;

let MongoUtils = (database) => {
    db = database;

    return {
        getLinks: async () => {
            if (!db) throw error;

            db.collection("links")
                .find({})
                .toArray((err, links) => {
                    if (err) throw err;
                    console.log(links);
                    return links;
                });

        }
    }
};

module.exports = MongoUtils();

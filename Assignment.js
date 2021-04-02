// 1.1.
db.movies.aggregate([{$unwind:"$genres"},{$group:{_id:"$genres", "average runtime": {$avg:"$runtime"}}},{$sort:{"average runtime":-1}},{$limit: 5}])

// 1.2.
db.movies.aggregate([{$match: {countries: "UK"}},{$unwind: "$countries"},{$match: {countries: {$ne: "UK"}}},{$group: {_id: "$countries","UK collaborations": {$sum: 1}}},{$match: {"UK collaborations": {$gte: 10}}}])



// 2.1.
db.movies.aggregate([{$unwind:"$genres"},{$match: {"genres":"Sport"}},{$count:"sportMovies"}])

// 2.2.
db.movies.aggregate([{$unwind:"$genres"},{$match: {"genres":"Sport"}},{$sort:{"imdb.rating":-1}}, {$limit:3}, {$project:{_id:0,title:1, year:1,"imdb.rating":1, "imdb.votes":1}}])



// 3.1.
db.movies.aggregate([{ $addFields : { "myRating" : { $add : [{ $multiply : [{ $avg : ["$imdb.rating", "$tomato.rating", { $multiply : ["$tomato.userRating", 2.0]}, { $multiply : ["$metacritic", 0.1]}]}, 7.5]}, { $multiply : ["$awards.wins", 0.1875]}, { $multiply : ["$awards.nominations", 0.0625]}]}}}, { $out : "movies"}])

// 3.2.
db.movies.aggregate([{$match : {"director" : "George Lucas"}}, {$sort : { "myRating" : -1.0}}, {$limit : 3.0},{$project : { "_id" : 0.0, "title" : 1.0, "director" : 1.0, "myRating" : 1.0}}])
# CSCU9YQ-NoSQL-Databases
This project was realized as a group assignment for the course CSCU9YQ at the University of Stirling.

Welcome! We hope you like movies as much as we do. You are given a dataset in JSON format containing information about a set of movies produced from the early 1900s until 2018.  The dataset includes features such as genre, year, countries, actors, director, description of the plot, etc, as well as awards, nominations and ratings according to three movie reviewing-aggregation websites: reviewing-aggregation websites: IMDb, Rotten Tomatoes, and Metacritic.  

You should use mongo shell commands for the queries. You can use either the find command or the aggregation framework, according to the characteristics of the query.

Reading the Dataset
You are provided with a JavaScript file: MovieData.js  download  that contains an insertMany command and thus creates a collection called ‘movies’ with the given data.
Using the load command from the mongo shell, you should be able to load the dataset. 
Structure of your Submission
Your submission will require two files:

A report (in doc or pdf format) which contains the following, for each question:
- A brief description of your strategy for designing a query to respond to the question. For example, indicating what fields you are using and what stages in the aggregation pipeline, and int what order.
- The query itself (ie. mongo code) in text form
- The results obtained by your query, in text form. Avoid using screenshots, as they are generally difficult to read! Instead, copy and paste the results of your queries in text form.
A text file with extension .js, with the mongo shell commands for your queries only, that is without results. Precede each query with a comment // in the file, indicating the number of the question (e.g.// Question 2.1). You can also add other comments to clarify your queries.

## Questions
#### Q1. General Queries [14 marks]<br>
- Compute the average duration of movies by genre,  and list the top 5 genres with the longest average duration. List the name of the genre and the average duration time sorted by time in decreasing order. [6 marks]<br>
- List all the countries that have produced 10 or more movies with the UK. List the country names and number of movies produced in collaboration with the UK, in no particular order. [8 marks]

#### Q2. Movies Related to Sports [14 marks]<br>
- Report the total number of movies you can find in the collection which are related to any type of sport(s). Report only the number of movies, not their details. [8 marks]<br>
- From the sport-related movies you found in part 1, list the top 3 that have received the highest IMDb  'rating'. List the movie title, the year, and both the IMDb 'rating' and the votes', sorted by the 'rating'. [6 marks] 

#### Q3. Rating and Recommending Movies [18 marks]<br>
This question is more open in nature than the first two. I expect different answers from different teams (students). The way to approach this question is left open to your creativity. <br>
- Create your own field named "myRating" and compute a movie score according to your design. The idea is to combine and aggregate the information about the quality of movies existing in the collection in a single number which will be your rating. [10 marks]<br>
- Using your newly created rating to rank movies, your task is to recommend 3 good movies according to the type of movies you enjoy watching.  Your preferences could be based on any movie characteristics such as genres, actors, topics, directors, years etc. [8 marks]

# Assignment 1 - ReactJS app.

Name: Georgia Swindley

## Features.
 
 + Feature 1 - Added ability to browse trending movies using "trending" selection in top menu
 + Feature 2 - Added ability to browse popular movies using "popular" selection in top menu
 + Feature 3 - Added ability to browse for movies now in theatres using "now playing" selection in top 
 menu
 + Feature 4 - Added ability to browse movie cast credits (throws inconsistent errors when interacted with)
 + Feature 5 - Attempted to add ability to browse for TV shows (not implemented in final version of app, but still in code)

## API Data Model.

..... List the additional TMDB endpoints used in your assignment, e.g.

+ https://api.themoviedb.org/3/trending/movie/week - get trending movies this week 
+ https://api.themoviedb.org/3/movie/now_playing - get movies now playing in theatres 
+ https://api.themoviedb.org/3/movie/popular - get popular movies 
+ https://api.themoviedb.org/3/tv/latest - get latest TV shows (in code only)
+ https://api.themoviedb.org/3/tv/{id} - view TV show in detail by its ID (in code only)
+ https://api.themoviedb.org/3/movie/{id}/credits - View cast credits for a movie 

## App Design.

### Component catalogue

![][storycast]
>Storybook structure changed to reflect addition of cast. 

### UI Design.

![][trending]
>Shows currently trending movies from the past week. 


![][nowplaying]
>Shows a list of movies currently playing in theatres.


![][popular]
>Shows a list of currently popular movies. In the API documentation, this has a similar function to latest (but is considered a separate entity by TMDB, just with usually similar views/results)

![][moviescast]
>Intended to show a movie's cast by actor name and character

## Routing.

+ /movies/popular (public) - displays currently popular movies.
+ /movies/now_playing (public) - displays movies now playing in theatres.
+ /trending/movies/week - displays movies trending in the past week.
+ /tv/latest - displays latest TV shows (in code only)
+ /tv/{id} - displays a TV show by its ID in more detail (in code only)
+ /movie/{id}/credits - displays a movie's cast by actor name and character

## Independent learning (If relevant).

+ Used TMDB API Documentation for project. 

---------------------------------

[model]: ./data.jpg
[trending]: ./public/trending.png
[nowplaying]: ./public/nowplaying.png
[popular]: ./public/popular.png
[moviescast]: ./public/moviescast.png
[storycast]: ./public/storycast.png
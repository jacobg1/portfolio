---
title: "Space Search"
repo: "https://github.com/jacobg1/space-search"
app: "http://space-search.surge.sh/"
order: 3
---

A search UI that pulls photos from NASA's image API. Users input search terms into the search bar and results are displayed below. Includes two different views, grid and list.

When the user inputs a serch term and hits Go, the front end makes a call to the back end which then makes a call to NASA's image API. Results are returned the backend, procesed and sent to the front end where they are then displayed.

The front end is built in [VueJS](https://vuejs.org/) with HTML, CSS and JavaScript. The back end is built in [express](https://expressjs.com/), a Node based JavaScript framework. Check out the Github repo for the back end [here](https://github.com/jacobg1/NasaSearch).

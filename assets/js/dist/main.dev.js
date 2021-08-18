"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// http://www.omdbapi.com/?apikey=af763ad3&i=tt3896198
// http://www.omdbapi.com/?apikey=af763ad3&i=tt1285016
// https://www.omdbapi.com/?apikey=294b52ec&i=tt1285016
var Omdb_Api_key = "af763ad3";
var app = Vue.createApp({
  data: function data() {
    return {
      search: '',
      // result:{"Search":[{"Title":"Batman Begins","Year":"2005","imdbID":"tt0372784","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"Batman v Superman: Dawn of Justice","Year":"2016","imdbID":"tt2975590","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"Batman","Year":"1989","imdbID":"tt0096895","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg"},{"Title":"Batman Returns","Year":"1992","imdbID":"tt0103776","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg"},{"Title":"Batman Forever","Year":"1995","imdbID":"tt0112462","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"},{"Title":"Batman & Robin","Year":"1997","imdbID":"tt0118688","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg"},{"Title":"The Lego Batman Movie","Year":"2017","imdbID":"tt4116284","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"},{"Title":"Batman: The Animated Series","Year":"1992–1995","imdbID":"tt0103359","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg"},{"Title":"Batman: Under the Red Hood","Year":"2010","imdbID":"tt1569923","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNmY4ZDZjY2UtOWFiYy00MjhjLThmMjctOTQ2NjYxZGRjYmNlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},{"Title":"Batman: The Dark Knight Returns, Part 1","Year":"2012","imdbID":"tt2313197","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg"}],"totalResults":"437","Response":"True"},
      result: {},
      // details:{"Title":"Batman Begins","Year":"2005","Rated":"PG-13","Released":"15 Jun 2005","Runtime":"140 min","Genre":"Action, Adventure","Director":"Christopher Nolan","Writer":"Bob Kane, David S. Goyer, Christopher Nolan","Actors":"Christian Bale, Michael Caine, Ken Watanabe","Plot":"When his parents are killed, billionaire playboy Bruce Wayne relocates to Asia, where he is mentored by Henri Ducard and Ra's Al Ghul in how to fight evil. When learning about the plan to wipe out evil in Gotham City by Ducard, Bruce prevents this plan from getting any further and heads back to his home. Back in his original surroundings, Bruce adopts the image of a bat to strike fear into the criminals and the corrupt as the icon known as &quot;Batman&quot;. But it doesn't stay quiet for long.","Language":"English, Mandarin","Country":"United Kingdom, United States","Awards":"Nominated for 1 Oscar. 13 wins & 79 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.2/10"},{"Source":"Rotten Tomatoes","Value":"84%"},{"Source":"Metacritic","Value":"70/100"}],"Metascore":"70","imdbRating":"8.2","imdbVotes":"1,334,626","imdbID":"tt0372784","Type":"movie","DVD":"09 Sep 2009","BoxOffice":"$206,852,432","Production":"Warner Brothers, Di Bonaventura Pictures","Website":"N/A","Response":"True"},
      details: {},
      showModal: false,
      type: '',
      year: '',
      fav_list: [],
      showPanel: false,
      fav_icon: '&star;',
      page: 1,
      rowView: false,
      search_history: []
    };
  },
  created: function created() {
    this.fav_list = localStorage.getItem('fav_movie') != null ? JSON.parse(localStorage.getItem('fav_movie')) : [];
    this.search_history = localStorage.getItem('history') != null ? JSON.parse(localStorage.getItem('history')) : [];
  },
  methods: {
    searchMovie: function searchMovie(e) {
      var _this = this;

      e.preventDefault();

      if (this.search !== '') {
        if (this.search_history.indexOf(this.search.toLowerCase()) == -1) {
          if (this.search_history.length === 5) {
            this.search_history.pop();
          }

          this.search_history.unshift(this.search.toLowerCase());
          localStorage.setItem('history', JSON.stringify(this.search_history));
        }

        this.page = 1;
        axios.get('https://www.omdbapi.com/?apikey=' + Omdb_Api_key + '&s=' + this.search + '&type=' + this.type + '&y=' + this.year + '&page=' + this.page).then(function (resp) {
          _this.changeStar(resp.data);
        });
      } else {
        console.warn("Enter search request");
      }
    },
    goToPage: function goToPage(new_page) {
      var _this2 = this;

      this.page = new_page;
      axios.get('https://www.omdbapi.com/?apikey=' + Omdb_Api_key + '&s=' + this.search + '&type=' + this.type + '&y=' + this.year + '&page=' + this.page).then(function (resp) {
        _this2.changeStar(resp.data);
      });
    },
    changeStar: function changeStar(rez) {
      var _this3 = this;

      var rds = rez.Search;

      var _loop = function _loop(i) {
        var ind = _this3.fav_list.findIndex(function (el) {
          return el.imdbID === rds[i].imdbID;
        });

        if (ind != -1) {
          rds[i].inFav = true;
        } else {
          rds[i].inFav = false;
        }
      };

      for (var i = 0; i < rds.length; i++) {
        _loop(i);
      }

      this.result.Search = rds;
      this.result.totalResults = parseInt(rez.totalResults);
    },
    detail: function detail(imdbID) {
      var _this4 = this;

      axios.get('https://www.omdbapi.com/?apikey=' + Omdb_Api_key + '&i=' + imdbID + '&plot=full').then(function (resp) {
        console.log(resp.data);
        _this4.details = resp.data;
        _this4.showModal = true;
      });
    },
    toggleFav: function toggleFav(imdbID) {
      if (this.fav_list.length != 0) {
        var ind = this.fav_list.findIndex(function (el) {
          return el.imdbID === imdbID;
        });

        if (ind != -1) {
          this.fav_list.splice(ind, 1);
        } else {
          var favItem = this.result.Search.find(function (el) {
            return el.imdbID === imdbID;
          });
          this.fav_list.push(favItem);
        }
      } else {
        var _favItem = this.result.Search.find(function (el) {
          return el.imdbID === imdbID;
        });

        this.fav_list.push(_favItem);
      }

      this.changeStar(this.result);
      localStorage.setItem('fav_movie', JSON.stringify(this.fav_list));
    },
    closePanel: function closePanel() {
      this.showPanel = false;
    },
    reset: function reset() {
      return this.search = '', this.year = '', this.result = {}, this.type = '';
    }
  }
});
app.component('movie-ratings', {
  props: ['ratings'],
  data: function data() {
    return {
      ratings_list: []
    };
  },
  watch: {
    ratings: function ratings(new_val) {
      this.ratings_list = _typeof(new_val) === 'object' ? new_val : [];

      for (var i = 0; i < this.ratings_list.length; i++) {
        switch (this.ratings_list[i].Source) {
          case 'Internet Movie Database':
            this.ratings_list[i].Width = 100 - parseFloat(this.ratings_list[i].Value.split('/')[0]) * 10;
            break;

          case 'Rotten Tomatoes':
            this.ratings_list[i].Width = 100 - parseInt(this.ratings_list[i].Value);
            break;

          case 'Metacritic':
            this.ratings_list[i].Width = 100 - parseInt(this.ratings_list[i].Value.split('/')[0]);
            break;
        }
      }
    }
  },
  template: '#ratings_list'
});
app.component('fav_panel', {
  props: ['list', 'show'],
  methods: {
    detail: function detail(imdbID) {
      this.$parent.detail(imdbID);
    },
    closePanel: function closePanel() {
      this.$parent.closePanel();
    },
    toggleFav: function toggleFav(imdbID) {
      this.$parent.toggleFav(imdbID);
    }
  },
  template: '#fav_panel'
});
app.component('pagination', {
  props: ['page', 'total_items'],
  data: function data() {
    return {
      total_pages: 1,
      per_page: 10
    };
  },
  // mounted(){
  //     this.total_pages = Math.ceil(this.total_items/this.per_page);
  // },
  watch: {
    total_items: function total_items(new_val) {
      this.total_pages = Math.ceil(new_val / this.per_page);
    }
  },
  template: '#pagination',
  methods: {
    goToPage: function goToPage(num) {
      this.$parent.goToPage(num);
    },
    goToPrev: function goToPrev() {
      this.$parent.goToPage(this.page - 1);
    },
    goToNext: function goToNext() {
      this.$parent.goToPage(this.page + 1);
    }
  }
});
app.mount('#app');
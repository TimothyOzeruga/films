"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var News =
/*#__PURE__*/
function () {
  function News(news_list) {
    _classCallCheck(this, News);

    this.news_list = news_list;
  }

  _createClass(News, [{
    key: "add",
    value: function add(title, content, tags) {
      if (title !== '' && content !== '' && tags !== '') {
        var arrTags = tags.split(", ");

        for (var i = 0; i < arrTags.lenght; i++) {
          arrTags[i] = arrTags[i].trim();
        }

        this.news_list.push({
          title: title,
          content: content,
          tags: arrTags,
          date: new Date().getTime()
        });
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "print",
    value: function print($el) {
      var rez = '';

      for (var i = 0; i <= this.count; i++) {
        var $one_news = this.news_list[i];
        var news_date = new Date($one_news.date);
        var date = news_date.getDate() + '/' + (news_date.getMonth() + 1) + '/' + news_date.getFullYear();
        rez += "\n            <div class=\"news_item\">\n                <h3>".concat($one_news.title, "</h3>\n                <div>").concat(date, "</div>\n                <p>").concat($one_news.content, "</p>\n            </div>\n            <hr>");
      }

      $el.innerHTML = rez;
    }
  }, {
    key: "count",
    get: function get() {
      return this.news_list.length;
    }
  }]);

  return News;
}();
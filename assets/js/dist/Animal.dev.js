"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Animal =
/*#__PURE__*/
function () {
  function Animal(options) {
    _classCallCheck(this, Animal);

    this.name = options.name;
    this.color = options.color;
    this.age = options.age;
  }

  _createClass(Animal, [{
    key: "nameInfo",
    get: function get() {
      return this.name;
    }
  }, {
    key: "ageInfo",
    set: function set(newAge) {
      this.age = newAge;
    },
    get: function get() {
      return this.newAge;
    }
  }]);

  return Animal;
}();
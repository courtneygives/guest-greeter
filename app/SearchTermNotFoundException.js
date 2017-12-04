
module.exports =
function SearchTermNotFoundException(value) {
   this.value = value;
   this.message = ' was not found!';
   this.toString = function() {
      return this.value + this.message;
   };
};

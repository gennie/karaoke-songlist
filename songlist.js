var songlist = angular.module("SonglistApp", ['ui.keypress']);

songlist.controller("listController", ["$scope", "Songs", "searchFilter", function($scope, Songs, searchFilter) {
  $scope.test = "test";

  $scope.songList = Songs;

  $scope.predicate = "title";

  $scope.filterSongs = function(searchText) {
    $scope.songList = searchFilter(Songs, searchText);
  };
}]);

songlist.filter("search", function() {
  return function(songList, text) {
    return _.filter(songList, function(song) {
      var re = new RegExp(text, 'i');
      return !text || re.test(song.title) || re.test(song.artist);
    });
  };
});
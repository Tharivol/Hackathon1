angular.module("NflStats", [])
    .controller("NflController", function($http) {
    var nfl = this;
    nfl.users = [];
nfl.getTeam = function(){
        console.log("Getting team")
        $http.get('http://NflArrest.com/api/v1/team/arrests/'+ nfl.team).then(
        function(res){
            nfl.users = res.data;
            // add array.length to top of field
            // nfl.team_name = res.data.team_name;
            // nfl.date = res.data.date;
            // nfl.name= res.data.name ;
            console.log(res.data);
            },
        function(err) {
            console.log(err)
            }); 
}
nfl.getPosition = function(){
        $http.get('http://NflArrest.com/api/v1/position/arrests/'+ nfl.position).then(
        function(res){
            nfl.users= res.data;
            // add array.length to field    
            console.log(res.data);
            },
        function(err) {
            console.log(err)
            });
    }
nfl.getPlayer = function () {
        $http.get('http://NflArrest.com/api/v1/player/arrests/' + nfl.name).then(
        function(res){
            nfl.users = res.data;
            // nfl.name = res.data.Name;
            // nfl.team = res.data.team;
            // nfl.team_name = res.data.team_name;
            // nfl.date = res.data.date;
            // nfl.encouter= res.data.encouter;
            // nfl.description = res.data.description;
            // nfl.outcome = res.data.outcome;
            console.log(res.data);
            },
        function(err) {
            console.log(err)
            });
    }
});
var mod = angular.module('purdueSC.services.listService', []);

mod.service('ListService', function(){
   	var self = {
		getList: function (listId) {
			return _.find(self.lists, {"listid": listId});
		},
    lists:[
    {   "listid": 1,
        "name": "Agricultraul and Biological Engineering",
         "latitude": 40.421879,
         "longtitude": -86.916516

    },
    {
        "listid": 2,
        "name": "Biochemistry Building",
        "latitude": 40.423006,
        "longtitude": -86.916346
    },
    {
        "listid": 3,
        "name": "Electrical Engineering Building",
        "latitude" : 40.428826,
        "longtitude" : -86.911975
    }, 
    {
        "listid": 4,
        "name": "Elliott HAll of Music",
        "latitude" : 40.427878,
        "longtitude" : -86.914971
    }, 
    {
        "listid": 5,
        "name": "Lawson Computer Science Building",
        "latitude": 40.4277720,
        "longtitude" : -86.916943
    }, 
    {
        "listid": 6,
        "name": "Mackey Arena",
        "latitude" : 40.433299,
        "longtitude" : -86.916048
    }, 
    {
        "listid": 7,
        "name": "Physics Building",
        "latitude" : 40.430140,
        "longtitude" : -86.913089
    }, 
    {
        "listid": 8,
        "name": "Purdue Memorial Union(PMU)",
        "latitude" : 40.424699,
        "longtitude" : -86.911415
    }, 
    {
        "listid": 9,
        "name": "Recitation Building",
        "latitude" : 40.425775,
        "longtitude" : -86.915161
    }, 
    {
        "listid": 10,
        "name": "Stewart Center",
        "latitude" : 40.425055,
        "longtitude" : -86.912651
    }, 
    {
        "listid": 11,
        "name": "Beering Hall of Liberal Arts and Education",
        "latitude" : 40.425562,
        "longtitude" : -86.916211
    }, 

    {
        "listid": 12,
        "name": "Wetherill Laboratory of Chemistry",
        "latitude" : 40.426423,
        "longtitude" : -86.913066
    }, 
    {
        "listid": 13,
        "name": "Cary Quadrangle",
        "latitude" : 40.432006,
        "longtitude" : -86.917922
    }, 

    {
        "listid": 14,
        "name": "Krannert Building",
        "latitude" : 40.423738,
        "longtitude" : -86.910824
    }, 
    {
        "listid": 15,
        "name": "Neil Armstrong Hall of Engineering",
        "latitude" : 40.430981,
        "longtitude" : -86.914870
    }, 

    ]

    };
    return self;
});
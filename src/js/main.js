import angular from 'angular';
import  './chart.min.js';
import './angular-chart.js';

angular.module('app',['chart.js'])
        .controller('MainController', function($scope){
 
  // this is the only way it works
  $scope.colors = ["#9FCC00","#FA6D21","#9a9a9a","#E9B145","#62A073","#FA605D"];
  $scope.colorTest = [
  {
    backgroundColor: "rgba(159,204,0,0.2)",
    borderColor: "rgba(159,204,0,1)",
    pointBackgroundColor: "rgba(159,204,0,1)",
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "rgba(159,204,0,0.8)",
    pointHoverBorderColor: "rgba(159,204,0,1)"
  },
  {
    backgroundColor: "rgba(250,109,33,0.2)",
    borderColor: "rgba(250,109,33,1)",
    pointBackgroundColor: "rgba(250,109,33,1)",
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "rgba(250,109,33,0.8)",
    pointHoverBorderColor: "rgba(250,109,33,1)"      
  },
  {
    backgroundColor: "rgba(154,154,154,0.2)",
    borderColor: "rgba(154,154,154,1)",
    pointBackgroundColor: "rgba(154,154,154,1)",
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "rgba(154,154,154,0.8)",
    pointHoverBorderColor: "rgba(154,154,154,1)"
  }
  ];
  //no longer black, but colours change on every refresh, so this seems ignored
  //chart.js docs seemed to indicate this uses a color array, but only hex notation seems to work here. What about specifying specific rgba colours?
  $scope.arrayColors = [
    "rgba(77,83,96,0.5)",
    "rgba(253,180,92,0.5)",
    "rgba(175, 101, 255,0.5)",
    "rgba(255, 40, 44, 0.5)",
    "rgba(96, 255, 173, 0.5)",
    "rgba(220,220,220,0.5)"
  ];
  // same behaviour as above
  $scope.arrayColors2 = [
    {
      backgroundColor: [
        "rgba(77,83,96,0.5)",
        "rgba(253,180,92,0.5)",
        "rgba(175, 101, 255,0.5)",
        "rgba(255, 40, 44, 0.5)",
        "rgba(96, 255, 173, 0.5)",
        "rgba(220,220,220,0.5)"
      ],
      hoverBackgroundColor: [
        "rgba(77,83,96,0.5)",
        "rgba(253,180,92,0.5)",
        "rgba(175, 101, 255,0.5)",
        "rgba(255, 40, 44, 0.5)",
        "rgba(96, 255, 173, 0.5)",
        "rgba(220,220,220,0.5)"
      ]
    }
  ]
  $scope.newColors = [//still black pie. Followed chart.js docs for new property names
    { // light blue
        backgroundColor: "#9FCC00",//hex makes no difference
        borderColor: "#9FCC00",
        hoverBackgroundColor: "#9FCC00"
    },
    { // yellow
        backgroundColor: "rgba(253,180,92,0.2)",//this is the desired color format
        borderColor: "rgba(253,180,92,1)",
        hoverBackgroundColor: "rgba(253,180,92,0.5)"
    },
    { // purple
        backgroundColor: "rgba(175, 101, 255,0.2)",
        borderColor: "rgba(175, 101, 255,1)",
        hoverBackgroundColor: "rgba(175, 101, 255,0.5)"
    }
  ];
  $scope.oldColors = [//causes black pie, used to work before
    { // light blue
        highlightFill: "rgba(102, 175, 249, 0.2)",
        strokeColor: "rgba(102, 175, 249, 1)",
        pointColor: "rgba(102, 175, 249, 1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,0.5)"
    },
    { // yellow
        highlightFill: "rgba(253,180,92,0.2)",
        strokeColor: "rgba(253,180,92,1)",
        pointColor: "rgba(253,180,92,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(253,180,92,0.5)"
    },
    { // purple
        highlightFill: "rgba(175, 101, 255,0.2)",
        strokeColor: "rgba(175, 101, 255,1)",
        pointColor: "rgba(175, 101, 255,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(175, 101, 255,0.5)"
    }
  ];
  $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.data = [300, 500, 100];

  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };

});
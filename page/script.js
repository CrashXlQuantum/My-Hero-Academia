function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

$('.dropdown').on('click', '.dropdown-content > main', function(e) {
    e.preventDefault();
    e.stopPropagation();
});

              $( function() {
        $( "#slider1" ).slider({
        animate: "slow",
        max: "10",
        values: ["0"],
        slide: function(event, ui){
            $("#res1").text(ui.values[0]);
        }
    });
      });


                  $( function() {
        $( "#slider2" ).slider({
        animate: "slow",
        max: "10",
        values: ["0"],
        slide: function(event, ui){
            $("#res2").text(ui.values[0]);
        }
    });
      });

                  $( function() {
        $( "#slider3" ).slider({
        animate: "slow",
        max: "10",
        values: ["0"],
        slide: function(event, ui){
            $("#res3").text(ui.values[0]);
        }
    });
      });

                      $( function() {
        $( "#slider4" ).slider({
        animate: "slow",
        max: "10",
        values: ["0"],
        slide: function(event, ui){
            $("#res4").text(ui.values[0]);
        }
    });
      });

                          $( function() {
        $( "#slider5" ).slider({
        animate: "slow",
        max: "10",
        values: ["0"],
        slide: function(event, ui){
            $("#res5").text(ui.values[0]);
        }
    });
      });

                      $( function() {
        $( "#slider6" ).slider({
        animate: "slow",
        max: "10",
        values: ["0"],
        slide: function(event, ui){
            $("#res6").text(ui.values[0]);
        }
    });
      });

                      $( function() {
        $( "#slider7" ).slider({
        animate: "slow",
        max: "10",
        values: ["0"],
        slide: function(event, ui){
            $("#res7").text(ui.values[0]);
        }
    });
      });
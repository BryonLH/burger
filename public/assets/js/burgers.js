// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  // $(".devour-button").click(function(event) {
  //   event.preventDefault();
  //   let id = $(this).attr("data-id");
  //   $.ajax(`/api/burgers/${id}`, {
  //     type: "PUT"
  //   }).then(
  //     function() {
  //       console.log(`Item devoured!!`);
  //       location.reload();
  //     }
  //   )
  // });

  $(".devour-button").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");

    var newDevourState = {
      devour: newDevour
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed Devoured to", newDevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-cat").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/cats/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted cat", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});

// code for adding todo

$("#addTaskBtn").on("click", function (e) {
  e.preventDefault();
  const taskInput = $("#taskInput").val().trim();
  const personName = $("#assigneeInput").val().trim();

  if (taskInput !== "" && personName !== "") {
    // Remove error class from inputs
    $('form input[type="text"]').removeClass("error");

    const task = $("#taskBtn").contents().clone(true);
    task.find(".taskTxt").text(taskInput);
    task.find(".personName").text(personName);
    // removing the userInputs
    $("#taskInput").val("");
    $("#assigneeInput").val("");
    $("#taskContainer").prepend(task);
  } else {
    // Add error class to empty inputs
    $('form input[type="text"]').each(function () {
      if ($(this).val().trim() === "") {
        $(this).addClass("error");
      }
    });
  }
});

// code for deleting task

$("#taskContainer").on("click", "img", function (e) {
  $(this)
    .closest("button.todo")
    .fadeOut("fast", function () {
      return $(this).remove();
    });
});
// code for toggling complete or uncomplete calss
$("#taskContainer").on("click", function (e) {
  const targetTag = e.target.tagName;

  if (targetTag === "DIV" || targetTag === "SPAN") {
    $(e.target.parentElement).toggleClass("active");
  } else {
    $(e.target).toggleClass("active");
  }
});
// for filtering tasks
$("#searchTask").on("input", function () {
  const searchTxt = $("#searchTask").val().trim().toLowerCase();

  $("#taskContainer .todo").filter(function () {
    const taskTxt = $(this).find(".taskTxt").text().trim().toLowerCase();
    const personName = $(this).find(".personName").text().trim().toLowerCase();

    if (taskTxt.includes(searchTxt) || personName.includes(searchTxt)) {
      $(this).show(function () {
        $(this).addClass("match"),
          setTimeout(() => {
            $(this).removeClass("match");
          }, 1000);
      });
    } else {
      $(this).hide(function () {
        $(this).removeClass("match");
      });
    }
  });
});

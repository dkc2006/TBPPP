document.addEventListener("DOMContentLoaded", function () {
  const timetableCells = document.querySelectorAll(".clickable");
  const teacherDetailsDiv = document.getElementById("teacherDetails");
  const teacherNameElement = document.getElementById("teacherName");
  const subjectNameElement = document.getElementById("subjectName");

  // Add click event to each timetable cell
  timetableCells.forEach((cell) => {
    cell.addEventListener("click", () => {
      const teacher = cell.getAttribute("data-teacher");
      const subject = cell.innerText;

      // Show the teacher details
      teacherNameElement.innerText = `Teacher: ${teacher}`;
      subjectNameElement.innerText = `Subject: ${subject}`;
      teacherDetailsDiv.style.display = "block";
    });
  });
});

// Function to go back to the timetable view
function goBack() {
  document.getElementById("teacherDetails").style.display = "none";
}

const aCourse = {
    code: "CSE121b",
    name: "JavaScript Language",
    sections: [
      {
        sectionNum: 1,
        roomNum: "STC 353",
        enrolled: 26,
        days: "TTh",
        instructor: "Bro T",
      },
      {
        sectionNum: 2,
        roomNum: "STC 347",
        enrolled: 25,
        days: "TTh",
        instructor: "Sis A",
      },
    ],
  
    changeEnrollment: function (sectionNum, add = true) {
      // Convert sectionNum to a number to ensure correct comparison
      sectionNum = Number(sectionNum);
  
      // Find the section using find()
      const section = this.sections.find((s) => s.sectionNum === sectionNum);
      if (section) {
        if (add) {
          section.enrolled++;
        } else if (section.enrolled > 0) {
          section.enrolled--;
        }
        renderSections(this.sections);
      } else {
        alert("Section not found! Please enter a valid section number.");
      }
    },
  };
  
  // Function to set course info
  function setCourseInfo(course) {
    document.querySelector("#courseName").textContent = course.name;
    document.querySelector("#courseCode").textContent = course.code;
  }
  
  // Function to render sections
  function renderSections(sections) {
    const sectionsTable = document.querySelector("#sections");
    sectionsTable.innerHTML = sections
      .map(
        (section) => `<tr>
          <td>${section.sectionNum}</td>
          <td>${section.roomNum}</td>
          <td>${section.enrolled}</td>
          <td>${section.days}</td>
          <td>${section.instructor}</td>
        </tr>`
      )
      .join("");
  }
  
  // Event listeners for enroll and drop buttons
  document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    if (sectionNum) {
      aCourse.changeEnrollment(sectionNum);
    } else {
      alert("Please enter a section number.");
    }
  });
  
  document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    if (sectionNum) {
      aCourse.changeEnrollment(sectionNum, false);
    } else {
      alert("Please enter a section number.");
    }
  });
  
  // Initialize course info and sections on page load
  setCourseInfo(aCourse);
  renderSections(aCourse.sections);
  
  export default aCourse;
  
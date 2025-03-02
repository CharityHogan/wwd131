const aCourse = {
    code: "CSE121b",
    name: "JavaScript Language",
    sections: [
        {
            sectionNum: 1,
            roomNum: "STC 353",
            enrolled: 26,
            days: "TTh",
            instructor: "Bro T"
        },
        {
            sectionNum: 2,
            roomNum: "STC 347",
            enrolled: 25,
            days: "TTh",
            instructor: "Sis A"
        }
    ]
};

// Function to display course name and code
function setCourseInfo(course) {
    document.querySelector("#courseName").textContent = course.name;
    document.querySelector("#courseCode").textContent = course.code;
}

// Function to create a table row for each section
function sectionTemplate(section) {
    return `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td>
    </tr>`;
}

// Function to render sections in the table
function renderSections(sections) {
    document.querySelector("#sections").innerHTML = sections.map(sectionTemplate).join("");
}

// Initialize page
setCourseInfo(aCourse);
renderSections(aCourse.sections);

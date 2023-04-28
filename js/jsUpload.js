// let projectName = document.getElementById("projectName");
// let projectGithub = document.getElementById("projectGithub");
// let projectLink = document.getElementById("projectLink");
// let projectAbout = document.querySelector(".projectAbout");
// let projectImg = document.getElementById("projectImg");
// let saveProject = document.querySelector(".saveProject");

// let saveData;
// saveProject.addEventListener("click", () => {
//     const data = {
//         projectName: projectName.value,
//         projectGithub: projectGithub.value,
//         projectLink: projectLink.value,
//         projectAbout: projectAbout.value,
//         projectImg: projectImg.value,
//     }
//     saveData = data;
//     localStorage.setItem("projectData", JSON.stringify(saveData));
// });


let projectName = document.getElementById("projectName");
let projectGithub = document.getElementById("projectGithub");
let projectLink = document.getElementById("projectLink");
let projectAbout = document.querySelector(".projectAbout");
let projectImg = document.getElementById("projectImg");
let saveProject = document.querySelector(".saveProject");
let projectFileInput = document.getElementById("projectFileInput");

let saveData;

saveProject.addEventListener("click", () => {
    const data = {
        projectName: projectName.value,
        projectGithub: projectGithub.value,
        projectLink: projectLink.value,
        projectAbout: projectAbout.value,
        projectImg: projectImg.value,
    };
    saveData = data;
    localStorage.setItem("projectData", JSON.stringify(saveData));
});

projectFileInput.addEventListener("change", () => {
    const file = projectFileInput.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        const data = {
            projectName: projectName.value,
            projectGithub: projectGithub.value,
            projectLink: projectLink.value,
            projectAbout: projectAbout.value,
            projectImg: reader.result,
        };
        saveData = data;
        localStorage.setItem("projectData", JSON.stringify(saveData));
    };
});
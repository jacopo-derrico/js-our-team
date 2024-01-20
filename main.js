let teamHTML = document.getElementById('team');
let team = [ 
   {
     name: "Wayne Barnett",
     role: "Founder & Ceo",
     picture: "wayne-barnett-founder-ceo.jpg"
   },
   {
     name: "Angela Caroll",
     role: "Chief Editor",
     picture: "angela-caroll-chief-editor.jpg"
   },
   {
     name: "Walter Gordon",
     role: "Office Manager",
     picture: "walter-gordon-office-manager.jpg"
   },
   {
     name: "Angela Lopez",
     role: "Social Media Manager",
     picture: "angela-lopez-social-media-manager.jpg"
   },
   {
     name: "Scott Estrada",
     role: "Developer",
     picture: "scott-estrada-developer.jpg"
   },
   {
     name: "Barbara Ramos",
     role: "Graphic Designer",
     picture: "barbara-ramos-graphic-designer.jpg"
   },
];

console.log(team)

for (let i = 0; i < team.length; i++) {
    let member = team[i];
    console.log(member.name)
    console.log(member.role)
    console.log(member.picture)

    teamHTML.innerHTML += `<div class="card flex"> 
    <figure><img src="./img/${member.picture}">
    </figure>
    <h3>${member.name}</h3>
    <h5>${member.role}</h5> 
    </div>
    `
}
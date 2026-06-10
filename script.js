let leads = JSON.parse(localStorage.getItem("leads")) || [];

function saveData(){
localStorage.setItem("leads", JSON.stringify(leads));
}

function displayLeads(){

let table = document.getElementById("leadTable");

table.innerHTML="";

leads.forEach((lead,index)=>{

table.innerHTML += `
<tr>
<td>${lead.name}</td>
<td>${lead.email}</td>
<td>${lead.source}</td>

<td>
<select onchange="changeStatus(${index},this.value)">
<option ${lead.status=="New"?"selected":""}>New</option>
<option ${lead.status=="Contacted"?"selected":""}>Contacted</option>
<option ${lead.status=="Converted"?"selected":""}>Converted</option>
</select>
</td>

<td>${lead.notes}</td>

<td>
<button onclick="deleteLead(${index})">
Delete
</button>
</td>
</tr>
`;
});
}

function addLead(){

const lead = {

name:document.getElementById("name").value,

email:document.getElementById("email").value,

source:document.getElementById("source").value,

status:document.getElementById("status").value,

notes:document.getElementById("notes").value

};

leads.push(lead);

saveData();

displayLeads();

document.getElementById("name").value="";
document.getElementById("email").value="";
document.getElementById("source").value="";
document.getElementById("notes").value="";
}

function deleteLead(index){

leads.splice(index,1);

saveData();

displayLeads();
}

function changeStatus(index,status){

leads[index].status=status;

saveData();
}

displayLeads();
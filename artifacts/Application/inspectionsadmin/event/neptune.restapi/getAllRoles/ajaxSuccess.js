
var allRoles = xhr.responseJSON.roles;
var newRoles = [];
for (i = 0; i < allRoles.length; i++) {
    if (allRoles[i].name == "Technician" || allRoles[i].name == "Supervisor") {
        newRoles.push(allRoles[i]);
    }
}
xhr.responseJSON.roles = newRoles;
modeloMultiModelRoles.setData(xhr.responseJSON);
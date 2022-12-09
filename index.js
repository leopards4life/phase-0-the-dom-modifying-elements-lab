const element = document.getElementById("main");
element.remove();

const newHeader = document.createElement("h1");
newHeader.setAttribute('id', 'victory');
newHeader.innerHTML = "Jessica Vaughn is the champion";
document.body.append(newHeader);


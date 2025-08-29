document.getElementById("countBtn").onclick = function() {
  var tagName = document.getElementById("tagInput").value;
  var className = document.getElementById("classInput").value;
  var idName = document.getElementById("idInput").value;
  var nameAttr = document.getElementById("nameInput").value;

  var tagCount = tagName ? document.getElementsByTagName(tagName).length : 0;
  var classCount = className ? document.getElementsByClassName(className).length : 0;
  var idExists = idName ? (document.getElementById(idName) ? true : false) : false;
  var nameCount = nameAttr ? document.getElementsByName(nameAttr).length : 0;

  var output = "";
  if (tagName) output += tagName + ": " + tagCount + "  ";
  if (className) output += className + ": " + classCount + "  ";
  if (idName) output += idName + ": " + idExists + "  ";
  if (nameAttr) output += nameAttr + ": " + nameCount + "  ";

  document.getElementById("result").innerText = output;
};

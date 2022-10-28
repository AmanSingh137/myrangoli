var div = 360 / 14;
var radius = 180;
var parentdiv = document.getElementById("parentdiv");
var offsetToParentCenter = parseInt(parentdiv.offsetWidth / 2);
var offsetToChildCenter = 28;
var totalOffset = offsetToParentCenter - offsetToChildCenter;
for (var i = 1; i <= 14; ++i) {
  var childdiv = document.createElement("div");
  childdiv.className = i % 2 === 0 ? "div2" : "div3";
  var y = Math.sin(div * i * (Math.PI / 180)) * radius;
  var x = Math.cos(div * i * (Math.PI / 180)) * radius;
  childdiv.style.top = (y + totalOffset).toString() + "px";
  childdiv.style.left = (x + totalOffset).toString() + "px";
  parentdiv.appendChild(childdiv);
}
var divSmall = 360 / 40;
var radiusSmall = 120;
var offsetToChildCenterSmall = 9;
var totalOffsetSmall = offsetToParentCenter - offsetToChildCenterSmall;
for (var i = 1; i <= 40; ++i) {
  var childdiv = document.createElement("div");
  childdiv.className = "div4";
  var y = Math.sin(divSmall * i * (Math.PI / 90)) * radiusSmall;
  var x = Math.cos(divSmall * i * (Math.PI / 90)) * radiusSmall;
  childdiv.style.top = (y + totalOffsetSmall).toString() + "px";
  childdiv.style.left = (x + totalOffsetSmall).toString() + "px";
  parentdiv.appendChild(childdiv);
}

var divInnerCircle = 360 / 40;
var radInner = 70;
var offsetToChildCenterInner = 10;
var totalOffsetSmall = offsetToParentCenter - offsetToChildCenterInner;
for (var i = 1; i <= 40; ++i) {
  var childdiv = document.createElement("div");
  childdiv.className = "div5";
  var y = Math.sin(divInnerCircle * i * (Math.PI / 90)) * radInner;
  var x = Math.cos(divInnerCircle * i * (Math.PI / 90)) * radInner;
  childdiv.style.top = (y + totalOffsetSmall).toString() + "px";
  childdiv.style.left = (x + totalOffsetSmall).toString() + "px";
  parentdiv.appendChild(childdiv);
}

var outerCircle = 360/40;
var radOuter = 230;
var offsetToChildCenterOuter = -95;
var totalOffsetOuter = offsetToChildCenter - offsetToChildCenterOuter;
for(var i = 1; i <= 40; ++i)
{
  var childdiv = document.createElement("div");
  childdiv.className = "div6";
  childdiv.style.transform = i >20 ? 'rotate(0deg)' : 'rotate(90deg)';
  var y = Math.sin(outerCircle * i * (Math.PI / 90)) * radOuter;
  var x = Math.cos(outerCircle * i * (Math.PI / 90)) * radOuter;
  childdiv.style.top = (y + totalOffsetOuter).toString() + "px";
  childdiv.style.left = (x + totalOffsetOuter).toString() + "px";
  parentdiv.appendChild(childdiv);
}

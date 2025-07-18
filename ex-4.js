//Exercise 4
// Switch Statement
let lightBulbStatus = "On";

//ให้นำคำตอบจากโจทย์ Exercise 2 มาเขียนใหม่ในรูปแบบ Switch Statement
//กำหนดให้ lightBulbStatus มีค่าเป็น "On"
//Start coding here

switch (lightBulbStatus) {
    case "On":
      console.log("Light bulb is On.");
      break;
    case "Off":
      console.log("Light bulb is Off.");
      break;
    case "Broken":
      console.log("Light bulb is Broken.");
      break;
    default:
      console.log("Please choose the correct input (On/Off/Broken)");
  }
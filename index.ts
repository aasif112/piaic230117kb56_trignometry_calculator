#! /usr/bin/env node

import inquirer from "inquirer"

const angle = await inquirer.prompt([
    {message:"Enter angle value:", type:"number", name:'angleValue'},
    {message:"Angle value is in:", type:"list", name:"angleUnit",
        choices:["degree", "radian"]    },
    {mesaage: "Select trignometric ratio you want to calculate:",
        type:"list", name:"trigRatio", 
        choices: ["sin", "cos", "tan", "cosec", "sec", "cot"]   }
])

// Based on angle unit selection: Angle value entred and its unit show on top. Also converted in other unit and show on top 

if (angle.angleUnit=== "degree") {
    const angleDeg:number = (angle.angleValue*(Math.PI/180))
    console.log(`angle is ${angle.angleValue} degree`)
    console.log(`${angle.angleValue} degree = ${angleDeg} radian`)
    calculate(angleDeg)
}
else if(angle.angleUnit === "radian") {
    const angleRad:number = angle.angleValue;
    console.log(`angle is ${angle.angleValue} radian`)
    console.log(`${angleRad} radians = ${angleRad*(180/Math.PI)} degree`)

    calculate(angleRad)
}

// Based on Unit Selection the angle-value is passed to caculate() function. That calculates the selected trignometric function value.

function calculate (radOrDeg:number) {
    if (angle.trigRatio === "sin") {
        console.log(`\t ${angle.trigRatio}(${angle.angleValue}) = ${Math.sin(radOrDeg)}`) 
    }
    else if (angle.trigRatio === "cos") {
        console.log(`\t ${angle.trigRatio}(${angle.angleValue}) = ${Math.cos(radOrDeg)}`)
   }
   else if (angle.trigRatio === "tan") {
        console.log(`\t ${angle.trigRatio}(${angle.angleValue}) = ${Math.tan(radOrDeg)}`)
   }
   else if (angle.trigRatio === "cosec") {
        console.log(`\t ${angle.trigRatio}(${angle.angleValue}) = ${1/(Math.sin(radOrDeg))}`)
   }
   else if (angle.trigRatio === "sec") {
        console.log(`\t ${angle.trigRatio}(${angle.angleValue}) = ${1/(Math.cos(radOrDeg))}`)
   }
   else if (angle.trigRatio === "cot") {
        console.log(`\t ${angle.trigRatio}(${angle.angleValue}) = ${1/(Math.tan(radOrDeg))}`)
   }
}




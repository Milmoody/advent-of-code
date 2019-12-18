const opcodeEx = [ 1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,13,19,1,9,19,23,2,13,23,27,2,27,13,31,2,31,10,35,1,6,35,39,1,5,39,43,1,10,43,47,1,5,47,51,1,13,51,55,2,55,9,59,1,6,59,63,1,13,63,67,1,6,67,71,1,71,10,75,2,13,75,79,1,5,79,83,2,83,6,87,1,6,87,91,1,91,13,95,1,95,13,99,2,99,13,103,1,103,5,107,2,107,10,111,1,5,111,115,1,2,115,119,1,119,6,0,99,2,0,14,0 ];

const opcodeReader = (opcode) => {
  for ( let i = 0; i < opcode.length; i += 4 ) {
    // console.log(`i: ${i} opcode: ${opcode}`)
    let code = opcode[i];
    let firstPos = opcode[i + 1];
    let secondPos = opcode[i + 2];
    let finalPos = opcode[i + 3];
    if(opcode[i] === 99) return opcode;
    // if(opcode[i] === 1)  opcode[opcode[i+3]] = opcode[opcode[i + 1]] + opcode[opcode[i + 2]];  
    if(code === 1)  { 
      opcode[finalPos] = opcode[firstPos] + opcode[secondPos];  
    } else if(code === 2) {
      opcode[finalPos] = opcode[firstPos] * opcode[secondPos];  
    } 
  }
  return opcode;
}

// create a function to test different values replacing pos 1 & 2 in opcode
const opcodeTester = (cb, opcode) => {
  // use nested for loop to change noun & verb (pos 1 & 2 in opcode)
  for ( let i = 0; i < 100; i ++ ) {
    for ( let j = 0; j < 100; j++ ) {
      // make a copy of opcode in inner for loop
      const opcodeCopy = [...opcode];
      // in inner for loop, change pos 1 & 2 of opcode
      opcodeCopy[1] = i;
      opcodeCopy[2] = j;
      // then invoke opcode reader on new opcode
      const newOpcode = cb(opcodeCopy);
      // console.log(newOpcode[0], i, j)
      // if result of opcodeREader[0] === 19690720, return i & j
      if ( newOpcode[0] === 19690720 ) {
        console.log(i, j)
        console.log(i * 100)
        console.log(i * 100 + j)
        return [i , j]
      };
    }
  }
  // console.log(opcode)
}

// Need to add:
// functionality for opcode 3
// functionality for opcode 4
// support for parameter modes


console.log(opcodeTester(opcodeReader, opcodeEx))
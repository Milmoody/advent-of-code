const w1 = ['R1004','U518','R309','D991','R436','D360','L322','U627','R94','D636','L846','D385','R563','U220','L312','D605','L612','D843','R848','U193','L671','D852','L129','D680','L946','D261','L804','D482','R196','U960','L234','U577','R206','D973','R407','D400','R44','D103','R463','U907','L972','U628','L962','U856','L564','D25','L425','U332','R931','U837','R556','U435','R88','U860','L982','D393','R793','D86','R647','D337','R514','D361','L777','U640','R833','D674','L817','D260','R382','U168','R161','U449','L670','U814','L42','U461','R570','U855','L111','U734','L699','U602','R628','D79','L982','D494','L616','D484','R259','U429','L917','D321','R429','U854','R735','D373','L508','D59','L207','D192','L120','D943','R648','U245','L670','D571','L46','D195','L989','U589','L34','D177','L682','U468','L783','D143','L940','U412','R875','D604','R867','D951','L82','U851','L550','D21','L425','D81','L659','D231','R92','D232','R27','D269','L351','D369','R622','U737','R531','U693','R295','U217','R249','U994','R635','U267','L863','U690','L398','U576','R982','U252','L649','U321','L814','U516','R827','U74','L80','U624','L802','D620','L544','U249','R983','U424','R564','D217','R151','U8','L813','D311','R203','U478','R999','U495','R957','U641','R40','U431','L830','U67','L31','U532','R345','U878','L996','D223','L76','D264','R823','U27','L776','U936','L614','U421','L398','U168','L90','U525','R640','U95','L761','U938','R296','D463','L349','D709','R428','U818','L376','D444','L748','D527','L755','U750','R175','U495','R587','D767','L332','U665','L84','D747','L183','D969','R37','D514','R949','U985','R548','U939','L170','U415','R857','D480','R836','D363','R763','D997','R721','D140','R699','U673','L724','U375','R55','U758','R634','D590','L608','U674','R809','U308','L681','D957','R30','D913','L633','D939','L474','D567','R290','D615','L646','D478','L822','D471','L952','D937','R306','U380','R695','U788','R555','D64','R769','D785','R115','U474','R232','U353','R534','D268','L434','U790','L777','D223','L168','U21','L411','D524','R862','D43','L979','U65','R771','U872','L983','U765','R162'];

const w2 = ['L998','U952','R204','U266','R353','U227','L209','D718','L28','D989','R535','U517','L934','D711','R878','U268','L895','D766','L423','U543','L636','D808','L176','U493','R22','D222','R956','U347','R953','U468','R657','D907','R464','U875','L162','U225','L410','U704','R76','D985','L711','U176','R496','D720','L395','U907','R223','D144','R292','D523','R514','D942','R838','U551','L487','D518','L159','D880','R53','D519','L173','D449','R525','U645','L65','D568','R327','U667','R790','U131','R402','U869','R287','D411','R576','D265','R639','D783','R629','U107','L571','D247','L61','D548','L916','D397','R715','U138','R399','D159','L523','U2','R794','U699','R854','U731','L234','D135','L98','U702','L179','D364','R123','D900','L548','U880','R560','D648','L701','D928','R256','D970','L396','U201','L47','U156','R723','D759','R663','D306','L436','U508','R371','D494','L147','U131','R946','D207','L516','U514','R992','D592','L356','D869','L299','U10','R744','D13','L52','U749','R400','D146','L193','U720','L226','U973','R971','U691','R657','D604','L984','U652','L378','D811','L325','D714','R131','D428','R418','U750','L706','D855','L947','U557','L985','D688','L615','D114','R202','D746','R987','U353','R268','U14','R709','U595','R982','U332','R84','D620','L75','D885','L269','D544','L137','U124','R361','U502','L290','D710','L108','D254','R278','U47','R74','U293','R237','U83','L80','U661','R550','U886','L201','D527','L351','U668','R366','D384','L937','D768','L906','D388','L604','U515','R632','D486','L404','D980','L652','U404','L224','U957','L197','D496','R690','U407','L448','U953','R391','U446','L964','U372','R351','D786','L187','D643','L911','D557','R254','D135','L150','U833','R876','U114','R688','D654','L991','U717','R649','U464','R551','U886','L780','U293','L656','U681','L532','U184','L903','D42','L417','D917','L8','U910','L600','D872','L632','D221','R980','U438','R183','D973','L321','D652','L540','D163','R796','U404','L507','D495','R707','U322','R16','U59','L421','D255','L463','U462','L524','D703','L702','D904','L597','D385','L374','U411','L702','U804','R706','D56','L288'];

// find crossing of wires closest to center of grid
// let's translate LRUD to x and x coords
// L => -x
// R => +x
// D => -y
// U => +y
// assume starting point is (0,0)

// input: both arrays of wire directions

function crossFinder (wire1, wire2) {
  let x1 = 0;
  let y1 = 0;
  let steps1 = 0;
  const xObj = {};
  const yObj = {};
  wire1.forEach( string => {
    const direction = string.slice(0,1);
    const number = Number(string.slice(1));
    steps1 += number;

    //if moving right, we'll be adding a line to the y1 array1 with the position of y1
    // start of x1, and end of x1 + number
    if(direction == 'R') {
      yObj[y1] = [x1, x1 + number, direction, steps1];
      x1 += number;
    }
    //if moving left, we'll add a line to y1 array1 with position of y1
    // start of x1 and end of x1 - number
    if(direction == 'L') {
      yObj[y1] = [x1 - number, x1, direction, steps1];
      x1 -= number;
    }
    // if moving up, add line to x1 array1 with pos of x1
    // start of y1 and end of y1 + number
    if(direction == 'U') {
      xObj[x1] = [y1, y1 + number, direction, steps1];
      y1 += number;
    }
    // if moving down, add line to x1 array1 with pos of x1
    // start of y1 and end of y1 - number
    if(direction == 'D') {
      xObj[x1] = [y1 - number, y1, direction, steps1];
      y1 -= number;
    }
  })

  let start, end, axis, point;
  // create holder obj for crosses found
  const crossObj = {};
  let x2 = 0;
  let y2 = 0;
  let steps2 = 0;
  const crossStepArrCombined = [];
  wire2.forEach( string => {
    const direction = string.slice(0,1);
    const number = Number(string.slice(1));

    if(direction == 'R') {
      start = x2;
      end = x2 + number;
      axis = 'y';
      point = y2;
      x2 += number;
    }

    if(direction == 'L') {
      start = x2 - number;
      end = x2;
      axis = 'y';
      point = y2;
      x2 -= number;
    }

    if(direction == 'U') {
      start = y2;
      end = y2 + number;
      axis = 'x';
      point = x2;
      y2 += number;
    }

    if(direction == 'D') {
      start = y2 - number;
      end = y2;
      axis = 'x';
      point = x2;
      y2 -= number;
    }
    steps2 += number;

    // check all points in w2 across w1's line obj
    for(let i = start; i <= end; i ++){
      // find which axis we're comparing against
      // compare with appropriate obj
      axis === 'x' ? obj = yObj : obj = xObj;
      if( obj[`${i}`] ) {
        // if point lies within line, then add that point to crossobj
        if( obj[`${i}`][0] < point && obj[`${i}`][1] > point ){
          console.log('cross found!')
          axis === 'x' ? crossObj[point] = i : crossObj[i] = point;
          // updated logic to find total num steps for wire 1 depending on direction
          let step1Cross = obj[`${i}`][3];
          console.log('step1Cross before:', step1Cross)
          if(obj[`${i}`][2] == 'R') step1Cross = step1Cross - Math.abs(obj[`${i}`][1] - x2)
          if(obj[`${i}`][2] == 'L') step1Cross = step1Cross - Math.abs(obj[`${i}`][0] - x2)
          if(obj[`${i}`][2] == 'U') step1Cross = step1Cross - Math.abs(obj[`${i}`][1] - y2)
          if(obj[`${i}`][2] == 'D') step1Cross = step1Cross - Math.abs(obj[`${i}`][0] - y2)

          // logic for num steps wire2
          let step2Cross = steps2;
          if(direction == 'U') step2Cross = step2Cross - Math.abs(end - i)
          if(direction == 'D') step2Cross = step2Cross - Math.abs(start - i)
          if(direction == 'R') step2Cross = step2Cross - Math.abs(end - i)
          if(direction == 'L') step2Cross = step2Cross - Math.abs(start - i)
          crossStepArrCombined.push(step1Cross + step2Cross);
        }
      }
    }
  })
  // commented out from part 1
  // const distanceSet = new Set();
  // for(let key in crossObj) {
  //   distanceSet.add(Math.abs(key) + Math.abs(crossObj[key]))
  // }
  return Math.min(...crossStepArrCombined);
}

// console.log(crossFinder(w1, w2))

let test1 = ["R75","D30","R83","U83","L12","D49","R71","U7","L72","U62","R66","U55","R34","D71","R55","D58","R83"]
let test2 = ["R98","U47","R26","D63","R33","U87","L62","D20","R33","U53","R51", "U98","R91","D20","R16","D67","R40","U7","R15","U6","R7"]
// console.log(crossFinder(test1, test2)) //==> should be 1020 steps

let new1 = ['R8', 'U5', 'L5', 'D3'] // => intersection at (L5 - 3) steps - found from line on x axis in wire 2
let new2 = ['U7', 'R6', 'D4', 'L4'] // => intersection at (D4 - 2) steps - found from line on y axis in wire 1
// console.log(crossFinder(new1, new2)) // ==> should be 30 steps

// 2549 ===> too high

// What is missing:
// w1 steps
  // track total steps for w1 on each set in obj
  // track direction of wire 1
  // build logic to subtract for y direction at intersection,
  // depending on:
    // cross axis/point of wire 2
    // steps increasing/decreasing with direction
  // subtract unused steps from wire 1 step total

// w2 steps
  // keep track of total # steps on w2
  // build logic to subtract steps of of wire 2 to intersection  

// add total number steps together for each cross
// store in array
// find min value in array  



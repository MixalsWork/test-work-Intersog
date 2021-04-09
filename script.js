const numberOfUsers = 1000;
let users = [];
for(let i = 0;  i< numberOfUsers; i++){
    users.push({
        name: `user ${i+1}`,
        dollars: 1
    })
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }
  while(users.length !=1){
      users = users.filter(element => element.dollars !=0);
      let newArr = [];
      for(let i = 0; i<2; i++){
        let res = getRandomIntInclusive(0, users.length-1);
        newArr.push(users[res]);
        users.splice(res,1)
      }
      let resdollars = getRandomIntInclusive(0, 1);
      if(resdollars == 1){
          newArr[0].dollars = newArr[0].dollars +1;
          newArr[1].dollars = newArr[1].dollars -1;
        
      }else{
          newArr[0].dollars = newArr[0].dollars -1;
          newArr[1].dollars = newArr[1].dollars +1;
      }
      users = users.concat(newArr)
      users = users.filter(element => element.dollars !=0);
  }
  alert(`${users[0].name} have ${users[0].dollars} dollars and win`)




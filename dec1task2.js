// 1st Dec - 2nd task
firstArr.forEach(a => {
  const filtered = firstArr.filter(aa => firstArr.find(third => {
    const res = (third === (2020 - a - aa ));
    if (res === true) {
        console.log(a,aa,third, a+aa+third,a*aa*third);
    }
    return res;
  }))
});
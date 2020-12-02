// 1st Dec - 1st task
firstArr.forEach(a => {
  const filtered = firstArr.filter(aa => firstArr.some(aaa => aaa === (2020 - a - aa )));
  if (filtered.length > 0) {
    const b = filtered[0];
    console.log(a,b, a+b,a*b);
  }
});
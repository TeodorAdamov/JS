function nextDay(year, month, day) {
    let newDate = new Date(year, month - 1, day);
    let oneDay = 24*60*60*1000
    let date = new Date(newDate.getTime() + oneDay)

    console.log(date.getFullYear()+ '-' + (date.getMonth() + 1) + '-' + date.getDate());
   

  

}

nextDay(2016, 9, 30)

//2016-10-1
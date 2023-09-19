function prevDay(year,month,day){
    const dateInput = `${year}-${month}-${day}`;
    const date = new Date(dateInput);
    date.setDate(date.getDate() - 1);
    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
}
prevDay(2015, 5, 10)
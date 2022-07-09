function humanize(date){
    const now= new date;
    const diff= Math.floor(now.getTime()-date.getTime()/1000);
    if(diff<5)
    {
        return "Vừa xong";
    }
    else if(diff<60)
    return '${diff} secounds ago';
    else if(diff<3600) return '${Math.floor(diff/60)} hour ago';
    else if(diff<86400) return '{Math.floor(diff/3600)} day ago';
    else if(diff<94608000) return '{Math.floor(diff/86400) months ago}'
    else return 'along time'
}
console.log(humanize(now));
const now=new Date();
console.log(humanize(now));
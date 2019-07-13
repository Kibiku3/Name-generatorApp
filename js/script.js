//General Array function
function MakeArray(n){
    this.length=n;
    var i;
    for (i=1, i<=n; i++;){
        this[i]=0;
    }
}

//Initialize Days of Week Array
days=new MakeArray(7);
days[0]="Saturday"
days[1]="Sunday"
days[2]="Monday"
days[3]="Tuesday"
days[4]="Wednesday"
days[5]="Thursday"
days[6]="Friday"

//Initialize Months Array
months=new MakeArray(12);
months[0]="January"
months[1]="February"
months[2]="March"
months[3]="April"
months[4]="May"
months[5]="June"
months[6]="July"
months[7]="August"
months[8]="September"
months[9]="October"
months[10]="November"
months[11]="December"

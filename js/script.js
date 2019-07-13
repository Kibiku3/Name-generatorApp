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
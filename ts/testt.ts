export class test{

    private name =  "";

    constructor(info){

		for(var x in info){
			if(this.hasOwnProperty(x)) {
				this[x] = info[x];
			}
		}
    }
    
    main(){
        alert(1000);
    }
}
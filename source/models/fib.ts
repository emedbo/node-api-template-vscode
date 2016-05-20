class Fib {
    private numTimes: number;
    constructor(num: number) {
        this.numTimes = num;
    }

    public print():string {
        let res = this.runFib(this.numTimes);
        return res.toString();
    }
    
    private runFib(num:number){
        if(num == 0){
            return 0;
        }
        if(num == 1){
            return 1;
        }
        return this.runFib(num - 1) + this.runFib(num - 2);
    }
}

export default Fib;
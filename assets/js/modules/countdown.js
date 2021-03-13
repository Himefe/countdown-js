export default class Countdown {
    constructor(futureDate){
        this.futureDate = futureDate;
    }
    get _actualDate(){
        return new Date();
    }
    get _futuredate(){
        return new Date(this.futureDate);
    }
    get _timeTempDiff(){
        return this._futuredate.getTime() - this._actualDate.getTime();
    }
    get days(){
        return Math.floor(this._timeTempDiff / (24 * 60 * 60 * 1000));
    }
    get hours(){
        return Math.floor(this._timeTempDiff / (60 * 60 * 1000));
    }
    get minutes(){
        return Math.floor(this._timeTempDiff / (60 * 1000));
    }
    get seconds(){
        return Math.floor(this._timeTempDiff / 1000);
    }
    get year(){
        return _actualDate.year();
    }
    get total(){
        const days = this.days;
        const hours = this.hours % 24;
        const minutes = this.minutes % 60;
        const seconds = this.seconds % 60;
        const year = this.year;
        return {
            days,
            hours,
            minutes,
            seconds,
            year
        }     
    }
}



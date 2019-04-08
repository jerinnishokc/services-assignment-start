export class CounterService {
    activeToInactive: number = 0;
    inactiveToActive: number = 0;

    counter(flag: string) {
        if (flag == 'A') {            
            console.log('Total number of active to inactive is ' + (++this.activeToInactive));
        }                            
        else {
            console.log('Total number of inactive to active is ' + (++this.inactiveToActive));
        }
    }
}
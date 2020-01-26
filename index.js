function deepObjectCloning(objTarget, objSource) {
    for (const prop in objTarget) {
        const propTarget = objTarget[prop];
        const propSource = objSource[prop];

        if (typeof propTarget === 'object') {
            objTarget[prop] = Object.assign({}, propSource);
            deepObjectCloning(propTarget, propSource);
        }
    }
}

const workout = {
    type: 'Gym',
    schedule: {
        days: {
            workdays: 'Mon',
            weekends: 'Sun'
        },
        hours: 2
    },

};

const workoutClone = Object.assign({}, workout);

deepObjectCloning(workoutClone, workout);

workoutClone.type = 'Yoga';
workoutClone.schedule.hours = 5;
workoutClone.schedule.days.workdays = 'Tue';

console.log(workout);
console.log(workoutClone);

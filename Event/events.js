const Work = require('./emitter');
const work = new Work()

// Regester listener
work.on('work-Started',()=>{
    console.log('started')
})
work.on('work-ended',(msg)=>{
    console.log('ended', msg)
})
// emit 
work.fun1()
work.fun2()
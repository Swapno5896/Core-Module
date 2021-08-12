const Eventemitter = require('events');

class Work extends Eventemitter{
    // emit events
    fun1 = () => {
        this.emit('work-Started')
       }
 fun2 = () =>{
    setTimeout(() => {
        this.emit('work-ended',{msg:'Congratulation'})
    }, 2000);
 }

}
module.exports = Work
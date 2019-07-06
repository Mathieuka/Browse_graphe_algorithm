require('colors');

const UnitTest = {
    test: (title,callback) => {
        try {
            console.log(title.green);
            callback();
        } catch (error) {
            console.log(title.red);
            console.error(error );
        }
    },
    expect: (actual) => {
        return {
            toBe : (expected) => {
                if (actual !== expected){
                  throw new Error(`${actual} is not equal to ${expected}`);
                }else{
                  console.log('Test passed')
                }
            }
        } 
    }
}

module.exports = UnitTest;




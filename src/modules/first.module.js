'use strict';


class Fist {
    constructor( props ) {
        this.hello = props;
    }

    sayHello(){
        console.log( this.hello );
    }

}

const hello = new Fist( 'Hello' );
export default hello;

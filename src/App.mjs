import hello from "./modules/first.module";
import './sass/style.scss'
class App {
    constructor(){
        hello.sayHello();
    }
}

const app = new App();

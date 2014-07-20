import { Injector } from 'di';
import { HelloController } from './hello-controller';

var injector = new Injector();
var controller = injector.get(HelloController);

controller.sayHello();

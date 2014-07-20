import { Inject } from 'di';
import { HelloService } from './service/hello-service';

@Inject(HelloService)
export class HelloController {

  constructor(helloService) {
    this.helloService = helloService;
  }

  sayHello() {
    console.log(this.helloService.getMessage());
  }
}

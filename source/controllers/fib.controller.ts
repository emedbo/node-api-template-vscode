import {Request, Response} from 'express';

import Fib from '../models/fib';

export function calcNumber(req: Request, res: Response){
    let number = req.params.number;
    let fib = new Fib(number);
    let result = fib.print();
    res.send(200, result);
}
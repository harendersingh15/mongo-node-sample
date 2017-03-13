import { Response, Request, Router } from 'express'
import { Employee } from './employee.model';
const employeeRouter: Router = Router();
import { client } from '../db/redisDB';

const redisClient = client;

interface employee {

    name: String,
    mobile: String,
    age: 5
}

employeeRouter.get('/', (req: Request, res: Response) => {
    redisClient.get("employee", (error, result) => {
        // if (result) {
        //     console.log("redis get");
        //     return res.send(JSON.parse(result));
        // }
        Employee
            .find({})
            .lean()
            .exec()
            .then((result) => {
                console.log("mongodb");
                redisClient.set("employee", JSON.stringify(result));
                res.send(result);
            })
            .catch((err) => {
                res.send(err);
            });
    });
});


employeeRouter.get('/employee/:id', (req: Request, res: Response) => {
    Employee.findOne({ _id: req.params.id })
        .lean()
        .exec()
        .then((result: any) => {
            res.json(result)
        })
        .catch((error: any) => {
            res.status(404).send('employee not found');
        });
});

employeeRouter.post('/employee', (req: Request, res: Response) => {
    let employee = new Employee();
    let data = req.body.data || req.body;

    employee.name = data.name;
    employee.age = data.age;
    employee.mobile = data.mobile;
    console.log(employee);

    employee.save((error: any, data: any) => {
        if (error) {
            console.log(error);
            throw error;
        }
        res.send(data);
    });
});

employeeRouter.put('/employee/:id', (req: Request, res: Response) => {
    Employee.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { title: req.body.title } },
        { upsert: false },
        (error: any, result: any) => {
            if (error)
                res.status(500).send('Not Auth');

            redisClient.del("employee");
            res.send(result);

        })
});

employeeRouter.delete('/employee/:id', (req: Request, res: Response) => {
    console.log(req.params.id);
    Employee.findOneAndRemove(
        { _id: req.params.id },
        (error: any, result: any) => {
            if (error)
                res.status(500).send('Not Auth');

            redisClient.del("employee");
            res.send(result);

        })
});

export { employeeRouter }
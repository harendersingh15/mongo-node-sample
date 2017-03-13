/*
 * GET home page.
 */

// exports.index = function(req, res) {
//     res.render('index.html', { title: 'Cloudant Boiler Plate' });
// };

import { employeeRouter } from './employee/employee';

const appRouter = (app: any) => {
    app.use('/api/employee', employeeRouter);
}

export { appRouter }
import React, { useState } from 'react';

const Problem1 = () => {
    const [show, setShow] = useState('all');

    // This is main storage
    const [initialAllInfo, setInitialAllInfo] = useState([]);

    // This storage for render date in ui.
    const [uiInfo, setUiInfo] = useState([]);

    const orderTasks = (arr) => {
        const activeTasks = arr.filter(task => task.status.toLowerCase() === 'active');
        const completedTasks = arr.filter(task => task.status.toLowerCase() === 'completed');
        const elseTasks = arr.filter(task => task.status.toLowerCase() !== 'active' && task.status.toLowerCase() !== 'completed');
        const orderedTasks = [...activeTasks, ...completedTasks, ...elseTasks];
        return orderedTasks;
    }



    const handleClick = (val) => {
        setShow(val);
        //show all data
        if (val === 'all') {
            const orderedTasks = orderTasks([...initialAllInfo])
            setUiInfo([...orderedTasks]);
            return;
        }
        // show only Active or Completed Data

        const filteredArray = initialAllInfo.filter(info => info.status.toLowerCase() === val.toLowerCase());
        setUiInfo([...filteredArray]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const status = e.target.status.value;

        // both set info in two state
        setInitialAllInfo([...initialAllInfo, { name, status }]);
        const orderedTasks = orderTasks([...initialAllInfo, { name, status }]);
        setUiInfo([...orderedTasks]);
        e.target.reset();
    }



    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form onSubmit={handleSubmit} className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input type="text" name='name' className="form-control" placeholder="Name" />
                        </div>
                        <div className="col-auto">
                            <input type="text" name='status' className="form-control" placeholder="Status" />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'all' && 'active'}`} type="button" onClick={() => handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'active' && 'active'}`} type="button" onClick={() => handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'completed' && 'active'}`} type="button" onClick={() => handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                uiInfo.length > 0 && uiInfo.map((singleInfo, index) =>
                                    <tr key={index}>
                                        <td>{singleInfo.name}</td>
                                        <td>{singleInfo.status}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;
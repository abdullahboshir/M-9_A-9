import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { FaBeer } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <div>
            <h1>This is Dashboard <FaBeer /></h1>
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Left</Button>
                <Button variant="secondary">Middle</Button>
                <Button variant="secondary">Right</Button>
            </ButtonGroup>
        </div>
    );
};

export default Dashboard;
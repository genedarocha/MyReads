import React from 'react';
import { Link } from 'react-router-dom';

const NoPage = () => (
<div><br/>
<p>
	Page Requested not found !!
</p>
<center><Link to="/">Return to Home Page</Link></center>
</div>
);
export default NoPage;
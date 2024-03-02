import React from 'react';

export default function SJTableRow ({title, company, location, deadline}) {
    return (
        <tr>
        <td>
            <h3 className="jobdesc">{title}</h3>
            <p className="companyloca"> {company}</p>
            <p className="companyloca"> {location} </p>
            <p className="deadline"> {deadline}</p>
        </td>
        <td className="action">
            <button type="button" className="btn btn-primary"> Apply <i aria-label="button" className="fas fa-pencil-alt"></i></button>
            <button type="button" className="btn btn-success"> Saved <i aria-label="button" className="fas fa-pencil-alt"></i></button>
        </td>
        </tr>
    );
}
import React from 'react';

export default function SJTableRow ({title, company, location, pay, qualifications, posted, id, onRemove }) {
    return (
        <tr>
        <td>
            <h3 className="jobdesc">{title}</h3>
            <p className="companyloca">{company}</p>
            <p className="companyloca">{location}</p>
            <p className="companyloca">{pay}</p>
            <p className="companyloca">{qualifications}</p>
            <p className="deadline">{posted}</p>
        </td>
        <td className="action">
            <button type="button" className="btn btn-primary"> Apply <i aria-label="button" className="fas fa-pencil-alt"></i></button>
            <button type="button" className="btn btn-danger" onClick={onRemove}>Remove <i aria-label="button" className="fas fa-trash"></i></button>
        </td>
        </tr>
    );
}
import React from 'react';

export default function SJTableRow ({title, company, location, pay, qualifications, posted, id, onRemove }) {
    return (
        <tr>
        <td className='tablerows'>
            <h3 className="jobdesc">{title}</h3>
            <p className="companyloca">{company}</p>
            <p className="companyloca">Location: {location}</p>
            <p className="companyloca">Pay: {pay}</p>
            <p className="companyloca">Minimum Qualifications: {qualifications}</p>
            <p className="deadline">{posted}</p>
            <button type="button" className='action' > Apply <i aria-label="button" className="fas fa-pencil-alt"></i></button>
            <button type="button" className='action' onClick={onRemove}>Remove <i aria-label="button" className="fas fa-trash"></i></button>
        </td>
        </tr>
    );
}
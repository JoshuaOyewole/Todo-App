import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan, faCalendarXmark, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

<FontAwesomeIcon icon="fa-solid fa-calendar-xmark" />

function Todo(props) {
    const { title, dueDate, description } = props;
    const [readMore, setReadMore] = useState(false)

    return (
        <div className='py-2'>
            <div className="flex justify-between items-start" onClick={()=>setReadMore(!readMore)}>
                <div className="content mb-2">
                    <p className="todotitle font-semibold text-gray-dark">{title}</p>
                    {readMore && <p className="description leading-5">{description}</p>}
                </div>
                <div className="toggleicon">
                    <FontAwesomeIcon icon={faGreaterThan} className='pt-2 font-normal text-xs ' />
                </div>
            </div>
        {
            readMore && (
                <div className="dueDate flex items-center justify-start">
                <div className='flex items-center'>
                    <div className="duedateicon">
                        <FontAwesomeIcon icon={faCalendarXmark} className='text-xs text-danger' />
                    </div>
                    <p className='pl-2 text-xs font-medium'>{dueDate}</p>
                </div>
                <button className="btncontainer ml-4 flex items-center" onClick={()=>alert('Task Deleted')}>
                    <FontAwesomeIcon icon={faTrashCan} className='text-xs' /> <span className='ml-1'>Delete Task</span>
                </button>
            </div>
            )
        }
            

            <div className="line bg-bg opacity-20 mt-2 h-0.5"></div>
        </div>
    )
}

export default Todo


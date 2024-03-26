import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const NewItem = ({ text, setText, handleclose, hanldeSubmit }) => {
    return (
        <li>
            <form onSubmit={hanldeSubmit} className='newItem'>
                <input placeholder="Example: do the laundry " name="text" type="text" checked={text} onChange={(e) => setText(e.target.value)} />
                <button title="button" type="button" aria-label="Name" onClick={() => handleclose()}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </form>
        </li>
    );




}

export default NewItem;

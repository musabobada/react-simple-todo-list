import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';

const TodoItem = ({ handleDelete, onChange, text, id, isChecked }) => {
    return (
        <li>
            <label>
                <span className="checkmark">
                    <input name="checkbox" type="checkbox" checked={isChecked} onChange={(e) => onChange(e, id)} />
                </span>
                <span>{text}</span>
                <button title="button" type="button" aria-label="Name" onClick={() => handleDelete(id)}>
                    <FontAwesomeIcon icon={faCircleMinus} />
                </button>
            </label>
        </li>
    );
}

export default TodoItem;

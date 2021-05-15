import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
    StyledButton,
    StyledInput,
} from '../ui';

const onClickEventCreate = async () => {
    //TODO create that
}


export const EventPage = () => {
    const [eventName, setEventName] = useState('');
    const [description, setDescription] = useState('');
    const history = useHistory();

    return (
        <div>
            <div>

                <h3>Envent</h3>
                <input type="checkbox"></input>
                <div class="checkmark"></div>
                <table>
                    <tbody>
                        <tr>
                            <td>event name:</td>
                            <td>
                                <StyledInput
                                    value={eventName}
                                    placeholder='rwe'
                                    onChange={e => setEventName(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>Description:</td>
                            <td>
                                <textarea
                                    rows='5'
                                    value={description}
                                    placeholder='Korean bbq eat go hot grilled. Bueno.'
                                    style={{ width: '100%' }}
                                    onChange={e => setDescription(e.target.value)} />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <StyledButton
                    onClick={onClickEventCreate}
                >Schedule this</StyledButton>
            </div>
        </div>
    )
}
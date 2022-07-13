import React, { useState } from 'react';

import "./useForm.css";

function useForm() {

    const [displayName, setDisplayName] = useState("");
    const [name, setName] = useState("");
    const [nameHidden, setNameHidden] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisplayName(name);
        setName("");
        setNameHidden(false);
    }

    return {
        displayName,
        nameHidden,
        render: (
            <div className="form-component" style={displayName === "" ? {display: "block"} : {display: "none"}}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="form-name">
                        First Name:<br />
                        <input
                            type="text"
                            id="form-name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </label><br />
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default useForm;


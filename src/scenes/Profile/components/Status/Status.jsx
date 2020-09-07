import React, { useEffect, useState } from 'react';

import s from './Status.module.scss';

const Status = ({ status, updateUserStatus, authUserId, userId }) => {
  const [value, setValue] = useState(status || '');
  const [editMode, setEditMode] = useState(false);
  const handleChange = (e) => setValue(e.target.value);
  const isLoggedUser = authUserId === userId;

  const toggleEditMode = (value, status) => {
    if (isLoggedUser) {
      setEditMode(value);
      if (!value) {
        updateUserStatus(status);
      }
    }
  };

  useEffect(() => {
    setValue(status);
  }, [status]);

  return (
    <div className={s.status}>
      {!editMode && (
        <div>
          <span onDoubleClick={() => toggleEditMode(true)}>
            {isLoggedUser && !status ? 'Double click here to add status' : status}
          </span>
        </div>
      )}
      {editMode && (
        <input
          autoFocus
          onBlur={() => toggleEditMode(false, value)}
          type="text"
          value={value}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default Status;

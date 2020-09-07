import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faLink, faUnlock } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter,
  faVk,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import s from './User.module.scss';
import Avatar from '../../../../components/Avatar/Avatar';
import Status from '../Status/Status';

const User = ({ user, status, updateUserStatus, authUserId }) => {
  return (
    <div className={s.user}>
      <div className={s.avatar}>
        <Avatar size={200} img={user.photos.large} withBorder />
      </div>

      <div className={s.details}>
        <div className={s.info}>
          <Status
            status={status}
            userId={user.userId}
            updateUserStatus={updateUserStatus}
            authUserId={authUserId}
          />
          <h4>
            <span>{user.fullName}</span>
            {user.lookingForAJob && (
              <div>
                <FontAwesomeIcon icon={faUnlock} />
              </div>
            )}
          </h4>

          {user.aboutMe && <div className={s.description}>{user.aboutMe}</div>}

          {user.lookingForAJob && user.lookingForAJobDescription && (
            <pre className={s.lookForJob}>{user.lookingForAJobDescription}</pre>
          )}

          <div className={s.links}>
            <ContactLink name="facebook" icon={faFacebook} link={user.contacts.facebook} />
            <ContactLink name="vk" icon={faVk} link={user.contacts.facebook} />
            <ContactLink name="twitter" icon={faTwitter} link={user.contacts.twitter} />
            <ContactLink name="instagram" icon={faInstagram} link={user.contacts.instagram} />
            <ContactLink name="youtube" icon={faYoutube} link={user.contacts.youtube} />
            <ContactLink name="github" icon={faGithub} link={user.contacts.github} />
            <ContactLink name="website" icon={faLink} link={user.contacts.website} />
          </div>
        </div>

        <button>
          <FontAwesomeIcon icon={faCheck} className={s.icon} />
          Following
        </button>
      </div>
    </div>
  );
};

const ContactLink = ({ link, icon, name }) => {
  return (
    <React.Fragment>
      {link && (
        <a href={link} className={s[name]} target="_blank">
          <FontAwesomeIcon icon={icon} />
        </a>
      )}
    </React.Fragment>
  );
};

export default User;

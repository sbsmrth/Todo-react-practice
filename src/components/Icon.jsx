import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = ({ icon, css }) => {
  return <FontAwesomeIcon className={css} icon={icon} />
}

export { Icon };
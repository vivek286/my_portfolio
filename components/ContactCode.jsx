import styles from '../styles/ContactCode.module.css';

const contactItems = [
  
  {
    social: 'email',
    link: 'solankivivek01@gmail.com',
    href: 'mailto:solankivivek01@gmail.com',
  },
  {
    social: 'github',
    link: 'vivek286',
    href: 'https://github.com/vivek286',
  },
  {
    social: 'linkedin',
    link: 'vivek solanki',
    href: 'https://www.linkedin.com/in/vivek-solanki-/',
  },
  {
    social: 'telegram',
    link: 'Vivek_solanki',
    href: 'https://t.me/sparta',
  },
  {
    social: 'codepen',
    link: 'vivek_4540',
    href: 'https://codepen.io/Vivek_4540',
  },
  {
    social: 'codesandbox',
    link: 'viveksolanki',
    href: 'https://codesandbox.io/u/solankivivek15092002',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;

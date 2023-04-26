import Image from 'next/image';
import Link from 'next/link';
import { FC, memo } from 'react';
import { MdMonitor } from 'react-icons/md';
import { MdDevicesOther } from 'react-icons/md';

import styles from './LinkButton.module.scss';

import { LinkButtonProps } from './LinkButton.types';

const LinkButton: FC<LinkButtonProps> = ({ link, title, text, src, buttonStyle, children, icon, alt, onClick }) => {
  return (
    <Link href={link} onClick={onClick}>
      <div className={`${styles.container} ${buttonStyle && styles[buttonStyle]}`}>
        {src ? <Image src={src} width={16} height={16} priority alt={alt || link} /> : ''}
        {children}
        {icon === 'monitor' && <MdMonitor />}
        {icon === 'devices' && <MdDevicesOther />}
        {text || title ? (
          <div>
            <p className={styles.text}>{text}</p>
            <p className={styles.title}>{title}</p>
          </div>
        ) : (
          ''
        )}
      </div>
    </Link>
  );
};

export default memo(LinkButton);

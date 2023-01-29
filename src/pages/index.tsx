import Link from 'next/link';
import Image from 'next/image';
import logo from '@/styles/icons/logo.svg';
import { Button } from 'antd';
import styles from '../styles/Home.module.css';

export default function Home() {

  const drawioUrl = process.env.NODE_ENV === 'development'
    ? '/drawio?dev=1' : '/drawio';

  return (
    <div className={styles.container}>
      <div className={styles.logo_container}>
        <Image alt="logo" src={logo} />
      </div>
      <div className={styles.description}>
        <h1>Simple DrawIO Starter —— 基于 DrawIO 二开便捷脚手架</h1>
        <span>只专注于开发，无需关心 DrawIO 相关环境问题</span>
      </div>
      <div className={styles.btn_container}>
        <Link href={drawioUrl} passHref>
          <Button type="primary" size="large" style={{ width: 120 }}>画图</Button>
        </Link>
        <Link href={`/list`} passHref>
          <Button size="large" style={{ marginLeft: 20, width: 120 }}>个人中心</Button>
        </Link>
      </div>
    </div>
  );
}

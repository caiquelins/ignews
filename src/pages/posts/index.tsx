import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>15 Março de 2022</time>
            <strong>Meu título</strong>
            <p>Conteúdo, conteúdo, conteúdo, conteúdo, conteúdo, conteúdo, conteúdo, conteúdo, conteúdo.</p>
          </a>
          <a href="">
            <time>15 Março de 2022</time>
            <strong>Meu título</strong>
            <p>Conteúdo, conteúdo, conteúdo, conteúdo, conteúdo, conteúdo, conteúdo, conteúdo, conteúdo.</p>
          </a>
          <a href="">
            <time>15 Março de 2022</time>
            <strong>Meu título</strong>
            <p>Conteúdo, conteúdo, conteúdo, conteúdo, conteúdo, conteúdo, conteúdo, conteúdo, conteúdo.</p>
          </a>
        </div>
      </main>
    </>
  );
}

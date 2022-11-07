// Components
import Header from './../components/Header';
import Footer from './../components/Footer';

// Link
import Link from "next/link";

// MicroCMS
import { client } from "../../../libs/client";

// 日付表示調整
import Moment from 'react-moment'

export default function BlogId({ blog }) {
  return (
    <>
    <Header />
    <main style={{ marginTop: 64, maxWidth: 750, padding: '0.75rem'}}>
      <h1>{blog.title}</h1>
      <p>ここにサムネ画像</p>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Moment format="YYYY/MM/DD">
          <div>{blog.publishedAt}</div>
        </Moment>
        <Link href={`/blog/${blog.id}`}>
          {blog.category.name}
        </Link>
        <div style={{ margin: 0, marginRight: '0.5rem' }}>{blog.category.name}</div>
      </div>

      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.content}`,
        }}
      />
    </main>
    <Footer />
    </>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
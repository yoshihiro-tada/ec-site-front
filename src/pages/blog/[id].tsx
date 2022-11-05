// Components
import Header from './../components/Header';
import Footer from './../components/Footer';

// microCMS
import { client } from "../../../libs/client";

// 日付表示調整
import Moment from 'react-moment'

export default function BlogId({ blog }) {
  return (
    <>
    <Header />
    <main style={{ marginTop: 64 }}>
      <h1>{blog.title}</h1>
      <Moment format="YYYY/MM/DD">
        <p>{blog.publishedAt}</p>
      </Moment>
      <p>{blog.category.name}</p>
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
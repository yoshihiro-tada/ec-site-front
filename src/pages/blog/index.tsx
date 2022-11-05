import Link from "next/link";

// Components
import Header from './../components/Header';
import Footer from './../components/Footer';

// microCMS
import { client } from "../../../libs/client";

export default function Home({ blog }) {
  return (
    <>
    <Header />
    <div style={{ marginTop: 64 }}>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <Footer />
    </>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};
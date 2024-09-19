import React from 'react';
import Header from '@/components/shared/Header/Navbar';
import Footer from '@/components/shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import GoogleAnalyticsFile from '@/components/GoogleAnalyticsFile';
const Post = ({ data, slug }) => {
  const post = data[0];
  const metaTitle = post?.acf.meta_title || post?.title?.rendered;
  const metaDescription = post?.acf.meta_description || post?.description?.rendered;

  return (
    <div>
     
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={`https://greenfoundation.in/blog/${slug}`} />
        <meta name="robots" content="index, follow"/>
      </Head>

      <Header />
      <GoogleAnalyticsFile/>
      <div className='w-full g-0'>
        <Container fluid className="g-0" style={{ backgroundImage: `url("/aboutus/awards-recog/awards_banner.png")`, height: "70vh", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
          <Row className="g-0 flex-column flex-lg-row bg-opacity-50 p-2 bg-black h-100">
            <Container className='d-flex flex-column justify-content-center h-100'>
              <Col className="text-center d-flex justify-content-center flex-column lh-sm">
                {/* Ensure the post title is consistent between server and client */}
                {post?.title?.rendered && (
                  <div dangerouslySetInnerHTML={{ __html: post['title']['rendered'] }} className="text-white fs-1" />
                )}
              </Col>
            </Container>
          </Row>
        </Container>
        <Container className="pt-5">
          {/* Ensure the post content is consistent between server and client */}
          {post?.content?.rendered && (
            <div dangerouslySetInnerHTML={{ __html: post['content']['rendered'] }} />
          )}
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Post;

export async function getServerSideProps(context) {
  const { slug } = context.params; // Extract the slug from the URL
  const res = await fetch(`https://beta.greenfoundation.in/wp-json/wp/v2/seo-blog?_embed&slug=${slug}`);
  const data = await res.json();

  return {
    props: { data, slug },  // Pass slug to props
    notFound: !data || data.length === 0,
  };
}

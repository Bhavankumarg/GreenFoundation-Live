import React, { useEffect, useState } from 'react';
import Header from '@/components/shared/Header/Navbar';
import Footer from '@/components/shared/Footer/Footer';
import { Col, Container, Row, Image } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import configData from "../../config.json"
import { NextSeo } from 'next-seo';
import { usePathname } from 'next/navigation';


const post = ({ data }) => {
  const pathname = usePathname();
  return (
    <div>
      <NextSeo
        noindex={false}
        nofollow={false}
      />
      <Header />
      <div className='grid grid-cols-3 gap-5 w-full g-0'>
        {data.map((post, index) => (
          <>
            <Container fluid className="g-0"style={{backgroundImage:`url("/aboutus/awards-recog/awards_banner.png")`, height:"70vh", backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
              <Row className="g-0 flex-column flex-lg-row bg-opacity-25 p-2 bg-black h-100">
                <Col style={{ background: '' }} className="text-center d-flex justify-content-center flex-column lh-sm">
                  <div dangerouslySetInnerHTML={{ __html: post['title']['rendered'] }} className="text-white fs-1" />
                </Col>
               
              </Row>
            </Container>
            <Container className="pt-5">
              <div dangerouslySetInnerHTML={{ __html: post['content']['rendered'] }} />
            </Container>
          </>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default post;

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://beta.greenfoundation.in/wp-json/wp/v2/seo-blog?_embed&id=${id}`);
  const data = await res.json();
  console.log(data)
  //return { props: { data } };
  return {
    props: { data },
    // If data is empty, return a 404 status
    notFound: !data || data.length === 0,
  };
}

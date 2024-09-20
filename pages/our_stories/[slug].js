import { useRouter } from "next/router";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import slugify from "slugify";
import GoogleAnalyticsFile from "@/components/GoogleAnalyticsFile";
import storydata from "../../components/Data/ourstoriesdata";
import Link from "next/link";
import "../../components/Style";
import WebsiteSchema from "@/pages/our_stories/WebsiteSchema"
import "./post.css";

import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";
import { NextSeo } from "next-seo";
import { usePathname } from "next/navigation";
import PostNotFound from "../post-not-found";
// import WebsiteSchema from "@/components/Certification/WebsiteSchema";

const OurStoriesSlug = () => {
  const router = useRouter();
  const { slug } = router.query;

  const pathname = usePathname();

  const post = storydata.find(
    (post) => slugify(post.title, { lower: true }) === slug
  );

  if (!post) {
    return (
      <>
        <PostNotFound />
      </>
    );
  }
  return (
    <>
      {/* {
        post.content.map((item, index)=>(
            
        ))
    } */}

      <head>
        <title>{post.meta_title}</title>
        <meta name="description" content={post.meta_description} />
        <link rel="canonical" href={`https://greenfoundation.in${pathname}`} />
      </head>
      <WebsiteSchema />
      <Header />
      <GoogleAnalyticsFile />
      <Container fluid className="w-100">
        <Container className="py-5 p-0">
          <Link
            href="/our-stories"
            className="d-flex flex-md-row flex-column gap-3 justify-md-content-start align-content-center align-items-center text-decoration-none "
          >
            <Image src="/our-stories/back_to_stories_icon_green.svg" alt="" />
            <h5 className="p-0 m-0 text-green fw-bolder">
              Back to Our stories
            </h5>
          </Link>

          <hr className="my-4" />

          <Row className="p-0">
            <Col md={8}>
              <Image src={post.imagebanner} alt="" width="100%" />
              <h2 className="pt-3">{post.title}</h2>
              <h6 className="text-green py-3 our-stories-single-post-date">
                {post.date}
              </h6>
              {post.content.map((item, index) => (
                <div key={index}>
                  {item.type === "title" ? (
                    <h2> {item.text}</h2>
                  ) : (
                    <p className="our-stories-single-post-para">{item.text}</p>
                  )}
                </div>
              ))}
            </Col>
            {/* <Col>
                            <h2>Related stories</h2>
                        </Col> */}
          </Row>
        </Container>
      </Container>

      <Footer />
    </>
  );
};

export default OurStoriesSlug;

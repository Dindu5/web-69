import React from "react";
import {
  single_article,
  single_article_button,
  single_article_content,
  single_article_details,
  single_article_details_avatar,
  single_article_details_tag,
  single_article_details_readtime,
  single_article_details_clock,
  single_article_image,
  single_article_grid,
  single_article_related,
} from "./index.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import BlogCard from "@components/Cards/BlogCard";
import { navigate } from "gatsby";

const SingleArticle = () => {
  const relatedArticles = [
    {
      title: "Do You Know What Term Life Insurance Is?",
      author: "Romita Ghatak",
      image: (
        <StaticImage
          src="../../../assets/images/blog/blog1.png"
          placeholder="blurred"
          alt="Blog"
        />
      ),
      avatar: (
        <StaticImage
          src="../../../assets/images/user-one.png"
          placeholder="blurred"
          alt="Blog"
        />
      ),
    },
    {
      title: "Fun Friday: 5 Games To Engage With A Remote Team",
      author: "Sakshi Tiwari",
      image: (
        <StaticImage
          src="../../../assets/images/blog/blog2.png"
          placeholder="blurred"
          alt="Blog2"
        />
      ),
      avatar: (
        <StaticImage
          src="../../../assets/images/user-one.png"
          placeholder="blurred"
          alt="Blog2 - avatar"
        />
      ),
    },
    {
      title:
        "Empowering Employees, Nova Benefits Rolls Out An Inclusive Health Insurance Cover For Companies",
      author: "Nandini Jain",
      image: (
        <StaticImage
          src="../../../assets/images/blog/blog3.png"
          placeholder="blurred"
          alt="Blog"
        />
      ),
      avatar: (
        <StaticImage
          src="../../../assets/images/user-one.png"
          placeholder="blurred"
          alt="Blog"
        />
      ),
    },
  ];
  return (
    <div className={single_article}>
      <div className={single_article_button}>
        <button onClick={() => navigate(-1)}>
          <StaticImage
            className={single_article_details_tag}
            src="../../../assets/images/icon-caret-left.svg"
            placeholder="blurred"
            alt="Time"
          />
        </button>
        <p>Articles</p>
      </div>
      <h3>
        How to Measure the Impact of a Corporate Employee Wellness Program?
      </h3>
      <div className={single_article_details}>
        <div>
          <StaticImage
            className={single_article_details_avatar}
            src="../../../assets/images/user-one.png"
            placeholder="blurred"
            alt="Avatar"
          />
          <p>Grace Ghatak</p>
        </div>
        <div>
          <StaticImage
            className={single_article_details_tag}
            src="../../../assets/images/icon-tags.svg"
            placeholder="blurred"
            alt="Tag"
          />
          <p>Design</p>
        </div>
        <div className={single_article_details_readtime}>
          <StaticImage
            className={single_article_details_clock}
            src="../../../assets/images/icon-clock.svg"
            placeholder="blurred"
            alt="Time"
          />
          <p>5 min read</p>
        </div>
      </div>
      <StaticImage
        className={single_article_image}
        src="../../../assets/images/blog/blog-item1.png"
        placeholder="blurred"
        alt="Item"
      />

      <div className={single_article_content}>
        <h6>
          You’re doing your best to ensure your employees have a good experience
          at work, but how can you measure it effectively?
        </h6>
        <p>
          Corporate employee well-being solutions have one objective — to
          support employees in their well-being journey. The best employers seek
          employee wellness programs and services from this shared school of
          thought to enable a holistic well-being experience for their employees
          - at work and beyond.
        </p>
        <p>
          Employee wellness programs have become essential and a need of the
          hour - especially post the Covid-19 pandemic, followed by funding
          winter and lay-off season. These wellness programs are known to have
          remarkably improved different companies’ productivity. The corporate
          employee wellness programs should ideally consider a 360-degree
          comprehensive wellness suite that includes physical, mental,
          financial, and social wellness.
        </p>
        <p>
          The stressful working demanding schedule has made these employees
          prone to chronic illnesses. According to the research conducted by
          ASSOCHAM, about 72 per cent of employees are susceptible to
          cardiovascular disease in India. But corporate employee wellness
          programs have proved to be an efficient solution.
        </p>
        <p>
          But how do employers measure the effectiveness of their employee
          wellness programs? Here are some of the ways to track how much
          improvement wellness programs can have on a workspace:
        </p>
        <p>
          The stressful working demanding schedule has made these employees
          prone to chronic illnesses. According to the research conducted by
          ASSOCHAM, about 72 per cent of employees are susceptible to
          cardiovascular disease in India. But corporate employee wellness
          programs have proved to be an efficient solution.
        </p>
        <p>
          But how do employers measure the effectiveness of their employee
          wellness programs? Here are some of the ways to track how much
          improvement wellness programs can have on a workspace:
        </p>
      </div>
      <hr />
      <div className={single_article_related}>
        <StaticImage
          src="../../../assets/images/icon-confetti.svg"
          placeholder="blurred"
          alt="Blog2"
        />
        <p>More articles like this</p>
      </div>
      <div className={single_article_grid}>
        {relatedArticles.map((article, i) => {
          return (
            <BlogCard
              key={i}
              title={article.title}
              image={article.image}
              author={article.author}
              avatar={article.avatar}
              badge={article.badge}
              small={true}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SingleArticle;

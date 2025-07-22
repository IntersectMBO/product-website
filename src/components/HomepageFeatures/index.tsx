import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import VisionRoadmapImage from "@site/static/img/vision-roadmap.jpeg";
import WorkshopsImage from "@site/static/img/workshops.jpeg";
import BusinessInterviewsImage from "@site/static/img/business-interviews.jpeg";

import { Cta } from "../Cta";

type FeatureItem = {
  title: string;
  img: string | ComponentType<any>;
  description: JSX.Element;
  href?: string;
  cta?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Vision',
    img: VisionRoadmapImage,
    description: (
      <>
        We're building the vision for the future of Cardano.
      </>
    ),
    href: "/vision",
    cta: "Learn More"
  },
  {
    title: 'Workshops',
    img: WorkshopsImage,
    description: (
      <>
        Workshops are being ran by Product Committee Members and
        general community members. Learn more about the workshops
        that have been ran and view their outputs.
      </>
    ),
    href: "/workshops",
    cta: "Learn More"
  },
  {
    title: 'Business Interviews',
    img: BusinessInterviewsImage,
    description: (
      <>
        We are executing interviews with Businesses in and outside
        blockchain to identify what improvements to Cardano would
        help them find product market fit and retrospectively look
        at their experience with Cardano if they're already involved.
      </>
    ),
    href: "/business-interviews",
    cta: "Learn More"
  },
];

function Feature({
  title,
  img: Image,
  description,
  href,
  cta
}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {typeof Image === "string" ? (
          <img src={Image} />
        ) : (
          <Image />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        {href && cta ? (
          <Cta appearance="secondary" href={href}>
            {cta}
          </Cta>
        ) : null}
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

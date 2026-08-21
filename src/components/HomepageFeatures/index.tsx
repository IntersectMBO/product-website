import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import VisionImage from "@site/static/img/vision.jpeg";
import HardforkImage from "@site/static/img/hard-fork.jpeg";
import ProductResearchImage from "@site/static/img/product-research.jpeg";

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
    img: VisionImage,
    description: (
      <>
        We're building the vision for the future of Cardano.
      </>
    ),
    href: "/vision",
    cta: "Learn More"
  },
  {
    title: 'Hard Fork Planning',
    img: HardforkImage,
    description: (
      <>
        Track the planning and progress of upcoming Cardano hard forks,
        including feature scope, timelines, and stakeholder coordination.
      </>
    ),
    href: "/hardfork-planning",
    cta: "Learn More"
  },
  {
    title: 'Product Research Initiatives',
    img: ProductResearchImage,
    description: (
      <>
        The Product Committee commissions external research to inform
        Cardano's strategy, covering market positioning, adoption studies,
        brand perception, and emerging market opportunities.
      </>
    ),
    href: "/product-research",
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
